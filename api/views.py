from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .Serializers import *
# Create your views here.


class PublicOfficeView(generics.ListAPIView):
    queryset = PublicOffice.objects.all()
    serializer_class = PublicOfficeSerializer


class FormView(generics.ListAPIView):
    queryset = Form.objects.all()
    serializer_class = FormSerializer


class FieldView(generics.ListAPIView):
    queryset = Field.objects.all()
    serializer_class = FieldSerializer


class CreatePublicOffice(APIView):
    serializer_class = CreatePublicOfficeSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            office = PublicOffice(name=name)
            office.save()
            return Response(PublicOfficeSerializer(office).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateForm(APIView):
    serializer_class = CreateFormsSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            office_id = serializer.data.get('office_id')
            form = Form(title=title,
                        office_id=PublicOffice.objects.get(id=office_id))
            form.save()
            return Response(PublicOfficeSerializer(form).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateField(APIView):
    serializer_class = CreateFieldsSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            field_name = serializer.data.get('field_name')
            form_id = serializer.data.get('form_id')
            field = Field(field_name=field_name,
                          form_id=Form.objects.get(id=form_id))
            field.save()
            return Response(PublicOfficeSerializer(field).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class DeleteForm(APIView):
    def post(self, request, id, format=None):
        form = Form.objects.filter(id=id)
        if form.exists():
            form.delete()
            return Response({'Message': 'Success'}, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class DeleteField(APIView):

    def post(self, request, id, format=None):
        field = Field.objects.filter(id=id)
        if (field.exists()):
            field.delete()
            return Response({'Message': 'Success'}, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
