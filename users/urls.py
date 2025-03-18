from django.urls import path
from .views import RegisterView, LoginView, ProfileView, FreelancerLoginView, ClientLoginView, FreelancerProfileView, \
    ClientProfileView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('freelancer/login/', FreelancerLoginView.as_view(), name='freelancer_login'),
    path('client/login/', ClientLoginView.as_view(), name='client_login'),
    path('freelancer/<str:username>/', FreelancerProfileView.as_view(), name='freelancer_profile'),
    path('client/<str:username>/', ClientProfileView.as_view(), name='client_profile'),
    path('profile/', ProfileView.as_view(), name='profile')
]
