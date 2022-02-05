from django.urls import path
from user.views import Index,SignUp,SignIn


urlpatterns = [

    path('',Index.as_view(),name='home'),
    path('signin/',SignIn.as_view(),name='login'),
    path('signup',SignUp.as_view(),name='signup'),

]
