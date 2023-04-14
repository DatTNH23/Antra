from django.db import models

# Create your models here.


class PublicOffice(models.Model):

    name = models.CharField(max_length=50, unique=True, default='')


class Form(models.Model):
    title = models.CharField(max_length=100, default='')
    office_id = models.ForeignKey(
        PublicOffice, on_delete=models.CASCADE, to_field='id')


class Field(models.Model):
    field_name = models.CharField(max_length=100, default='')
    description = models.CharField(max_length=100, default='')
    form_id = models.ForeignKey(Form, on_delete=models.CASCADE, to_field='id')
