from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('myproject.core.urls')),
    path('product/', include('myproject.product.urls')),
    path('admin/', admin.site.urls),
]
