from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api_views import RoleViewSet, ProfileViewSet, PermissionViewSet, RolePermissionViewSet

# Create a router and register our viewsets with it
'''
Simplifies URL configuration for APIs by automatically mapping routes to views.
Handles common cases like parameterized URLs (e.g., /api/<id>/) but less flexible for custom patterns.
Works seamlessly with DRF viewsets, automatically wiring CRUD operations to routes.
Suitable for applications with many similar routes, such as RESTful APIs.
'''
router = DefaultRouter()

'''
Specifies the prefix for the URL.
The r before the string indicates a raw string, which treats backslashes (\) 
as literal characters (useful for regex patterns, but not strictly necessary here).
This means the generated routes will have URLs starting with /roles/.


GET-list(): Fetches a list of all records (e.g., GET /api/v1/roles/).
POST-create():	Creates a new record (e.g., POST /api/v1/roles/).
GET-retrieve():	Fetches a single record by primary key (e.g., GET /api/v1/roles/<pk>/).
PUT-update(): Updates an existing record completely (e.g., PUT /api/v1/roles/<pk>/).
PATCH-partial_update():	Partially updates a record (e.g., PATCH /api/v1/roles/<pk>/).
DELETE-destroy():	Deletes a record (e.g., DELETE /api/v1/roles/<pk>/).

'''
router.register(r'api/v1/roles', RoleViewSet)
router.register(r'api/v1/profiles', ProfileViewSet)
router.register(r'api/v1/permissions', PermissionViewSet)
router.register(r'api/v1/role-permissions', RolePermissionViewSet)

# Include the router URLs in our app
urlpatterns = [
    path('', include(router.urls)),
]
