<?php
namespace App\Http\Controllers\OrderUpdater;

use App\User;
use Illuminate\Http\Request;
use App\LifeAndHealthChildOrder;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

class OrderUpdater extends Controller
{
    /**
     * Display the order updater dashboard
     */
    public function updateLifeOrders()
    {
        $child_dealers = User::where('user_type', 'child_dealer')->get();
        return view('frontend.pages.staff_update_life_order', ['child_dealers' => $child_dealers]);
    }

    /**
     * Search for orders based on parent dealer and user phone
     */
    public function searchOrders(Request $request)
    {
        try {
            // Log the incoming request for debugging
            Log::info('Search orders request received', [
                'all_data' => $request->all(),
                'content_type' => $request->header('Content-Type'),
                'method' => $request->method()
            ]);

            // Validate the request with more detailed rules
            $validated = $request->validate([
                'child_dealer_id' => 'required|integer|exists:users,id',
                'user_phone' => 'required|string|min:10|max:15'
            ]);

            $parentDealerId = $validated['child_dealer_id'];
            $userPhone = $validated['user_phone'];

            // Log the validated data
            Log::info('Validated search parameters', [
                'child_dealer_id' => $parentDealerId,
                'user_phone' => $userPhone
            ]);

            // Search for orders using your model
            $orders = LifeAndHealthChildOrder::where('sold_by', $parentDealerId)
                ->where('o_phone', $userPhone)
                ->latest()
                ->get();

            // Log the results
            Log::info('Search results', [
                'orders_count' => $orders->count(),
                'query_params' => [
                    'sold_by' => $parentDealerId,
                    'user_phone' => $userPhone
                ]
            ]);

            if ($orders->count() > 0) {
                return response()->json([
                    'success' => true,
                    'orders' => $orders,
                    'message' => 'Orders found successfully',
                    'count' => $orders->count()
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No orders found for this user and reseller combination',
                    'search_params' => [
                        'child_dealer_id' => $parentDealerId,
                        'user_phone' => $userPhone
                    ]
                ]);
            }
        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::error('Validation failed in search orders', [
                'errors' => $e->errors(),
                'input' => $request->all()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
                'details' => 'Please check that you have selected a valid reseller and entered a valid phone number'
            ], 422);
        } catch (\Exception $e) {
            // Log the error for debugging
            Log::error('Order search error', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'input' => $request->all()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while searching for orders: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get order data for the modal
     */
    public function getOrderData(Request $request)
    {
        try {
            $request->validate([
                'policy_id' => 'required|string'
            ]);

            $policyId = $request->policy_id;

            // Find the order
            $order = LifeAndHealthChildOrder::where('policy_id', $policyId)->firstOrFail();

            // Get temp nominee data
            $tempNominee = \App\Model\PolicyOwnersNominee\PolicyOwnersNominee::where('policy_id', $policyId)->first();

            return response()->json([
                'success' => true,
                'order' => $order,
                'temp_nominee' => $tempNominee,
                'message' => 'Order data retrieved successfully'
            ]);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found'
            ], 404);
        } catch (\Exception $e) {
            Log::error('Get order data error', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while fetching order data'
            ], 500);
        }
    }

   /**
     * Update order data
     */
    public function updateOrder(Request $request)
    {
        try {
            // Validate the request - following your pattern
            $validatedData = $request->validate([
                'policy_id' => 'required|string',
                'cat_id' => 'required|integer',
                'o_name' => 'nullable|string|max:255',
                'o_gender' => 'nullable|in:male,female,other',
                'o_email' => 'nullable|email|max:255',
                'o_DOB' => 'nullable|date',
                'o_id_type' => 'nullable|in:nid,passport,driving',
                'o_id_number' => 'nullable|string|max:255',
                'o_id_file' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:6048',
                'relation_with_nominee' => 'nullable|string|max:255',
                'n_name' => 'nullable|string|max:255',
                'n_gender' => 'nullable|in:male,female,other',
                'n_phone' => 'nullable|string|max:20',
                'n_email' => 'nullable|email|max:255',
                'n_DOB' => 'nullable|date',
                'n_id_type' => 'nullable|in:nid,passport,driving',
                'n_id_number' => 'nullable|string|max:255',
                'n_id_file' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:6048',
                'n_address' => 'nullable|string|max:500'
            ]);

            $policyId = $request->policy_id;

            // Find the order
            $order = LifeAndHealthChildOrder::where('policy_id', $policyId)->firstOrFail();

            // Handle file uploads first (following your pattern)
            if ($request->hasFile('o_id_file')) {
                $o_id_file = $request->file('o_id_file')->store('owner_ids', 'public');
                $order->o_id_file = $o_id_file;
            }

            if ($request->hasFile('n_id_file')) {
                $n_id_file = $request->file('n_id_file')->store('nominee_ids', 'public');
                $order->n_id_file = $n_id_file;
            }

            // Update owner information (only if not already set - following your logic)
            if (!$order->o_name && $request->o_name) $order->o_name = $request->o_name;
            if (!$order->o_gender && $request->o_gender) $order->o_gender = $request->o_gender;
            if (!$order->o_email && $request->o_email) $order->o_email = $request->o_email;
            if (!$order->o_DOB && $request->o_DOB) $order->o_DOB = $request->o_DOB;
            if (!$order->o_id_type && $request->o_id_type) $order->o_id_type = $request->o_id_type;
            if (!$order->o_id_number && $request->o_id_number) $order->o_id_number = $request->o_id_number;

            // Update nominee relation and address in main order table (following your pattern)
            if ($request->relation_with_nominee) $order->relation_with_nominee = $request->relation_with_nominee;
            if ($request->n_address) $order->n_address = $request->n_address;

            // Update nominee status if this is the first nominee update
            if ($order->nominee_edit_status === '' || $order->nominee_edit_status === null) {
                $order->nominee_edit_status = 'Pending';
            }

            $order->save();

            // Save Data to the PolicyOwnerNominee Table (following your exact pattern)
            try {
                // Check if nominee record already exists
                $policyOwnerNominee = \App\Model\PolicyOwnersNominee\PolicyOwnersNominee::where('policy_id', $policyId)->first();

                if (!$policyOwnerNominee) {
                    $policyOwnerNominee = new \App\Model\PolicyOwnersNominee\PolicyOwnersNominee();
                    $policyOwnerNominee->policy_id = $policyId;
                }

                // Update nominee fields in separate table (following your pattern)
                if ($request->cat_id) $policyOwnerNominee->cat_id = $request->cat_id;
                if ($request->relation_with_nominee) $policyOwnerNominee->relation_with_nominee = $request->relation_with_nominee;
                if ($request->n_name) $policyOwnerNominee->n_name = $request->n_name;
                if ($request->n_gender) $policyOwnerNominee->n_gender = $request->n_gender;
                if ($request->n_phone) $policyOwnerNominee->n_phone = $request->n_phone;
                if ($request->n_email) $policyOwnerNominee->n_email = $request->n_email;
                if ($request->n_DOB) $policyOwnerNominee->n_DOB = $request->n_DOB;
                if ($request->n_id_type) $policyOwnerNominee->n_id_type = $request->n_id_type;
                if ($request->n_id_number) $policyOwnerNominee->n_id_number = $request->n_id_number;
                if ($request->n_address) $policyOwnerNominee->n_address = $request->n_address;

                $policyOwnerNominee->save();

                // Update order nominee status to Processing if all required fields are filled
                if ($this->isNomineeDataComplete($policyOwnerNominee)) {
                    $order->nominee_edit_status = 'Processing';
                    $order->save();
                }

            } catch (\Exception $nomineeError) {
                // If nominee table doesn't exist or has issues, just log and continue
                Log::warning('Nominee table update failed, main order updated successfully', [
                    'error' => $nomineeError->getMessage(),
                    'policy_id' => $policyId
                ]);
            }

            Log::info('Information updated successfully for Policy ID: ' . $policyId);

            return response()->json([
                'success' => true,
                'message' => 'Order updated successfully',
                'order' => $order->fresh()
            ]);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found'
            ], 404);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            Log::error('Update order error', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while updating the order: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Check if nominee data is complete (updated to match your field names)
     */
    private function isNomineeDataComplete($nominee)
    {
        return $nominee->relation_with_nominee &&
               $nominee->n_name &&
               $nominee->n_gender &&
               $nominee->n_phone &&
               $nominee->n_DOB &&  // Changed from n_dob to n_DOB to match your pattern
               $nominee->n_id_type &&
               $nominee->n_id_number &&
               $nominee->n_address;
    }
}
