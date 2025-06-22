<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Order Updater Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        /* Animated background elements */
        body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="g" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:1" /><stop offset="100%" style="stop-color:rgba(255,255,255,0);stop-opacity:0" /></radialGradient></defs><circle cx="25" cy="25" r="20" fill="url(%23g)"><animate attributeName="cy" values="25;75;25" dur="3s" repeatCount="indefinite"/></circle><circle cx="75" cy="75" r="15" fill="url(%23g)"><animate attributeName="cx" values="75;25;75" dur="4s" repeatCount="indefinite"/></circle></svg>') repeat;
            animation: float 20s ease-in-out infinite;
            pointer-events: none;
        }

        @keyframes float {

            0%,
            100% {
                transform: translateY(0px) rotate(0deg);
            }

            50% {
                transform: translateY(-20px) rotate(180deg);
            }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
            z-index: 1;
        }

        .header {
            text-align: center;
            margin-bottom: 3rem;
            color: white;
        }

        .header h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            background: linear-gradient(45deg, #fff, #e0e7ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .dashboard-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 3rem;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            margin-bottom: 2rem;
        }

        .dashboard-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        }

        .dashboard-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 35px 70px rgba(0, 0, 0, 0.3);
        }

        .form-section {
            margin-bottom: 2.5rem;
        }

        .form-label {
            display: block;
            color: white;
            font-weight: 600;
            margin-bottom: 0.75rem;
            font-size: 1.1rem;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .form-input,
        .form-select {
            width: 100%;
            padding: 1rem 1.5rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            color: white;
            font-size: 1rem;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            outline: none;
        }

        .form-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        .form-input:focus,
        .form-select:focus {
            border-color: rgba(255, 255, 255, 0.6);
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
            transform: scale(1.02);
        }

        .form-select option {
            background: #4c1d95;
            color: white;
        }

        .search-btn {
            width: 100%;
            padding: 1.25rem 2rem;
            background: linear-gradient(135deg, #8b5cf6, #a855f7);
            border: none;
            border-radius: 16px;
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
            position: relative;
            overflow: hidden;
        }

        .search-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .search-btn:hover::before {
            left: 100%;
        }

        .search-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(139, 92, 246, 0.6);
        }

        .search-btn:active {
            transform: scale(0.98);
        }

        .alert {
            padding: 1.5rem;
            border-radius: 16px;
            margin-top: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(15px);
        }

        .alert-error {
            background: rgba(239, 68, 68, 0.2);
            color: #fecaca;
            border-color: rgba(239, 68, 68, 0.3);
        }

        .alert-success {
            background: rgba(16, 185, 129, 0.2);
            color: #10b981;
            border-color: rgba(16, 185, 129, 0.3);
        }

        .loading {
            display: none;
            text-align: center;
            color: white;
            margin-top: 1rem;
        }

        .spinner {
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 3px solid white;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        /* Orders Table Styles */
        .orders-section {
            display: none;
        }

        .orders-table {
            width: 100%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            overflow: hidden;
            margin-top: 2rem;
        }

        .orders-table table {
            width: 100%;
            border-collapse: collapse;
        }

        .orders-table th {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 1rem;
            text-align: left;
            font-weight: 600;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .orders-table td {
            padding: 1rem;
            color: white;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .orders-table tr:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .status-badge {
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .status-active {
            background: rgba(16, 185, 129, 0.3);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.5);
        }

        .status-expired {
            background: rgba(239, 68, 68, 0.3);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.5);
        }

        .status-pending {
            background: rgba(239, 68, 68, 0.3);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.5);
        }

        .status-approved {
            background: rgba(16, 185, 129, 0.3);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.5);
        }

        .status-processing {
            background: rgba(245, 158, 11, 0.3);
            color: #f59e0b;
            border: 1px solid rgba(245, 158, 11, 0.5);
        }

        .status-rejected {
            background: rgba(239, 68, 68, 0.3);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.5);
        }

        .status-unknown {
            background: rgba(107, 114, 128, 0.3);
            color: #6b7280;
            border: 1px solid rgba(107, 114, 128, 0.5);
        }

        .update-btn {
            padding: 0.6rem 1.2rem;
            background: linear-gradient(135deg, #8b5cf6, #a855f7);
            border: none;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-size: 0.9rem;
        }

        .update-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
            text-decoration: none;
            color: white;
        }

        .update-btn:disabled {
            background: rgba(107, 114, 128, 0.5);
            cursor: not-allowed;
        }

        .back-btn {
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 2rem;
            border: none;
        }

        .back-btn:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        /* Modal Styles */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
            overflow-y: auto;
            display: none;
        }

        .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
        }

        .modal-content {
            position: relative;
            max-width: 900px;
            margin: 2rem auto;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
            z-index: 1001;
        }

        .modal-header {
            padding: 1.5rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .modal-title {
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0;
        }

        .modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .modal-close:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .modal-body {
            padding: 2rem;
            max-height: 70vh;
            overflow-y: auto;
        }

        .modal-footer {
            padding: 1.5rem 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-group.full-width {
            grid-column: 1 / -1;
        }

        .section-title {
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .readonly-data {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 1.5rem;
            margin-top: 1rem;
        }

        .readonly-data .data-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }

        .readonly-data .data-item {
            color: white;
        }

        .readonly-data .data-item strong {
            color: rgba(255, 255, 255, 0.8);
        }

        .current-file {
            margin-top: 0.5rem;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
        }

        .current-file a {
            color: #8b5cf6;
            text-decoration: none;
        }

        .current-file a:hover {
            text-decoration: underline;
        }

        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-primary {
            background: linear-gradient(135deg, #8b5cf6, #a855f7);
            color: white;
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }

            .header h1 {
                font-size: 2rem;
            }

            .dashboard-card {
                padding: 2rem;
            }

            .modal-content {
                margin: 1rem;
                max-width: calc(100% - 2rem);
            }

            .orders-table {
                overflow-x: auto;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Order Updater Dashboard</h1>
            <p>Life & Health Order Management System</p>
        </div>

        <!-- Main Dashboard -->
        <div id="mainDashboard" class="dashboard-card">
            <div class="form-section">
                <label class="form-label" for="resellerSelect">Select Reseller (Child Dealer)</label>
                <select id="resellerSelect" class="form-select" name="child_dealer_id" required>
                    <option value="">Choose a reseller...</option>
                    <!-- Replace with your blade template data -->
                    @if (isset($child_dealers) && $child_dealers->isNotEmpty())
                        @foreach ($child_dealers as $dealer)
                            <option value="{{ $dealer->id }}">ID: {{ $dealer->id }} - {{ $dealer->name }}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="form-section">
                <label class="form-label" for="userPhoneInput">Owner Phone Number (o_phone)</label>
                <input type="text" id="userPhoneInput" class="form-input" placeholder="Enter owner phone number..."
                    name="user_phone">
            </div>

            <button id="searchBtn" class="search-btn" onclick="searchUser()">
                🔍 Search User Orders
            </button>

            <div id="loading" class="loading">
                <div class="spinner"></div>
                <p>Searching for user...</p>
            </div>

            <div id="resultsSection" class="results-section">
                <!-- Results will be populated here -->
            </div>
        </div>

        <!-- Orders Section -->
        <div id="ordersSection" class="orders-section">
            <div class="dashboard-card">
                <button class="back-btn" onclick="goBackToSearch()">
                    <i class="fas fa-arrow-left"></i> Back to Search
                </button>
                <h2 style="color: white; margin-bottom: 2rem; text-align: center;">Life & Health Insurance Policies</h2>
                <div id="ordersList">
                    <!-- Orders table will be populated here -->
                </div>
            </div>
        </div>

        <!-- Update Order Modal -->
        <div id="updateOrderModal" class="modal">
            <div class="modal-backdrop" onclick="closeModal()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Update Policy Information</h5>
                    <button type="button" class="modal-close" onclick="closeModal()">×</button>
                </div>
                <div class="modal-body" id="modalBody">
                    <!-- Modal content will be loaded here -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="button" class="btn btn-primary" onclick="submitOrderUpdate()">
                        <i class="fas fa-save"></i> Update Information
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script>
        function searchUser() {
            const resellerId = document.getElementById('resellerSelect').value;
            const userPhone = document.getElementById('userPhoneInput').value.trim();
            const resultsSection = document.getElementById('resultsSection');
            const loading = document.getElementById('loading');

            console.log('Search initiated with:', {
                child_dealer_id: resellerId,
                user_phone: userPhone
            });

            // Clear previous results
            resultsSection.innerHTML = '';
            resultsSection.style.display = 'none';

            // Validation
            if (!resellerId) {
                showAlert('Please select a reseller first.', 'error');
                return;
            }

            if (!userPhone) {
                showAlert('Please enter an owner phone number.', 'error');
                return;
            }

            // Show loading
            loading.style.display = 'block';

            // Get CSRF token
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            // Create FormData with correct field names
            const formData = new FormData();
            formData.append('child_dealer_id', parseInt(resellerId));
            formData.append('user_phone', userPhone);

            // Make AJAX request to Laravel backend
            fetch('/staff/search-orders', {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                        'Accept': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: formData
                })
                .then(response => {
                    console.log('Response status:', response.status);

                    if (!response.ok) {
                        return response.text().then(text => {
                            console.error('Error response text:', text);
                            try {
                                const jsonData = JSON.parse(text);
                                throw new Error(
                                    `Error (${response.status}): ${JSON.stringify(jsonData.errors || jsonData.message)}`
                                    );
                            } catch (e) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    loading.style.display = 'none';
                    console.log('Success response:', data);

                    if (data.success) {
                        if (data.orders && data.orders.length > 0) {
                            showOrdersList(data.orders);
                        } else {
                            showAlert('No orders found for this user and reseller combination.', 'error');
                        }
                    } else {
                        showAlert(data.message || 'User not found for this reseller', 'error');
                    }
                })
                .catch(error => {
                    loading.style.display = 'none';
                    console.error('Fetch error:', error);
                    showAlert(`Search failed: ${error.message}`, 'error');
                });
        }

        function showOrdersList(orders) {
            // Hide main dashboard and show orders section
            document.getElementById('mainDashboard').style.display = 'none';
            document.getElementById('ordersSection').style.display = 'block';

            const ordersList = document.getElementById('ordersList');

            let ordersHTML = `
                <div class="orders-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Policy ID</th>
                                <th>Package Name</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Policy Status</th>
                                <th>Nominee Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            orders.forEach(order => {
                const startDate = formatDate(order.policy_start_date);
                const endDate = formatDate(order.policy_end_date);
                const isExpired = new Date(order.policy_end_date) < new Date();
                const policyStatus = isExpired ? 'Expired' : 'Active';
                const policyStatusClass = isExpired ? 'status-expired' : 'status-active';

                // Determine nominee status class
                let nomineeStatusClass = 'status-unknown';
                switch (order.nominee_edit_status?.toLowerCase()) {
                    case 'pending':
                        nomineeStatusClass = 'status-pending';
                        break;
                    case 'approved':
                        nomineeStatusClass = 'status-approved';
                        break;
                    case 'processing':
                        nomineeStatusClass = 'status-processing';
                        break;
                    case 'rejected':
                        nomineeStatusClass = 'status-rejected';
                        break;
                    default:
                        nomineeStatusClass = 'status-unknown';
                }

                ordersHTML += `
                    <tr>
                        <td><strong>${order.policy_id}</strong></td>
                        <td>${order.Pname || 'N/A'}</td>
                        <td>${startDate}</td>
                        <td>${endDate}</td>
                        <td><span class="status-badge ${policyStatusClass}">${policyStatus}</span></td>
                        <td><span class="status-badge ${nomineeStatusClass}">${order.nominee_edit_status || 'Unknown'}</span></td>
                        <td>
                            ${isExpired ?
                                '<button class="update-btn" disabled>Policy Expired</button>' :
                                `<button class="update-btn" onclick="updateOrder('${order.policy_id}')">
                                        <i class="fas fa-edit"></i> Update Info
                                    </button>`
                            }
                        </td>
                    </tr>
                `;
            });

            ordersHTML += `
                        </tbody>
                    </table>
                </div>
            `;

            ordersList.innerHTML = ordersHTML;
        }

        function updateOrder(policyId) {
            // Show modal and loading
            showModal();
            showModalLoading();

            // Fetch order data
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            fetch('/staff/get-order-data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        policy_id: policyId
                    })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        populateModalForm(data.order, data.temp_nominee);
                    } else {
                        closeModal();
                        showAlert(data.message || 'Failed to load order data', 'error');
                    }
                })
                .catch(error => {
                    closeModal();
                    console.error('Error:', error);
                    showAlert('An error occurred while loading order data.', 'error');
                });
        }

        function populateModalForm(order, tempNominee) {
            const modalBody = document.getElementById('modalBody');

            modalBody.innerHTML = `
                <form id="updateOrderForm" enctype="multipart/form-data">
                    <input type="hidden" name="policy_id" value="${order.policy_id}">
                    <input type="hidden" name="cat_id" value="8">

                    <!-- Owner Information -->
                    <div class="form-section">
                        <h6 class="section-title">
                            <i class="fas fa-user"></i> Owner Information
                        </h6>
                        <div class="form-grid">
                            <div class="form-group">
                                <label class="form-label">Name</label>
                                <input type="text" name="o_name" class="form-input" value="${order.o_name || ''}" ${order.o_name ? 'readonly' : ''}>
                            </div>
                            <div class="form-group">
                                <label class="form-label">ID Number</label>
                                <input type="text" name="o_id_number" class="form-input" value="${order.o_id_number || ''}" ${order.o_id_number ? 'readonly' : ''}>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" name="o_email" class="form-input" value="${order.o_email || ''}" ${order.o_email ? 'readonly' : ''}>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Date of Birth</label>
                                <input type="date" name="o_DOB" class="form-input" value="${order.o_DOB || ''}" ${order.o_DOB ? 'readonly' : ''}>
                            </div>
                            <div class="form-group">
                                <label class="form-label">ID Type</label>
                                <select name="o_id_type" class="form-select" ${order.o_id_type ? 'disabled' : ''}>
                                    <option value="">Select ID Type</option>
                                    <option value="nid" ${order.o_id_type === 'nid' ? 'selected' : ''}>NID</option>
                                    <option value="passport" ${order.o_id_type === 'passport' ? 'selected' : ''}>Passport</option>
                                    <option value="driving" ${order.o_id_type === 'driving' ? 'selected' : ''}>Driving License</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Gender</label>
                                <select name="o_gender" class="form-select" ${order.o_gender ? 'disabled' : ''}>
                                    <option value="">Select Gender</option>
                                    <option value="male" ${order.o_gender === 'male' ? 'selected' : ''}>Male</option>
                                    <option value="female" ${order.o_gender === 'female' ? 'selected' : ''}>Female</option>
                                </select>
                            </div>
                            <div class="form-group full-width">
                                <label class="form-label">ID Document</label>
                                <input type="file" name="o_id_file" class="form-input" ${order.o_id_file ? 'readonly' : ''}>
                                ${order.o_id_file ? `<div class="current-file">Current: <a href="${order.o_id_file}" target="_blank">${getFileName(order.o_id_file)}</a></div>` : ''}
                            </div>
                        </div>
                    </div>

                    ${order.nominee_edit_status === 'Approved' ?
                        `<!-- Approved Nominee Information (Read-only) -->
                            <div class="form-section">
                                <h6 class="section-title">
                                    <i class="fas fa-users"></i> Nominee Information (Approved)
                                </h6>
                                <div class="readonly-data">
                                    <div class="data-grid">
                                        <div class="data-item"><strong>Relation:</strong> ${order.relation_with_nominee || 'N/A'}</div>
                                        <div class="data-item"><strong>Name:</strong> ${order.n_name || 'N/A'}</div>
                                        <div class="data-item"><strong>Gender:</strong> ${order.n_gender ? order.n_gender.charAt(0).toUpperCase() + order.n_gender.slice(1) : 'N/A'}</div>
                                        <div class="data-item"><strong>Phone:</strong> ${order.n_phone || 'N/A'}</div>
                                        <div class="data-item"><strong>Email:</strong> ${order.n_email || 'N/A'}</div>
                                        <div class="data-item"><strong>Date of Birth:</strong> ${order.n_DOB || 'N/A'}</div>
                                        <div class="data-item"><strong>ID Type:</strong> ${order.n_id_type ? order.n_id_type.charAt(0).toUpperCase() + order.n_id_type.slice(1) : 'N/A'}</div>
                                        <div class="data-item"><strong>ID Number:</strong> ${order.n_id_number || 'N/A'}</div>
                                        <div class="data-item" style="grid-column: 1 / -1;"><strong>ID Document:</strong> ${order.n_id_file ? `<a href="${order.n_id_file}" target="_blank">${getFileName(order.n_id_file)}</a>` : 'N/A'}</div>
                                        <div class="data-item" style="grid-column: 1 / -1;"><strong>Address:</strong> ${order.n_address || 'N/A'}</div>
                                    </div>
                                </div>
                            </div>`
                        :
                        `<!-- Editable Nominee Information -->
                            <div class="form-section">
                                <h6 class="section-title">
                                    <i class="fas fa-users"></i> Nominee Information
                                </h6>
                                <div class="form-grid">
                                    <div class="form-group">
                                        <label class="form-label">Relation with Nominee</label>
                                        <input type="text" name="relation_with_nominee" class="form-input" value="${tempNominee?.relation_with_nominee || ''}">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Name</label>
                                        <input type="text" name="n_name" class="form-input" value="${tempNominee?.n_name || ''}">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Gender</label>
                                        <select name="n_gender" class="form-select">
                                            <option value="">Select Gender</option>
                                            <option value="male" ${tempNominee?.n_gender === 'male' ? 'selected' : ''}>Male</option>
                                            <option value="female" ${tempNominee?.n_gender === 'female' ? 'selected' : ''}>Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Phone</label>
                                        <input type="text" name="n_phone" class="form-input" value="${tempNominee?.n_phone || ''}">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Email</label>
                                        <input type="email" name="n_email" class="form-input" value="${tempNominee?.n_email || ''}">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Date of Birth</label>
                                        <input type="date" name="n_DOB" class="form-input" value="${tempNominee?.n_dob || ''}">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">ID Type</label>
                                        <select name="n_id_type" class="form-select">
                                            <option value="">Select ID Type</option>
                                            <option value="nid" ${tempNominee?.n_id_type === 'nid' ? 'selected' : ''}>NID</option>
                                            <option value="passport" ${tempNominee?.n_id_type === 'passport' ? 'selected' : ''}>Passport</option>
                                            <option value="driving" ${tempNominee?.n_id_type === 'driving' ? 'selected' : ''}>Driving License</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">ID Number</label>
                                        <input type="text" name="n_id_number" class="form-input" value="${tempNominee?.n_id_number || ''}">
                                    </div>
                                    <div class="form-group full-width">
                                        <label class="form-label">ID Document</label>
                                        <input type="file" name="n_id_file" class="form-input">
                                        ${tempNominee?.n_id_file ? `<div class="current-file">Current: <a href="${tempNominee.n_id_file}" target="_blank">${getFileName(tempNominee.n_id_file)}</a></div>` : ''}
                                    </div>
                                    <div class="form-group full-width">
                                        <label class="form-label">Address</label>
                                        <input type="text" name="n_address" class="form-input" value="${tempNominee?.n_address || ''}" required>
                                    </div>
                                </div>
                            </div>`
                    }
                </form>
            `;
        }

        function submitOrderUpdate() {
            const form = document.getElementById('updateOrderForm');
            const formData = new FormData(form);
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            // Show loading state
            const submitBtn = event.target;
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Updating...';
            submitBtn.disabled = true;

            fetch('/staff/update-order', {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                        'Accept': 'application/json'
                    },
                    body: formData
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;

                    if (data.success) {
                        closeModal();
                        showAlert('Order updated successfully!', 'success');
                        // Refresh the search to show updated data
                        setTimeout(() => {
                            searchUser();
                        }, 2000);
                    } else {
                        showAlert(data.message || 'Failed to update order', 'error');
                    }
                })
                .catch(error => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    console.error('Error:', error);
                    showAlert('An error occurred while updating the order.', 'error');
                });
        }

        function showModal() {
            document.getElementById('updateOrderModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('updateOrderModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function showModalLoading() {
            document.getElementById('modalBody').innerHTML = `
                <div style="text-align: center; padding: 2rem; color: white;">
                    <div class="spinner"></div>
                    <p>Loading order data...</p>
                </div>
            `;
        }

        function goBackToSearch() {
            document.getElementById('ordersSection').style.display = 'none';
            document.getElementById('mainDashboard').style.display = 'block';

            // Clear results
            document.getElementById('resultsSection').innerHTML = '';
            document.getElementById('resultsSection').style.display = 'none';
        }

        function formatDate(dateString) {
            if (!dateString) return 'N/A';
            const date = new Date(dateString);
            return date.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
        }

        function getFileName(path) {
            if (!path) return '';
            return path.split('/').pop().split('\\').pop();
        }

        function showAlert(message, type) {
            const resultsSection = document.getElementById('resultsSection');
            resultsSection.innerHTML = `
                <div class="alert alert-${type}">
                    ${message}
                </div>
            `;
            resultsSection.style.display = 'block';
        }

        // Allow Enter key to trigger search
        document.getElementById('userPhoneInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchUser();
            }
        });

        // Auto-focus on user input when reseller is selected
        document.getElementById('resellerSelect').addEventListener('change', function() {
            if (this.value) {
                document.getElementById('userPhoneInput').focus();
            }
        });

        // Close modal when clicking outside
        document.getElementById('updateOrderModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    </script>
</body>

</html>
