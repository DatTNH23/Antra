from django.urls import path
from .views import *
urlpatterns = [
    path('offices', PublicOfficeView.as_view()),
    path('forms', FormView.as_view()),
    path('fields', FieldView.as_view()),
    path('create-office', CreatePublicOffice.as_view()),
    path('create-form', CreateForm.as_view()),
    path('create-field', CreateField.as_view()),
    path('delete-form/<int:id>', DeleteForm.as_view()),
    path('delete-field/<int:id>', DeleteField.as_view())
]
