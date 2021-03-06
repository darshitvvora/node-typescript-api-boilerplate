define({ "api": [
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "description": "<p>Create a user</p>",
    "name": "createUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP/1.1 200 OK\n\n{\n message: 'Your account created successfully.',\n id: 201\n}\n\n{\n message: 'Duplicate',\n id: 209\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  email: 'email is required'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/user/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Find all users",
    "description": "<p>Lists all user</p>",
    "name": "getAllUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of user object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP/1.1 200 OK\n\n[{\n id: 1\n name: 'Demo user',\n email: 'demo@demo.com'\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/user/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get a single user",
    "description": "<p>Get a single user</p>",
    "name": "getUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Authorization",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"AUTHORIZATION\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>created.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User _id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>User Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP/1.1 200 OK\n\n{\n _id: '123',\n name: 'name,\n email: 'demo@demo.com',\n createdAt: '2017-05-03',\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can do this.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Post not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/user/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/posts/:id",
    "title": "Update a single user",
    "description": "<p>Update a single user</p>",
    "name": "getUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Authorization",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP/1.1 200 OK\n\n{\n message: 'Your account created successfully.',\n id: 201\n}\n\n{\n message: 'Duplicate',\n id: 209\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/user/user.controller.js",
    "groupTitle": "User"
  }
] });
