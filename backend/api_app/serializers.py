from rest_framework import serializers
from api_app.models import Posts

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Posts
        fields = ['id', 'name', 'title', 'content', 'date']