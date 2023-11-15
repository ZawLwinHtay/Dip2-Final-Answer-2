from django.shortcuts import render
from rest_framework import viewsets
from api_app.models import Posts
from api_app.serializers import PostSerializer

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer