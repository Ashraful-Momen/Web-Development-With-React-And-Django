# Django Blog Project

A full-featured blogging platform built with Django, featuring user authentication, profile management, blog creation and editing, commenting system, and social interactions.

## Features

### 🔐 User Authentication & Profiles
- User registration and login system
- User profile management with profile pictures
- Password change functionality
- Automatic profile creation upon user registration
- Profile picture upload and management

### 📝 Blog Management
- Create, read, update blog posts
- Rich text blog content with image uploads
- Unique slug generation for SEO-friendly URLs
- Blog categorization and organization
- Personal blog dashboard for users

### 💬 Social Features
- Commenting system on blog posts
- Like/Unlike functionality for posts
- Real-time like and comment counters
- User interaction tracking

### 🎨 User Interface
- Bootstrap 5 responsive design
- Crispy Forms for enhanced form styling
- FontAwesome icons
- Mobile-friendly interface
- Custom template filters for content truncation

### 🖼️ Media Management
- Profile picture uploads
- Blog image uploads
- Automatic cleanup of old files
- Optimized media handling

## Technologies Used

- **Backend:** Django 4.2.4
- **Database:** SQLite (development)
- **Frontend:** Bootstrap 5, HTML5, CSS3, JavaScript
- **Forms:** Django Crispy Forms with Bootstrap 5
- **Image Processing:** Pillow
- **File Management:** django-cleanup
- **Authentication:** Django Auth System

## Installation & Setup

### Prerequisites
- Python 3.8+
- pip package manager
- Virtual environment (recommended)

### 1. Create and Setup Environment
```bash
# Create virtual environment
python -m venv myenv

# Activate virtual environment
# On Windows:
myenv\Scripts\activate
# On macOS/Linux:
source myenv/bin/activate
```

### 2. Install Dependencies
```bash
pip install django==4.2.4
pip install pillow
pip install django-crispy-forms
pip install crispy-bootstrap5
pip install django-cleanup
pip install django-autoslug  # Optional for automatic slug generation
```

### 3. Project Setup
```bash
# Create Django project
django-admin startproject My_Blog_Project

# Navigate to project directory
cd My_Blog_Project

# Create Django apps
python manage.py startapp App_Login
python manage.py startapp App_Blog
```

### 4. Directory Structure
Create the following directories:
```
My_Blog_Project/
├── templates/
│   ├── App_Login/
│   └── App_Blog/
├── static/
│   └── css/
├── media/
│   ├── profile_pic/
│   └── blog_image/
└── manage.py
```

### 5. Database Migration
```bash
python manage.py makemigrations App_Login App_Blog
python manage.py migrate
python manage.py createsuperuser
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
    'App_Login',
    'App_Blog',
    'crispy_forms',
    'crispy_bootstrap5',
    'django_cleanup.apps.CleanupConfig',
    'autoslug',  # Optional
]

# Crispy Forms
CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
CRISPY_TEMPLATE_PACK = "bootstrap5"

# Static and Media Files
STATIC_URL = 'static/'
STATICFILES_DIR = [BASE_DIR / 'static']
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Login URL
LOGIN_URL = '/account/login/'

# Time Zone
TIME_ZONE = 'Asia/Dhaka'  # Change as needed
```

## Usage

### Running the Development Server
```bash
python manage.py runserver
```

### Main URLs
- Home: `http://127.0.0.1:8000/`
- Blog List: `http://127.0.0.1:8000/blog/`
- Login: `http://127.0.0.1:8000/account/login/`
- Register: `http://127.0.0.1:8000/account/signup/`
- Profile: `http://127.0.0.1:8000/account/profile/`
- Create Blog: `http://127.0.0.1:8000/blog/write/`
- Admin Panel: `http://127.0.0.1:8000/admin/`

## App Structure

### App_Login
- **Models:**
  - UserProfile (extends User with profile picture)
- **Features:**
  - User registration with email
  - Login/logout functionality
  - Profile management
  - Profile picture upload and change
  - Password change functionality

### App_Blog
- **Models:**
  - Blog (title, content, image, slug, timestamps)
  - Comment (user comments on blogs)
  - Like (user likes on blogs)
- **Features:**
  - Blog creation with rich content
  - Blog editing and management
  - Comment system
  - Like/unlike functionality
  - Personal blog dashboard
  - Blog detail views with social features

## Key Features Implementation

### Custom Template Filters
Located in `App_Blog/templatetags/custom_filter.py`:
```python
from django import template

register = template.Library()

@register.filter
def range_filter(value):
    return value[:500] + '.....'
```

### Slug Generation
Automatic unique slug generation using UUID:
```python
from django.utils.text import slugify
import uuid

def generate_unique_slug(title):
    base_slug = slugify(title)
    unique_slug = base_slug + "-" + str(uuid.uuid4())[:8]
    return unique_slug
```

### File Upload Handling
- Profile pictures uploaded to `media/profile_pic/`
- Blog images uploaded to `media/blog_image/`
- Automatic cleanup of old files when updated

### Social Features
- Real-time like/unlike with AJAX-style interactions
- Comment threading and display
- User interaction tracking

## Models Overview

### Blog Model
```python
class Blog(models.Model):
    author = models.ForeignKey(User, related_name='post_author', on_delete=models.CASCADE)
    blog_title = models.CharField(max_length=259)
    slug = models.SlugField(max_length=269, unique=True)
    blog_content = models.TextField()
    blog_image = models.ImageField(upload_to='blog_image')
    publish_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now_add=True)
```

### Comment Model
```python
class Comment(models.Model):
    blog = models.ForeignKey(Blog, related_name='blog_comment', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='user_comment', on_delete=models.CASCADE)
    comment = models.TextField()
    comment_date = models.DateTimeField(auto_now_add=True)
```

### Like Model
```python
class Like(models.Model):
    blog = models.ForeignKey(Blog, related_name='like_blog', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='liker_user', on_delete=models.CASCADE)
```

## Forms

### User Registration
Custom signup form extending UserCreationForm with email field.

### Profile Management
- User profile editing form
- Profile picture upload form
- Password change form

### Blog Management
- Blog creation form with title, content, and image
- Comment form for user interactions

## URL Patterns

### Main URLs
```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('App_Login.urls')),
    path('blog/', include(('App_Blog.urls', 'App_Blog'), namespace='App_Blog')),
    path('', views.index, name='index'),
]
```

### App_Login URLs
- `signup/` - User registration
- `login/` - User login
- `logout/` - User logout
- `profile/` - User profile view
- `change_profile/` - Edit profile
- `password/` - Change password
- `add_picture/` - Add profile picture
- `change_picture/` - Change profile picture

### App_Blog URLs
- `` - Blog list view
- `write/` - Create new blog
- `details/<slug>/` - Blog detail view
- `like/<pk>/` - Like a blog post
- `unlike/<pk>/` - Unlike a blog post
- `my_blogs/` - User's personal blogs
- `edit_blog/<pk>/` - Edit blog post

## Templates

### Base Template Structure
- `base.html` - Main template with Bootstrap
- `header.html` - Navigation component
- App-specific templates in respective app folders

### Key Template Features
- Responsive Bootstrap navigation
- User dropdown with profile picture
- Form styling with Crispy Forms
- Social interaction buttons
- Comment threading

## Security Features

- CSRF protection on all forms
- Login required decorators for sensitive views
- User authorization for editing own content
- Proper file upload validation
- Slug-based URLs for SEO and security

## Development Notes

### Template Tags
Custom template filters are created in `App_Blog/templatetags/` for content formatting.

### File Management
django-cleanup automatically removes old files when models are updated.

### User Experience
- Automatic profile creation upon user registration
- Seamless profile picture management
- Intuitive blog creation and editing workflow

## Requirements.txt
Create a `requirements.txt` file:
```
Django==4.2.4
Pillow>=8.0.0
django-crispy-forms>=1.14.0
crispy-bootstrap5>=0.6
django-cleanup>=6.0.0
django-autoslug>=1.9.8
```

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
- Contact: [your-email@example.com]

---

**Note:** This is a development version. For production deployment, ensure proper security configurations, database setup, environment variables, and static file serving are properly configured.
