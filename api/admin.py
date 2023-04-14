from django.contrib import admin
from .models import *
# Register your models here.


class OfficeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


class FormAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'office_id')


class FieldAdmin(admin.ModelAdmin):
    list_display = ('id', 'field_name', 'description', 'form_id')


admin.site.register(PublicOffice, OfficeAdmin)

admin.site.register(Form, FormAdmin)

admin.site.register(Field, FieldAdmin)
