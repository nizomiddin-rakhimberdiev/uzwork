from rest_framework import serializers
from .models import Category, Subcategory, Chat, Offer, Work
from users.serializers import FreelancerAccountSerializer, ClientAccountSerializer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')
    
class SubcategorySerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    
    class Meta:
        model = Subcategory
        fields = ('id', 'name', 'category')

    
class WorkSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    subcategory = SubcategorySerializer(read_only=True)
    client_id = ClientAccountSerializer(read_only=True)
    
    class Meta:
        model = Work
        fields = ('id', 'title', 'type', 'description', 'category', 'subcategory', 'client_id', 'created_at')        


class OfferSerializer(serializers.ModelSerializer):
    freelancer = FreelancerAccountSerializer(read_only=True)
    work = WorkSerializer(read_only=True)
    
    class Meta:
        model = Offer
        fields = ('id', 'freelancer', 'work', 'status', 'message', 'created_at')
        

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id', 'sender', 'receiver', 'message')