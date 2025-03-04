from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator
from .models import FreelancerAccount, ClientAccount

CustomUser = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=CustomUser.objects.all())]
    )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'phone_number', 'password', 'password2', 'role')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return attrs

    def create(self, validated_data):
        print('create func ishladi')
        validated_data.pop('password2')
        print('validated_data.pop(password2)')
        user = CustomUser.objects.create_user(**validated_data)
        print('user created')

        if user.role == 'freelancer':
            print('freelancer')
            FreelancerAccount.objects.create(user=user)
        elif user.role == 'client':
            ClientAccount.objects.create(user=user)

        return user
        print('return user')


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    

class FreelancerAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerAccount
        fields = '__all__'
        read_only_fields = ('user',)

class ClientAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientAccount
        fields = '__all__'
        read_only_fields = ('user',)