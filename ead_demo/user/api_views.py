from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Role, Profile, Permission, RolePermission
from .serializers import RoleSerializer, ProfileSerializer, PermissionSerializer, RolePermissionSerializer

# Role ViewSet
class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

# UserProfile ViewSet
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

# Permission ViewSet
class PermissionViewSet(viewsets.ModelViewSet):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer

# RolePermission ViewSet
class RolePermissionViewSet(viewsets.ModelViewSet):
    queryset = RolePermission.objects.all()
    serializer_class = RolePermissionSerializer
