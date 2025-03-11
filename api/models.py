from django.db import models
from users.models import ClientAccount, FreelancerAccount, CustomUser
from django.contrib.auth import get_user_model

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    
class Subcategory(models.Model):
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):       
        return f"{self.category_id.name} - {self.name}"
    
class Work(models.Model):
    WORK_TYPE = (
        ('soatlik', 'soatlik'),
        ('butun_ish', 'butun_ish')
    )
    title = models.CharField(max_length=255)
    description = models.TextField()
    type = models.CharField(max_length=25, choices=WORK_TYPE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = models.ForeignKey(Subcategory, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    deadline = models.DateField()
    client_id = models.ForeignKey(ClientAccount, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
class Chat(models.Model):
    sender = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='sender_message')
    receiver = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='receiver_message')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.client_id} - {self.freelancer_id}"
    

class Offer(models.Model):
    STATUS_CHOICES = (
        ('pending', 'pending'),
        ('accepted', 'accepted'),
        ('rejected','rejected')
    )
    freelancer = models.ForeignKey(FreelancerAccount, on_delete=models.CASCADE)
    work = models.ForeignKey(Work, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.freelancer} - {self.work}"