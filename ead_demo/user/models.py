from django.db import models


# Roles Table
class Role(models.Model):
    # Auto-increment primary key by default in Django
    role_name = models.CharField(max_length=50, unique=True)  # VARCHAR(50) with unique constraint

    def __str__(self):
        return self.role_name

# UserProfiles Table
class Profile(models.Model):
    username = models.CharField(max_length=100, unique=True)  # VARCHAR(100) UNIQUE
    first_name = models.CharField(max_length=255)  # Equivalent to first_name column
    last_name = models.CharField(max_length=255)  # Equivalent to last_name column
    password = models.CharField(max_length=255)  # Storing hashed passwords
    email = models.EmailField(unique=True)  # Ensures valid email format and unique constraint
    profile_img = models.CharField(max_length=255, blank=True, null=True)  # Optional profile field
    role = models.ForeignKey(Role, on_delete=models.CASCADE)  # Foreign key to Roles table

    def __str__(self):
        return self.username

# Permissions Table
class Permission(models.Model):
    permission_name = models.CharField(max_length=100, unique=True)  # VARCHAR(100) with unique constraint

    def __str__(self):
        return self.permission_name

# Role_Permissions Table (Many-to-Many relationship between Roles and Permissions)
class RolePermission(models.Model):
    role = models.ForeignKey(Role, on_delete=models.CASCADE)  # Foreign key to Roles table
    permission = models.ForeignKey(Permission, on_delete=models.CASCADE)  # Foreign key to Permissions table

    class Meta:
        unique_together = ('role', 'permission')  # Ensures no duplicate combinations of RoleID and PermissionID

    def __str__(self):
        return f"{self.role} - {self.permission}"
