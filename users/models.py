from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    ROLES = (
        ('client', 'client'),
        ('freelancer', 'freelancer'),
    )
    role = models.CharField(max_length=10, choices=ROLES)
    phone_number = models.CharField(max_length=15, unique=True)
    
    def __str__(self):
        return self.username
    
class FreelancerAccount(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    rating = models.FloatField(max_length=5, default=1)
    category = models.ForeignKey("api.Category", on_delete=models.CASCADE, null=True, blank=True)
    subcategory = models.ForeignKey("api.Subcategory", on_delete=models.CASCADE, null=True, blank=True)
    github_url = models.CharField(max_length=255, null=True, blank=True)
    portfolio_url = models.CharField(max_length=255, null=True, blank=True)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    price = models.FloatField(null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.user.username
    
class ClientAccount(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    rating = models.FloatField(max_length=5, default=1)
    
    def __str__(self):
        return self.user.username