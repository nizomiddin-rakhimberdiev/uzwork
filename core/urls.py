
from django.urls import path
from .views import (
    CategoryList, CategoryDetail,
    SubcategoryList, SubcategoryDetail,
    WorkList, WorkDetail,
    OfferList, OfferDetail,
    ChatList, ChatDetail, client_profile, client_dashboard
)

urlpatterns = [
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),

    path('subcategories/', SubcategoryList.as_view(), name='subcategory-list'),
    path('subcategories/<int:pk>/', SubcategoryDetail.as_view(), name='subcategory-detail'),

    path('works/', WorkList.as_view(), name='work-list'),
    path('works/<int:pk>/', WorkDetail.as_view(), name='work-detail'),

    path('offers/', OfferList.as_view(), name='offer-list'),
    path('offers/<int:pk>/', OfferDetail.as_view(), name='offer-detail'),

    path('chats/', ChatList.as_view(), name='chat-list'),
    path('chats/<int:pk>/', ChatDetail.as_view(), name='chat-detail'),

    path('client/', client_dashboard, name='client'),
]
