from django.http import JsonResponse
from .models import Product


def products_json(request):
    items = Product.objects.all()
    data = [item.to_dict_json() for item in items]
    response = {'data': data}
    return JsonResponse(response)


def products_add(request):
    products = [item.to_dict_json() for item in items]
    response = {'products': products}
    return JsonResponse(response)
