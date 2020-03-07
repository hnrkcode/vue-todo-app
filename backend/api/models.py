from django.db import models


class TodoModel(models.Model):
    name = models.CharField(max_length=255)
    text = models.TextField(max_length=1000)
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name