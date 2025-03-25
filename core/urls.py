
from django.urls import path
from .views import (
    CategoryList, CategoryDetail,
    SubcategoryList, SubcategoryDetail,
    WorkList, WorkDetail,
    OfferList, OfferDetail,
    ChatList, ChatDetail, client_profile, client_dashboard, home_view, freelancer_dashboard, freelancer_offers,
    freelancer_profile, freelancer_orders, orders_view, freelancers_view
)

urlpatterns = [
    path("", home_view, name='home'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),

    path('subcategories/', SubcategoryList.as_view(), name='subcategory-list'),
    path('subcategories/<int:pk>/', SubcategoryDetail.as_view(), name='subcategory-detail'),

    path('works/', WorkList.as_view(), name='work-list'),
    path('works/<int:pk>/', WorkDetail.as_view(), name='work-detail'),

    path('orders/', orders_view, name='orders'),
    path('freelancers/', freelancers_view, name='freelancers'),

    path('offers/', OfferList.as_view(), name='offer-list'),
    path('offers/<int:pk>/', OfferDetail.as_view(), name='offer-detail'),

    path('chats/', ChatList.as_view(), name='chat-list'),
    path('chats/<int:pk>/', ChatDetail.as_view(), name='chat-detail'),

    path('client/', client_dashboard, name='client'),
    path('freelancer/', freelancer_dashboard, name='freelancer'),
    path('freelancer-offers/', freelancer_offers, name='freelancer-offers'),
    path('freelancer-orders/', freelancer_orders, name='freelancer-orders'),
    path('freelancer-profile/', freelancer_profile, name='freelancer-profile'),
]
