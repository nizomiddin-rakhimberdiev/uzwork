
from rest_framework import generics

from users.serializers import CustomUser
from api.models import Category, Subcategory, Chat, Offer, Work
from api.serializers import CategorySerializer, SubcategorySerializer, WorkSerializer, OfferSerializer, ChatSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly, IsAuthenticated
from api.permissions import IsClient, IsFreelancer


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        if not self.request.user.is_staff:
            raise PermissionError("Faqat adminlar kategoriya qo'shishi mumkin!")
        serializer.save()


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUser]


class SubcategoryList(generics.ListCreateAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        if not self.request.user.is_staff:
            raise PermissionError("Faqat adminlar kategoriya qo'shishi mumkin!")
        serializer.save()


class SubcategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer
    permission_classes = [IsAdminUser]


class WorkList(generics.ListCreateAPIView):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [IsFreelancer]


class WorkDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [IsFreelancer]


class OfferList(generics.ListCreateAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
    permission_classes = [IsClient]


class OfferDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
    permission_classes = [IsClient]


class ChatList(generics.ListCreateAPIView):
    serializer_class = ChatSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Chat.objects.filter(sender=user) | Chat.objects.filter(receiver=user)

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)


class ChatDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ChatSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Chat.objects.filter(sender=user) | Chat.objects.filter(receiver=user)

from django.shortcuts import render

# Create your views here.
def home_view(request):
    return render(request, 'home/index.html')

def orders_view(request):
    return render(request, 'home/orders.html')



def freelancers_view(request):
    return render(request, 'home/freelancers.html')

def freelancer_login(request):
    return render(request, 'freelancer_login.html')

def client_login(request):
    return render(request, 'client_login.html')

def freelancer_dashboard(request):

    return render(request, 'freelancer/index.html')

def client_dashboard(request):
    return render(request, 'client/index.html')

def freelancer_profile(request):
    return render(request, 'freelancer/aboutme.html')

def client_profile(request):
    return render(request, 'client_profile.html')

def freelancer_offers(request):
    return render(request, 'freelancer/offers.html')

def client_works(request):
    return render(request, 'client_works.html')

def client_offers(request):
    return render(request, 'client_offers.html')

def freelancer_orders(request):
    return render(request, 'freelancer/orders.html')

def client_messages(request):
    return render(request, 'client_messages.html')

def freelancer_messages(request):
    return render(request, 'freelancer_messages.html')

def create_work(request):
    return render(request, 'create_work.html')


