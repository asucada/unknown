from rest_framework.generics import ListAPIView, RetrieveAPIView

from webd.models import Webdev
from .serializers import WebdevSerializer

class WebdevListView(ListAPIView):
    queryset = Webdev.objects.all()
    serializer_class = WebdevSerializer

class WebdevDetailView(RetrieveAPIView):
    queryset = Webdev.objects.all()
    serializer_class = WebdevSerializer
