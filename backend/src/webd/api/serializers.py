from rest_framework import serializers
from webd.models import Webdev

class WebdevSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Webdev,
        fields = ('title','content')