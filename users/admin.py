from django.contrib import admin
from .models import ClientAccount, CustomUser, FreelancerAccount

# Register your models here.
admin.site.register(ClientAccount)
admin.site.register(FreelancerAccount)
admin.site.register(CustomUser)