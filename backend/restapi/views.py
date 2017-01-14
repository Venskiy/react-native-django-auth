from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET', 'POST'])
def test_view(request):
    print(request.user.is_authenticated())
    return Response({'result': 'success'})
