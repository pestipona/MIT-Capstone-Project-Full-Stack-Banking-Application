To allow SwaggerUI to test RESTful API endpoints that require Google Firebase authentication, you'd have to use the Firebase authentication token (JWT token) as a Bearer token in your API requests.

To achieve this, follow these steps in your Swagger configuration:

1. **Define Security Definitions**:
   Add a `securityDefinitions` section to your Swagger JSON to define the Firebase JWT Bearer token security scheme.

2. **Apply the Security Definition to Endpoints**:
   Under each endpoint that requires Firebase authentication, add a `security` section to indicate that the endpoint requires the Bearer token.

Here's how you can modify the provided Swagger JSON to include Google Firebase authentication:

```json
{
  "swagger": "2.0",
  ...
  "securityDefinitions": {
    "Bearer": {
      "type": "apiKey",
      "name": "Authorization",
      "in": "header",
      "description": "Enter your Firebase JWT token as 'Bearer [your token]'"
    }
  },
  "paths": {
    "/account/create/{name}/{email}/{password}/{balance}": {
      "get": {
        ...
        "security": [
          { "Bearer": [] }
        ]
      }
    },
    "/account/login/{email}/{password}": {
      "get": {
        ...
        "security": [
          { "Bearer": [] }
        ]
      }
    },
    ...
  }
  ...
}
```

This configuration will:

1. Define a Bearer token authentication method that looks for the Firebase JWT token in the `Authorization` header.
2. Apply this authentication method to all the endpoints you specify by adding the `"security": [{ "Bearer": [] }]` line.

In the Swagger UI, there will now be an "Authorize" button. When you click on this button, you'll be prompted to enter your Firebase JWT token. Make sure you enter it as `Bearer YOUR_FIREBASE_JWT_TOKEN`. After this, Swagger UI will include this token in the Authorization header for all requests to the secured endpoints, allowing you to test them.

**Note**: Always ensure your API is secured correctly and never expose sensitive operations (like account creation) without proper safeguards in production.