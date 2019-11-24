from django.db import models


class Product(models.Model):
    name = models.CharField('nome', max_length=100)
    price = models.DecimalField('preço', max_digits=6, decimal_places=2)

    class Meta:
        verbose_name = "produto"
        verbose_name_plural = "produtos"

    def __str__(self):
        return self.name

    def to_dict_json(self):
        return {
            'pk': self.pk,
            'name': self.name,
            'price': self.price,
        }
