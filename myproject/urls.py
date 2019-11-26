from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView


urlpatterns = [
    path('', include('myproject.core.urls')),
    path('product/', include('myproject.product.urls')),
    path('admin/', admin.site.urls),
    re_path('^.*$', TemplateView.as_view(template_name="index.html")),
]
