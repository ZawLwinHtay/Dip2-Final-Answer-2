
cmd run path   ```/DIP-AssignMentAnswer-2/```
``` python
py -m venv env-name

/env/Script/acitve
```


## BackEnd
cmd run path   ```/DIP-AssignMentAnswer-2/backend```
### First run cmd
```python
pip install django==4.2.7

pip install djangorestframework

pip install django-cors-headers

pip install psycopg2
```

## Edit This Files

### api_app folder

###### Settings.py
```python
INSTALLED_APPS = (
    ...,
    'rest_framework',
    'api_app',
    'corsheaders',
    ...
)
```

```python
MIDDLEWARE = [
    ...,
    'corsheaders.middleware.CorsMiddleware',
    ...,
]
```


```python
CORS_ALLOW_ALL_ORIGINS = True
```

```python
DATABASES = {
    'default': {
        'ENGINE':'django.db.backends.postgresql_psycopg2',
        'NAME': 'CRUD',
        'USER': 'postgres',
        'PASSWORD': 'psql',
        'HOST': 'localhost',
    }
}
```

###### urls.py
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('api_app.urls')),
]
```

### backend folder

###### urls.py
```python
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api_app.views import PostViewSet

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('',include(router.urls)),
]
```






## PostgreSQL Database
#### Creat new database & Edit settings.py
```
Database_name = PostDipAns2
```

#### settings.py
```python
DATABASES = {

    'default': {

        'ENGINE':'django.db.backends.postgresql_psycopg2',

        'NAME': 'PostDipAns2',

        'USER': 'postgres',

        'PASSWORD': 'your_password',

        'HOST': 'localhost',

    }

}
```

### Run cmd
cmd run path   ```/DIP-AssignMentAnswer-2/backend```
```python
python manage.py makemigrations

python manage.py migrate

python manage.py runserver
```


## FrontEnd

cmd run path   ```/DIP-AssignMentAnswer-2/frontend```

### Install Tailwindcss

[tailwind docs](https://tailwindcss.com/docs/guides/vite)

```javascript
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Install Axios Package
```javascript
npm install axios
```

### Install React-router-dom
```javascript
npm install react-router-dom
```

### Install heroicon package
```javascript
npm i @heroicons/react
```


```javascript
npm run dev
```

# Already Use For This Project