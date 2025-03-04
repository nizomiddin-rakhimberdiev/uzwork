from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, LoginSerializer, FreelancerAccountSerializer, ClientAccountSerializer
from django.contrib.auth import get_user_model
from .models import FreelancerAccount, ClientAccount
from rest_framework.permissions import IsAuthenticated

CustomUser = get_user_model()


from django.shortcuts import render, redirect
from rest_framework.views import APIView
from .serializers import RegisterSerializer
from django.contrib.auth import get_user_model

CustomUser = get_user_model()

class RegisterView(APIView):
    def get(self, request):
        return render(request, 'register.html')

    def post(self, request):
        try:
            # Django formadan kelayotgan ma'lumotlar request.POST da bo'ladi
            data = {
                'username': request.POST.get('username'),
                'email': request.POST.get('email'),
                'phone_number': request.POST.get('phone_number'),
                'role': request.POST.get('role'),
                'password': request.POST.get('password'),
                'password2': request.POST.get('password2'),
            }
            
            serializer = RegisterSerializer(data=data)
            if serializer.is_valid():
                user = serializer.save()
                print("Foydalanuvchi yaratildi:", user.username)
                return redirect('login')

            print("Xatoliklar:", serializer.errors)
            return render(request, 'register.html', {'error': serializer.errors})

        except Exception as e:
            print(f"Xatolik yuz berdi: {e}")
            return render(request, 'register.html', {'error': str(e)})


class LoginView(APIView):
    def get(self, request):
        return render(request, 'login.html')

    def post(self, request):
        serializer = LoginSerializer(data=request.POST)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)

            if user:
                login(request, user)
                refresh = RefreshToken.for_user(user)
                return render(request, 'login.html', {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                })

            return render(request, 'login.html', {'error': "Invalid credentials"})

        return render(request, 'login.html', {'errors': serializer.errors})

    
    
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        if user.role == 'freelancer':
            profile = FreelancerAccount.objects.get(user=user)
            serializer = FreelancerAccountSerializer(profile)
        elif user.role == 'client':
            profile = ClientAccount.objects.get(user=user)
            serializer = ClientAccountSerializer(profile)
        else:
            return Response({'error': 'Invalid role'}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        user = request.user
        if user.role == 'freelancer':
            profile = FreelancerAccount.objects.get(user=user)
            serializer = FreelancerAccountSerializer(profile, data=request.data, partial=True)
        elif user.role == 'client':
            profile = ClientAccount.objects.get(user=user)
            serializer = ClientAccountSerializer(profile, data=request.data, partial=True)
        else:
            return Response({'error': 'Invalid role'}, status=status.HTTP_400_BAD_REQUEST)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request):
        user = request.user
        if user.role == 'freelancer':
            profile = FreelancerAccount.objects.get(user=user)
            serializer = FreelancerAccountSerializer(profile, data=request.data, partial=True)
        elif user.role == 'client':
            profile = ClientAccount.objects.get(user=user)
            serializer = ClientAccountSerializer(profile, data=request.data, partial=True)
        else:
            return Response({'error': 'Invalid role'}, status=status.HTTP_400_BAD_REQUEST)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
