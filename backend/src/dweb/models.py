from django.db import models

# Create your models here.
class DWeb(models.Model):
    courseName = models.CharField(max_length=100)
    provider = models.CharField(max_length=50, default="", editable=False)
    instructorName = models.CharField(max_length=50, default="", editable=False)
    duration = models.DurationField
    difficulty = models.CharField(max_length=15)
    price = models.DecimalField
    label = models.CharField
    universityEndorsement  = models.CharField
    link = models.CharField

    def __str__(self):
            return self.courseName