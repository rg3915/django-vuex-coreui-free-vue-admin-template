# django-vuex

Este projeto usa o VueJS e Vuex apenas como arquivos estáticos do Django.

E usa os templates de [Coreui Free Vue Admin Template](https://github.com/coreui/coreui-free-vue-admin-template).

![imagem](imagem.png)


## Como rodar o projeto?

`npm run build` para gerar os arquivos pra rodar somente com Django.

* Clone esse repositório.
* Crie um virtualenv com Python 3.
* Ative o virtualenv.
* Instale as dependências.
* Rode as migrações.

```
git clone https://github.com/rg3915/django-vuex.git
cd django-vuex
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python contrib/env_gen.py
python manage.py migrate
```

Em Dev rodar dois servidores, back e front.

#### backend

```
source .venv/bin/activate
python manage.py runserver
```

#### frontend

```
cd frontend
npm run serve
```

## Comandos pra criar o projeto do zero

```
# Criando o projeto Django
python -m venv .venv
source .venv/bin/activate
pip install -U pip; pip install django python-decouple django-extensions dj-database-url
django-admin startproject myproject .
cd myproject
python ../manage.py startapp core
cd ..
# Criando uma pasta chamada contrib com um env_gen.py
git clone https://gist.github.com/22626de522f5c045bc63acdb8fe67b24.git /tmp/contrib; if [ ! -d contrib ]; then mkdir contrib; fi; cp /tmp/contrib/env_gen.py contrib/
python contrib/env_gen.py
```

Editando `views.py`

```
cat << EOF > myproject/core/views.py
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')
EOF
```

Editando `core/urls.py`

```
cat << EOF > myproject/core/urls.py
from django.urls import path
from myproject.core import views as v


app_name = 'core'


urlpatterns = [
    path('', v.index, name='index'),
]
EOF
```

Editando `urls.py`

```
cat << EOF > myproject/urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('myproject.core.urls')),
    path('admin/', admin.site.urls),
]
EOF
```


### Frontend

[Coreui Free Vue Admin Template](https://github.com/coreui/coreui-free-vue-admin-template)

```
# Usando node 11
nvm use 11

# Baixando o template Coreui Free Vue Admin Template
# e renomeando para `frontend`
git clone https://github.com/coreui/coreui-free-vue-admin-template.git frontend
cd frontend
npm install
```

Editando vue.config.js

```
vim vue.config.js
module.exports = {
  ...
  outputDir: '../myproject/core/templates',
  assetsDir: '../static'
}
EOF
```

Gerando o build.

```
npm run build
```

Rodando a aplicação Django.

```
cd ..
python manage.py runserver
```

