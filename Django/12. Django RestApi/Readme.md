# Burger Builder - Full-Stack Application

A complete full-stack application for building custom burgers with Django REST API backend and React frontend. Users can create accounts, customize burgers with different ingredients, place orders, and view order history.

## Architecture Overview

- **Backend:** Django REST API with JWT authentication
- **Frontend:** React with Redux state management  
- **Database:** SQLite (development)
- **Authentication:** JWT tokens
- **API Communication:** Axios with CORS support

## Features

### 🔐 User Authentication
- Custom user model with email-based authentication
- JWT token-based authentication
- User registration and login
- Automatic login after registration
- Secure token storage and management

### 🍔 Burger Builder
- Interactive burger customization interface
- Dynamic ingredient addition/removal
- Real-time price calculation
- Visual burger preview
- Ingredient quantity management

### 📦 Order Management
- Complete order placement system
- Order history per user
- Order filtering by user authentication
- Customer details collection (address, phone, payment method)
- Real-time order status

### 🛡️ Security & Permissions
- JWT-based API authentication
- User-specific data filtering
- CORS configuration for React frontend
- Protected routes and API endpoints

## Technology Stack

### Backend
- **Framework:** Django with Django REST Framework
- **Authentication:** JWT (djangorestframework-simplejwt)
- **Database:** SQLite (development)
- **CORS:** django-cors-headers
- **API Testing:** Thunder Client / Postman

### Frontend
- **Framework:** React
- **State Management:** Redux
- **HTTP Client:** Axios
- **JWT Handling:** jwt-decode
- **UI Framework:** Reactstrap / Bootstrap
- **Routing:** React Router

## Installation & Setup

### Backend Setup

#### Prerequisites
- Python 3.8+
- pip package manager
- Virtual environment

#### 1. Environment Setup
```bash
# Create and activate virtual environment
python -m venv myenv

# On Windows:
myenv\Scripts\activate
# On macOS/Linux:
source myenv/bin/activate
```

#### 2. Install Dependencies
```bash
pip install django
pip install djangorestframework
pip install djangorestframework-simplejwt
pip install django-cors-headers
pip install pillow

# Save requirements
pip freeze > requirements.txt
```

#### 3. Django Project Setup
```bash
# Create project
django-admin startproject burgerbackend
cd burgerbackend

# Create app
python manage.py startapp api

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser
```

#### 4. Configuration

Update `settings.py`:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api',
    'rest_framework',
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS Settings
CORS_ALLOWED_ORIGINS = ["http://localhost:3000"]

# JWT Authentication
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

# Custom User Model
AUTH_USER_MODEL = 'api.User'
```

### Frontend Setup

#### Prerequisites
- Node.js 14+
- npm or yarn

#### 1. Install Dependencies
```bash
# Navigate to React project
cd burger-builder-frontend

# Install dependencies
npm install

# Install additional packages
npm install axios
npm install jwt-decode
npm install redux react-redux
npm install reactstrap bootstrap
```

#### 2. Start Development Servers
```bash
# Backend (from burgerbackend directory)
python manage.py runserver

# Frontend (from React project directory)
npm start
```

## Backend API Structure

### Models

#### User Model (Custom)
```python
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=100, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    USERNAME_FIELD = "email"
```

#### Ingredient Model
```python
class Ingredient(models.Model):
    salad = models.IntegerField(default=0)
    cheese = models.IntegerField(default=0)
    meat = models.IntegerField(default=0)
```

#### Order Model
```python
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ingredient = models.OneToOneField(Ingredient, on_delete=models.CASCADE)
    customer = models.OneToOneField(CustomerDetails, on_delete=models.CASCADE)
    price = models.CharField(max_length=20, default=0)
    orderTime = models.CharField(max_length=40, blank=True)
```

#### CustomerDetails Model
```python
class CustomerDetails(models.Model):
    deliveryAddress = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=20)
    paymentType = models.CharField(max_length=50, blank=True)
```

### API Endpoints

#### Authentication
- `POST /api/token/` - Login and get JWT token
- `POST /api/token/refresh/` - Refresh JWT token
- `POST /api/users/` - User registration

#### Orders
- `GET /api/orders/` - Get user's orders (authenticated)
- `POST /api/orders/` - Create new order (authenticated)
- `PUT /api/orders/{id}/` - Update order (authenticated)
- `DELETE /api/orders/{id}/` - Delete order (authenticated)

### Serializers

#### User Serializer
```python
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = User 
        fields = ['id', 'email', 'password']
```

#### Order Serializer (Nested)
```python
class OrderSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer()
    customer = CustomerSerializer()

    class Meta:
        model = Order
        fields = '__all__'
    
    def create(self, validated_data):
        # Custom create method for nested serializers
        ingredient_data = validated_data.pop('ingredient')
        customer_data = validated_data.pop('customer')
        
        ingredient = Ingredient.objects.create(**ingredient_data)
        customer = CustomerDetails.objects.create(**customer_data)
        
        order = Order.objects.create(
            ingredient=ingredient,
            customer=customer,
            **validated_data
        )
        return order
```

## Frontend Architecture

### Redux State Management

#### State Structure
```javascript
const INITIAL_STATE = {
    ingredients: [
        { type: "Salad", amount: 0 },
        { type: "Cheese", amount: 0 },
        { type: "Meat", amount: 0 },
    ],
    orders: [],
    orderLoading: true,
    totalPrice: 80,
    purchasable: false,
    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null,
};
```

#### Key Action Creators
```javascript
// Authentication
export const auth = (email, password, mode) => { ... }
export const logout = () => { ... }
export const authCheck = () => { ... }

// Orders
export const fetchOrder = (token, userId) => { ... }
export const resetIngredients = () => { ... }

// Ingredients
export const addIngredient = (igtype) => { ... }
export const removeIngredient = (igtype) => { ... }
```

### Authentication Flow

#### Signup Process
1. User submits email/password
2. POST to `/api/users/` for registration
3. Automatic POST to `/api/token/` for login
4. Store JWT token in localStorage
5. Redirect to burger builder

#### Login Process
1. User submits credentials
2. POST to `/api/token/`
3. Decode JWT to get user_id and expiration
4. Store token data in localStorage
5. Update Redux state

### Order Management

#### Placing Orders
```javascript
const submitHandler = () => {
    const order = {
        ingredient: ingredientConversion,
        price: props.totalPrice,
        customer: values,
        orderTime: new Date(),
        user: props.userId,
    };
    
    axios.post('http://127.0.0.1:8000/api/orders/', order)
        .then(response => {
            // Handle success
            props.resetIngredients();
        });
};
```

#### Fetching Orders
```javascript
export const fetchOrder = (token, userId) => dispatch => {
    const header = {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    };

    axios.get(`http://127.0.0.1:8000/api/orders/`, header)
        .then(response => {
            dispatch(loadOrder(response.data));
        });
};
```

## Key Components

### Backend ViewSets
```python
class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Order.objects.filter(user__id=user.id)
```

### Frontend Components
- **BurgerBuilder:** Main ingredient selection interface
- **CheckOut:** Order placement form
- **Orders:** Order history display
- **Auth:** Login/signup forms
- **SingleOrder:** Individual order display

## Security Features

### Backend Security
- JWT token authentication
- User-based data filtering
- Permission classes for protected endpoints
- CORS configuration for specific origins

### Frontend Security
- Secure token storage in localStorage
- Automatic token refresh handling
- Protected route management
- User session persistence

## Development Workflow

### Backend Testing
```bash
# Run Django tests
python manage.py test

# Use Thunder Client or Postman for API testing
# Test endpoints:
# - POST /api/users/ (signup)
# - POST /api/token/ (login)
# - GET /api/orders/ (with Authorization header)
```

### Frontend Development
```bash
# Start development server
npm start

# Build for production
npm run build

# Test authentication flow
# Test burger builder functionality
# Test order placement and history
```

## Deployment Considerations

### Backend Deployment
- Configure production database (PostgreSQL recommended)
- Set up proper SECRET_KEY management
- Configure static file serving
- Set DEBUG=False
- Configure allowed hosts
- Set up proper CORS origins

### Frontend Deployment
- Update API base URLs for production
- Configure build process
- Set up proper routing for SPA
- Optimize bundle size

## API Usage Examples

### User Registration
```bash
curl -X POST http://127.0.0.1:8000/api/users/ \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "securepassword"}'
```

### Login
```bash
curl -X POST http://127.0.0.1:8000/api/token/ \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "securepassword"}'
```

### Place Order
```bash
curl -X POST http://127.0.0.1:8000/api/orders/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "ingredient": {"salad": 2, "cheese": 1, "meat": 1},
    "customer": {"deliveryAddress": "123 Main St", "phone": "1234567890", "paymentType": "Cash On Delivery"},
    "price": "150",
    "orderTime": "2023-09-03T10:00:00Z",
    "user": 1
  }'
```

## Troubleshooting

### Common Issues
- **CORS errors:** Ensure django-cors-headers is properly configured
- **JWT token errors:** Check token expiration and refresh logic
- **Password hashing:** Ensure users are created with proper password hashing
- **Permission denied:** Verify JWT token is included in Authorization header

### Debug Tips
- Use browser developer tools for frontend debugging
- Check Django server logs for backend issues
- Use Thunder Client for API endpoint testing
- Verify Redux state changes in browser dev tools

## Contributing

1. Fork the repository
2. Create feature branches for backend and frontend changes
3. Follow PEP 8 for Python code
4. Use ESLint/Prettier for JavaScript code
5. Write tests for new features
6. Submit pull requests with clear descriptions

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support and questions:
- Backend API documentation: Check Django REST Framework browsable API
- Frontend components: Review React component documentation
- Authentication issues: Verify JWT token handling
- Order flow: Test complete user journey from signup to order placement

---

**Note:** This is a development setup. For production deployment, implement proper security measures, database configuration, and environment variable management.
