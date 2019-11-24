from django.urls import path
from myproject.product import views as v


app_name = 'product'


urlpatterns = [
    path('', v.products_json, name='products_json'),
    path('add/', v.products_add, name='products_add'),
    path('<int:pk>/', v.products_edit, name='products_edit'),
]
