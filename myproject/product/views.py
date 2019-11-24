import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product


def products_json(request):
    items = Product.objects.all()
    data = [item.to_dict_json() for item in items]
    response = {'data': data}
    return JsonResponse(response)


@csrf_exempt
def products_add(request):
    data = json.loads(request.POST.get('obj'))
    name = data['name']
    price = data['price']
    #price = _price.replace(',', '.')
    item = Product.objects.create(name=name, price=price)
    data = [item.to_dict_json()]
    response = {'data': data}
    return JsonResponse(response)


@csrf_exempt
def products_edit(request, pk):
    data = json.loads(request.POST.get('obj'))
    name = data['name']
    _price = data['price']
    price = _price.replace(',', '.')
    obj = Product.objects.get(pk=pk)
    obj.name = name
    obj.price = price
    obj.save()
    data = obj.to_dict_json()
    response = {'data': data}
    return JsonResponse(response)
