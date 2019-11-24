from django.urls import path
from myproject.product import views as v


app_name = 'product'


urlpatterns = [
    path('', v.products_json, name='products_json'),
]
