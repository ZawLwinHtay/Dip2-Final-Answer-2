from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api_app.views import PostViewSet

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('',include(router.urls)),
]