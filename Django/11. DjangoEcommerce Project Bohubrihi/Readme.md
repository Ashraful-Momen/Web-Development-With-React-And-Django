# Django Ecommerce Project

A full-featured ecommerce web application built with Django, featuring user authentication, product management, shopping cart, order processing, and payment integration.

## Features

### 🔐 Authentication & User Management
- Custom user model with email-based authentication
- User registration and login system
- User profile management with address information
- Profile completion validation

### 🛍️ Product Management
- Product catalog with categories
- Product detail pages with image gallery
- Category-based product filtering
- Search functionality across product names and prices
- Pagination for product listings

### 🛒 Shopping Cart & Orders
- Add to cart functionality
- Cart item quantity management (increase/decrease)
- Remove items from cart
- Real-time cart total calculation
- Order history tracking

### 💳 Payment Processing
- SSLCommerz payment gateway integration
- Secure checkout process
- Order confirmation and status tracking
- Billing address management

### 📧 Communication
- Contact form with email functionality
- Order confirmation emails
- Mailtrap integration for development

### 🎨 User Interface
- Bootstrap 5 responsive design
- Crispy Forms for enhanced form styling
- FontAwesome icons
- Mobile-friendly interface

## Technologies Used

- **Backend:** Django 4.2.5
- **Database:** SQLite (development)
- **Frontend:** Bootstrap 5, HTML5, CSS3, JavaScript
- **Payment:** SSLCommerz
- **Email:** SMTP (Gmail/Mailtrap)
- **Forms:** Django Crispy Forms
- **Authentication:** Django Auth with custom user model

## Installation & Setup

### Prerequisites
- Python 3.8+
- pip package manager
- Virtual environment (recommended)

### 1. Clone and Setup Environment
```bash
# Create virtual environment
python -m venv env

# Activate virtual environment
# On Windows:
env\Scripts\activate
# On macOS/Linux:
source env/bin/activate
```

### 2. Install Dependencies
```bash
pip install django==4.2.5
pip install django-crispy-forms
pip install crispy-bootstrap5
pip install requests
pip install sslcommerz-lib
```

### 3. Project Setup
```bash
# Create Django project
django-admin startproject ecommerce_project

# Create Django apps
python manage.py startapp App_Login
python manage.py startapp App_Shop
python manage.py startapp App_Order
python manage.py startapp App_Payment
python manage.py startapp Contact_form
```

### 4. Database Migration
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

### 5. Directory Structure
Create the following directories:
```
ecommerce_project/
├── templates/
│   ├── App_Login/
│   ├── App_Shop/
│   ├── App_Order/
│   ├── App_Payment/
│   └── Contact_form/
├── static/
│   └── css/
├── media/
└── manage.py
```

## Configuration

### Settings Configuration
Update `settings.py` with the following configurations:

```python
# Apps
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    "crispy_forms",
    "crispy_bootstrap5",
    "App_Login",
    "App_Shop",
    "App_Order",
    "App_Payment",
    "Contact_form",
]

# Custom User Model
AUTH_USER_MODEL = 'App_Login.User'
LOGIN_URL = '/accounts/login/'

# Crispy Forms
CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
CRISPY_TEMPLATE_PACK = "bootstrap5"

# Static and Media Files
STATIC_URL = '/static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
STATICFILES_DIR = [BASE_DIR / 'static']
```

### Email Configuration

For development (Mailtrap):
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'sandbox.smtp.mailtrap.io'
EMAIL_HOST_USER = 'your_mailtrap_username'
EMAIL_HOST_PASSWORD = 'your_mailtrap_password'
EMAIL_PORT = '2525'
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
```

For production (Gmail):
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your_email@gmail.com'
EMAIL_HOST_PASSWORD = 'your_app_password'
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
```

### Payment Configuration
```python
# SSLCommerz Configuration
STORE_ID = 'your_store_id'
STORE_PASS = 'your_store_password'
```

## Usage

### Running the Development Server
```bash
python manage.py runserver
```

### Creating Admin User
```bash
python manage.py createsuperuser
```

### Admin Interface
- Access admin panel at: `http://127.0.0.1:8000/admin/`
- Add categories and products through admin interface
- Manage users and orders

### Main URLs
- Home: `http://127.0.0.1:8000/`
- Login: `http://127.0.0.1:8000/accounts/login/`
- Register: `http://127.0.0.1:8000/accounts/signup/`
- Cart: `http://127.0.0.1:8000/cart/`
- Checkout: `http://127.0.0.1:8000/payment/checkout/`
- Contact: `http://127.0.0.1:8000/contact/`

## App Structure

### App_Login
- Custom user model with email authentication
- User profile management
- Registration and login forms
- User dashboard

### App_Shop
- Product and category models
- Product listing and detail views
- Search functionality
- Category-based filtering
- Pagination

### App_Order
- Shopping cart functionality
- Order management
- Cart item manipulation
- Order history

### App_Payment
- Billing address management
- SSLCommerz payment integration
- Checkout process
- Order confirmation

### Contact_form
- Contact form with email functionality
- Customer inquiry handling

## Key Features Implementation

### Custom User Authentication
- Email-based login instead of username
- Automatic profile creation on user registration
- Profile completion validation

### Shopping Cart
- Session-based cart management
- Real-time quantity updates
- Cart total calculations
- Template tags for cart count display

### Payment Processing
- SSLCommerz sandbox integration
- Secure transaction handling
- Order status updates after payment
- Transaction ID tracking

### Search & Filtering
- Product name and price search
- Category-based filtering
- Pagination for large product lists

## Development Notes

### Template Tags
Custom template tags are implemented in `App_Order/templatetags/cart_tags.py` for cart functionality.

### Model Signals
Post-save signals are used to automatically create user profiles upon user registration.

### Error Handling
Proper error handling is implemented for payment failures and cart operations.

## Security Considerations

- CSRF protection enabled
- Secure payment processing
- User authentication required for sensitive operations
- Proper form validation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support and questions:
- Create an issue in the repository
- Use the contact form in the application
- Email: [your-email@example.com]

---

**Note:** This is a development version. For production deployment, ensure proper security configurations, database setup, and environment variables are properly configured.
