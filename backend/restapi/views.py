from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET', 'POST'])
def hello_world(request):
    if request.user.is_authenticated():
        return Response({'message': 'Hello, World!'})
    else:
        return Response({'message': 'You are not authenticated:('})
