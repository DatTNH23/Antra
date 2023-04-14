from rest_framework import serializers
from .models import *


class PublicOfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PublicOffice
        fields = ('id', 'name')


class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = ('id', 'title', 'office_id')


class FieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = Field
        fields = ('id', 'field_name', 'description', 'form_id')


class CreatePublicOfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PublicOffice
        fields = ['name']


class CreateFormsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = ('title', 'office_id')


class CreateFieldsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Field
        fields = ('field_name', 'form_id')


class OfficeUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Field
        fields = ['id']


class FormDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = ['id']


class FieldDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Field
        fields = ['id']


class FormDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = ['id']
