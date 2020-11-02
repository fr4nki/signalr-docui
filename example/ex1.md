```json
{
  "about": {
    "description": "This is awesome",
    "name": "Awesome API"
  },
  "endpoint": "https://domain.name/api/v1/endpoint",
  "handlers": [
    {
      "sender": {
        "method": "SendMessage",
        "payload": ["string"]
      },
      "listener": {
        "method": "ReceiveMessage",
        "payload": [
          {
            "some": {
              "id": "string",
              "thing": "number"
            }
          }
        ]
      },
      "description": "Just return back your message"
    },
    {
      "sender": {
        "method": "CreateDialog"
      },
      "listener": {
        "method": "OnCreateDialog",
        "payload": [
          {
            "id": "string",
            "foopka": {
              "type": "number",
              "description": "its a foopka"
            }
          },
          {
            "f2": "number"
          }
        ]
      },
      "description": "Create dialog"
    },
    {
      "sender": {
        "method": "CloseDialog",
        "payload": [
          {
            "id": {
              "type": "string",
              "description": "Id of dialog"
            }
          }
        ]
      },
      "listener": {
        "method": "OnCloseDialog"
      }
    }
  ]
}
```
