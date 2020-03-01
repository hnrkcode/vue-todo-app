from django.db import models


class TodoModel(models.Model):
    name = models.CharField(max_length=255)
    text = models.TextField()
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name