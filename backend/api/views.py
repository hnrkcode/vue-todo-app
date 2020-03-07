from rest_framework import viewsets
from . import serializers
from . import models


class TodoViewSet(viewsets.ModelViewSet):
    queryset = models.TodoModel.objects.all().order_by("-id")
    serializer_class = serializers.TodoSerializer
