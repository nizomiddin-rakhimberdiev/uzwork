from rest_framework import serializers
from .models import Category, Subcategory, Chat, Offer, Work
from users.models import ClientAccount, FreelancerAccount
from users.serializers import ClientAccountSerializer, FreelancerAccountSerializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

class SubcategorySerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())  # ID orqali jo‘natish mumkin

    class Meta:
        model = Subcategory
        fields = ('id', 'name', 'category')

class WorkSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())  
    subcategory = serializers.PrimaryKeyRelatedField(queryset=Subcategory.objects.all())
    client_id = serializers.PrimaryKeyRelatedField(queryset=ClientAccount.objects.all(), write_only=True)

    class Meta:
        model = Work
        fields = ('id', 'title', 'type', 'description', 'category', 'subcategory', 'client_id', 'price', 'deadline', 'created_at')

    def create(self, validated_data):
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            client_account = ClientAccount.objects.get(user=request.user)
            validated_data["client_id"] = client_account
        return super().create(validated_data)

class OfferSerializer(serializers.ModelSerializer):
    freelancer = serializers.PrimaryKeyRelatedField(queryset=FreelancerAccount.objects.all())
    work = serializers.PrimaryKeyRelatedField(queryset=Work.objects.all())

    class Meta:
        model = Offer
        fields = ('id', 'freelancer', 'work', 'status', 'message', 'created_at')

    def create(self, validated_data):
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            freelancer = FreelancerAccount.objects.get(user=request.user)
            validated_data["freelancer"] = freelancer
        return super().create(validated_data)
        

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id', 'sender', 'receiver', 'message')
