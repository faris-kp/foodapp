from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json

class Index(View):
    template_name = 'user/index.html'

    def get(self,request):
        return render(request, self.template_name)

    def post(self,request):
        pass


@method_decorator(csrf_exempt, name='dispatch')
class SignUp(View):

    template_name = 'user/signup.html'

    def get(self,request):
        return render(request,self.template_name)

    def post(self,request):
        data = json.loads(request.body)
        username = data['username']
        if not str(username).isalnum():
            return JsonResponse({'username_error': 'username should only contain alphanumeric characters'}, status=400)
        if User.objects.filter(username=username).exists():
            return JsonResponse({'username_error': 'sorry username in use,choose another one '}, status=409)
        return JsonResponse({'username_valid': True})


class SignIn(View):

    template_name = 'user/signin.html'

    def get(self,request):
        return render(request,self.template_name)

    def post(self,request):
        pass

