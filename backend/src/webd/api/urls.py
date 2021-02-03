from django.urls import path

from .views import WebdevListView, WebdevDetailView

urlpatterns = [
    path('', WebdevListView.as_view()),
    path('<pk>', WebdevDetailView.as_view()),
]