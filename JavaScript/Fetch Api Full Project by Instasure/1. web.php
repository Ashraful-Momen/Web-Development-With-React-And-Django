//Ashraful => for the order updater : specially for the life and health order :

Route::middleware(['auth'])->prefix('staff')->group(function () {
    // Dashboard route
    Route::get('/update_life_orders', [OrderUpdater::class, 'updateLifeOrders'])->name('order.updater.dashboard');

    // Search orders route - expects child_dealer_id and user_phone
    Route::post('/search-orders', [OrderUpdater::class, 'searchOrders'])->name('order.search');

    // Get order data for modal
    Route::post('/get-order-data', [OrderUpdater::class, 'getOrderData'])->name('order.get.data');

    // Update order route
    Route::post('/update-order', [OrderUpdater::class, 'updateOrder'])->name('order.update.ajax');
});
