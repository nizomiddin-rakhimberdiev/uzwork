from django.contrib import admin
from .models import Category, Subcategory, Offer, Chat, Work

# Register your models here.
admin.site.register(Category)
admin.site.register(Subcategory)
admin.site.register(Offer)
admin.site.register(Chat)
admin.site.register(Work)