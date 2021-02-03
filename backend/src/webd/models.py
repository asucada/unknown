from django.db import models

# Create your models here.

class Webdev(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title