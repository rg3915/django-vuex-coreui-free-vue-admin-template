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
    # get values
    name = data['name']
    _price = data['price']
    price = _price.replace(',', '.')
    # create object
    obj = Product.objects.create(name=name, price=price)
    # return data serialized
    data = obj.to_dict_json()
    return JsonResponse(data)


@csrf_exempt
def products_edit(request, pk):
    data = json.loads(request.POST.get('obj'))
    # get values
    name = data['name']
    _price = data['price']
    price = _price.replace(',', '.')
    # get object
    obj = Product.objects.get(pk=pk)
    # edit values
    obj.name = name
    obj.price = price
    obj.save()
    # return data serialized
    data = obj.to_dict_json()
    return JsonResponse(data)


@csrf_exempt
def products_delete(request, pk):
    # get object
    obj = Product.objects.get(pk=pk)
    # delete object
    obj.delete()
    # return data serialized
    data = {'deleted': True}
    return JsonResponse(data)
