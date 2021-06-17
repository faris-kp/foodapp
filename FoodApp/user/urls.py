from django.urls import path
from user.views import Index


urlpatterns = [

    path('',Index.as_view(),name='home')

]
