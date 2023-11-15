from django.db import models
# Create your models here.

class Posts(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=255)
    date = models.CharField(max_length=50)

    def __str__(self):
        return self.name