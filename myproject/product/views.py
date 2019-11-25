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
    # pega valores
    name = data['name']
    _price = data['price']
    price = _price.replace(',', '.')
    # cria objeto
    obj = Product.objects.create(name=name, price=price)
    # retorna dados serializados
    data = obj.to_dict_json()
    return JsonResponse(data)


@csrf_exempt
def products_edit(request, pk):
    data = json.loads(request.POST.get('obj'))
    # pega valores
    name = data['name']
    _price = data['price']
    price = _price.replace(',', '.')
    # pega objeto
    obj = Product.objects.get(pk=pk)
    # edita valores
    obj.name = name
    obj.price = price
    obj.save()
    # retorna dados serializados
    data = obj.to_dict_json()
    return JsonResponse(data)


@csrf_exempt
def products_delete(request, pk):
    obj = Product.objects.get(pk=pk)
    obj.delete()
    data = {'deleted': True}
    return JsonResponse(data)
