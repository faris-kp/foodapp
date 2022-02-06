from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from  validate_email import validate_email
import json
import sys

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
        try:
            username=''
            email=''
            data = json.loads(request.body)
            print("data",data)
            if len(data) > 3:
                pass # TODO signUp
            if 'username' in data:
                username = data['username']
                if not str(username).isalnum():
                    print("enterd")
                    return JsonResponse({'username_error': 'username should only contain alphanumeric characters'}, status=400)
                elif User.objects.filter(username=username).exists():
                    return JsonResponse({'username_error': 'sorry username in use,choose another one '}, status=409)
                else:
                    return JsonResponse({'username_valid': True})
                    
               
            else:
                email = data['email']
                print(email)
                if not validate_email(email):
                    print("enterdemail")
                    return JsonResponse({'email_error': 'Email is invalid'}, status=400)
                elif User.objects.filter(email=email).exists():
                    return JsonResponse({'email_error': 'sorry email in use,choose another one '}, status=409)
                else:
                    return JsonResponse({'email_valid': True})
            
        except Exception as e:
            exc_type, exc_obj, exc_tb = sys.exc_info()
            print(e,str(exc_tb.tb_lineno))

        


class SignIn(View):

    template_name = 'user/signin.html'

    def get(self,request):
        return render(request,self.template_name)

    def post(self,request):
        pass

