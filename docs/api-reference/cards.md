---
id: cards
title: Cards
hide_table_of_contents: true
---

<!-- Make sure there are no import statements here unless properly formatted -->
<!-- For example, if you need imports, they should be at the very top: -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cards API Documentation.
This API creates a new cardholder in the system.

## Create Cardholder

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
POST {{baseUrl}}/zoqq/api/v1/cardholder

````

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint creates a new cardholder with the provided details including personal information,
    address, and identification documents. The cardholder can be an individual or business entity.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | type | string | Yes | Type of cardholder (INDIVIDUAL or BUSINESS) |
    | email | string | Yes | Cardholder's email address |
    | mobile_number | string | Yes | Cardholder's mobile number |
    | individual | object | Yes* | Required for INDIVIDUAL type |
    | individual.name | object | Yes | First and last name |
    | individual.date_of_birth | string | Yes | YYYY-MM-DD format |
    | individual.address | object | Yes | Physical address |
    | individual.identification | object | Yes | ID document details |
    | individual.express_consent_obtained | string | Yes | "yes" or "no" |
    | postal_address | object | No | Mailing address (if different) |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/cardHolders \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "email": "test+7f8a9b23@example.com",
        "individual": {
          "date_of_birth": "1982-11-02",
          "express_consent_obtained": "yes",
          "identification": {
            "country": "US",
            "expiry_date": "2030-08-28",
            "number": "001238243",
            "type": "ID_CARD"
          },
          "name": {
            "first_name": "John",
            "last_name": "Doe"
          },
          "address": {
            "city": "Los Angeles",
            "country": "US",
            "line1": "1234 Maple Street",
            "state": "CA",
            "postcode": "90001"
          }
        },
        "mobile_number": "91-95053039",
        "postal_address": {
          "city": "Los Angeles",
          "country": "US",
          "line1": "1234 Maple Street",
          "state": "CA",
          "postcode": "90001"
        },
        "type": "INDIVIDUAL"
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/cardHolders"

    payload = {
        "email": "test+7f8a9b23@example.com",
        "individual": {
            "date_of_birth": "1982-11-02",
            "express_consent_obtained": "yes",
            "identification": {
                "country": "US",
                "expiry_date": "2030-08-28",
                "number": "001238243",
                "type": "ID_CARD"
            },
            "name": {
                "first_name": "John",
                "last_name": "Doe"
            },
            "address": {
                "city": "Los Angeles",
                "country": "US",
                "line1": "1234 Maple Street",
                "state": "CA",
                "postcode": "90001"
            }
        },
        "mobile_number": "91-95053039",
        "postal_address": {
            "city": "Los Angeles",
            "country": "US",
            "line1": "1234 Maple Street",
            "state": "CA",
            "postcode": "90001"
        },
        "type": "INDIVIDUAL"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cardHolders"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"email\":\"test+7f8a9b23@example.com\",\"individual\":{\"date_of_birth\":\"1982-11-02\",\"express_consent_obtained\":\"yes\",\"identification\":{\"country\":\"US\",\"expiry_date\":\"2030-08-28\",\"number\":\"001238243\",\"type\":\"ID_CARD\"},\"name\":{\"first_name\":\"John\",\"last_name\":\"Doe\"},\"address\":{\"city\":\"Los Angeles\",\"country\":\"US\",\"line1\":\"1234 Maple Street\",\"state\":\"CA\",\"postcode\":\"90001\"}},\"mobile_number\":\"91-95053039\",\"postal_address\":{\"city\":\"Los Angeles\",\"country\":\"US\",\"line1\":\"1234 Maple Street\",\"state\":\"CA\",\"postcode\":\"90001\"},\"type\":\"INDIVIDUAL\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>
    </Tabs>

    <h3>Response Example</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>

    ```json
    {
      "code": 200,
      "status": "success",
      "message": "",
      "data": {
        "id": "1e301167-ff1a-4a4e-bf2a-d2f84e144b03"
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      <TabItem value="422" label="422: Validation Error">

    ```json
    {
      "code": 422,
      "status": "Error",
      "message": "Validation failed",
      "errors": [
        {
          "field": "individual.date_of_birth",
          "message": "Must be at least 18 years ago"
        }
      ]
    }
    ```

      </TabItem>
    </Tabs>
  </div>
</div>


## Create Card

This API creates a new card for a cardholder in the system.

<Tabs>

  <TabItem value="endpoint" label="Endpoint" default>

```
POST {{baseUrl}}/zoqq/api/v1/cards

```
 </TabItem>

</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint creates a new physical or virtual card with specified authorization controls and program details.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | card_issuance_action | string | Yes | Card issuance type (NEW, REPLACEMENT) |
    | card_type | string | Yes | Card type (GPR_PHY, GPR_VIR) |
    | card_holder_id | string | Yes | ID of the cardholder |
    | issuance_mode | string | Backend | Issuance mode (NORMAL_DELIVERY_LOCAL) |
    | program | object | Yes | Program details |
    | program.purpose | string | Yes | COMMERCIAL or CONSUMER |
    | program.type | string | Yes | DEBIT or CREDIT |
    | program.sub_type | string | Yes | B2B_TRAVEL, etc. |
    | authorization_controls | object | Yes | Transaction controls |
    | authorization_controls.allowed_transaction_count | string | Yes | SINGLE or MULTIPLE |
    | authorization_controls.transaction_limits | object | Yes | Transaction limit details |
    | is_personalized | boolean | Yes | Whether card is personalized |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/cards \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "card_issuance_action": "NEW",
        "card_type": "GPR_PHY",
        "card_holder_id": "",
        "issuance_mode": "NORMAL_DELIVERY_LOCAL",
        "created_by": "Postman Test",
        "request_id": "56789987654567",
        "program": {
          "purpose": "COMMERCIAL",
          "type": "DEBIT",
          "sub_type": "B2B_TRAVEL"
        },
        "authorization_controls": {
          "allowed_transaction_count": "MULTIPLE",
          "transaction_limits": {
            "currency": "USD",
            "limits": [
              {
                "amount": 10000,
                "interval": "PER_TRANSACTION"
              }
            ]
          }
        },
        "is_personalized": false
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/cards"

    payload = {
        "card_issuance_action": "NEW",
        "card_type": "GPR_PHY",
        "card_holder_id": "",
        "issuance_mode": "NORMAL_DELIVERY_LOCAL",
        "created_by": "Postman Test",
        "request_id": "56789987654567",
        "program": {
            "purpose": "COMMERCIAL",
            "type": "DEBIT",
            "sub_type": "B2B_TRAVEL"
        },
        "authorization_controls": {
            "allowed_transaction_count": "MULTIPLE",
            "transaction_limits": {
                "currency": "USD",
                "limits": [
                    {
                        "amount": 10000,
                        "interval": "PER_TRANSACTION"
                    }
                ]
            }
        },
        "is_personalized": False
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cards"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"card_issuance_action\":\"NEW\",\"card_type\":\"GPR_PHY\",\"card_holder_id\":\"\",\"issuance_mode\":\"NORMAL_DELIVERY_LOCAL\",\"created_by\":\"Postman Test\",\"request_id\":\"56789987654567\",\"program\":{\"purpose\":\"COMMERCIAL\",\"type\":\"DEBIT\",\"sub_type\":\"B2B_TRAVEL\"},\"authorization_controls\":{\"allowed_transaction_count\":\"MULTIPLE\",\"transaction_limits\":{\"currency\":\"USD\",\"limits\":[{\"amount\":10000,\"interval\":\"PER_TRANSACTION\"}]}},\"is_personalized\":false}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>
      <TabItem value="csharp" label="C#">

    ```csharp
    var client = new RestClient("{{baseUrl}}/zoqq/api/v1/cards");
    var request = new RestRequest(Method.POST);
    request.AddHeader("x-api-key", "{{Shared Xapikey By Zoqq}}");
    request.AddHeader("x-program-id", "{{BasedOnRequirement}}");
    request.AddHeader("x-request-id", "{{IdempotencyKey}}");
    request.AddHeader("x-user-id", "{{Useridentificationkey}}");
    request.AddHeader("Content-Type", "application/json");
    request.AddHeader("Authorization", "Bearer {{YOUR_TOKEN}}");
    request.AddJsonBody(new {
        card_issuance_action = "NEW",
        card_type = "GPR_PHY",
        card_holder_id = "",
        issuance_mode = "NORMAL_DELIVERY_LOCAL",
        created_by = "Postman Test",
        request_id = "56789987654567",
        program = new {
            purpose = "COMMERCIAL",
            type = "DEBIT",
            sub_type = "B2B_TRAVEL"
        },
        authorization_controls = new {
            allowed_transaction_count = "MULTIPLE",
            transaction_limits = new {
                currency = "USD",
                limits = new[] {
                    new {
                        amount = 10000,
                        interval = "PER_TRANSACTION"
                    }
                }
            }
        },
        is_personalized = false
    });
    IRestResponse response = client.Execute(request);
    Console.WriteLine(response.Content);
    ```

      </TabItem>
    </Tabs>

    <h3>Response Example</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>

    ```json
    {
      "code": 200,
      "status": "success",
      "message": "",
      "data": {
        "id": "1e301167-ff1a-4a4e-bf2a-d2f84e144b03"
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      <TabItem value="422" label="422: Validation Error">

    ```json
    {
      "code": 422,
      "status": "Error",
      "message": "Invalid card holder ID",
      "errors": [
        {
          "field": "card_holder_id",
          "message": "Card holder not found"
        }
      ]
    }
    ```

      </TabItem>
    </Tabs>
  </div>
</div>


## Get All Cards

This API retrieves a list of all cards associated with the authenticated user.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    GET {{baseUrl}}/zoqq/api/v1/cards
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a list of all cards (both physical and virtual) associated with the authenticated user, including card details and status information.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |

    <h3>Query Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | status | string | No | Filter by card status (ACTIVE, INACTIVE) |
    | card_type | string | No | Filter by card type (PHY, VIRTUAL) |
    | limit | integer | No | Number of results per page (default: 20) |
    | offset | integer | No | Pagination offset (default: 0) |

    <h3>Response Parameters</h3>

    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | integer | Response status code |
    | status | string | Response status |
    | message | string | Additional message |
    | data | array | Array of card objects |
    | data[].cardHashId | string | Unique card identifier |
    | data[].cardStatus | string | Card status (ACTIVE/INACTIVE) |
    | data[].maskedCardNumber | string | Masked card number |
    | data[].cardholderId | string | Associated cardholder ID |
    | data[].createdAt | string | Creation timestamp (ISO 8601 format) |
    | data[].updatedAt | string | Last update timestamp (ISO 8601 format) |
    | data[].nameOnCard | string | Name printed on the card |
    | data[].cardType | string | Card type (PHY/VIRTUAL) |
    | data[].currency | string | Card currency code |
  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request GET \
          --url '{{baseUrl}}/zoqq/api/v1/cards?status=ACTIVE&card_type=VIRTUAL' \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Authorization: Bearer {{YOUR_TOKEN}}'
        ```
      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/cards"
        params = {
            "status": "ACTIVE",
            "card_type": "VIRTUAL"
        }

        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Authorization": "Bearer {{YOUR_TOKEN}}"
        }

        response = requests.get(url, headers=headers, params=params)
        print(response.json())
        ```
      </TabItem>
      <TabItem value="java" label="Java">
        ```java
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cards?status=ACTIVE&card_type=VIRTUAL"))
            .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
            .header("x-program-id", "{{BasedOnRequirement}}")
            .header("x-request-id", "{{IdempotencyKey}}")
            .header("x-user-id", "{{Useridentificationkey}}")
            .header("Authorization", "Bearer {{YOUR_TOKEN}}")
            .method("GET", HttpRequest.BodyPublishers.noBody())
            .build();
        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
        ```
      </TabItem>
    </Tabs>

    <h3>Response Example</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>
        ```json
        {
          "code": 200,
          "status": "success",
          "message": "",
          "data": [
            {
              "cardHashId": "b3153738-901a-4cef-8883-d2d1379089db",
              "cardStatus": "ACTIVE",
              "maskedCardNumber": "************4639",
              "cardholderId": "757b4368-329f-4780-8881-a1a6da4219f3",
              "createdAt": "2025-04-02T07:36:56.973+0000",
              "updatedAt": "2025-04-23T05:45:12.422+0000",
              "nameOnCard": "Postman Test",
              "cardType": "VIRTUAL",
              "currency": "USD"
            },
            {
              "cardHashId": "7067f945-5a48-4164-b8e8-92f8e420c907",
              "cardStatus": "INACTIVE",
              "maskedCardNumber": "************6886",
              "cardholderId": "692a9a23-2175-4311-b83f-da3e8f088279",
              "createdAt": "2025-03-31T08:02:20.000+0000",
              "updatedAt": "2025-03-31T08:02:20.000+0000",
              "nameOnCard": "demozoqq",
              "cardType": "PHY",
              "currency": "SGD"
            }
          ]
        }
        ```
      </TabItem>
      <TabItem value="400" label="400: Error">
        ```json
        {
          "code": 400,
          "status": "Error",
          "message": "Something went wrong"
        }
        ```
      </TabItem>
      <TabItem value="404" label="404: Not Found">
        ```json
        {
          "code": 404,
          "status": "Error",
          "message": "No cards found"
        }
        ```
      </TabItem>
    </Tabs>
  </div>
</div>


## Activate Card

This API activates an inactive card in the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````

POST {{baseUrl}}/zoqq/api/v1/cards/activate

````
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint activates a card that is in inactive status, making it available for transactions.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Unique identifier of the card to activate |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/cards/activate \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "id": "card_1234567890abcdef"
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/cards/activate"

    payload = {
        "id": "card_1234567890abcdef"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cards/activate"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"id\":\"card_1234567890abcdef\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>
    </Tabs>

    <h3>Response Example</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>

    ```json
    {
      "code": 200,
      "status": "success",
      "message": "card activated successfully"
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Card not found"
    }
    ```

      </TabItem>
      <TabItem value="409" label="409: Conflict">

    ```json
    {
      "code": 409,
      "status": "Error",
      "message": "Card is already active"
    }
    ```

      </TabItem>
    </Tabs>
  </div>
</div>


## Update Card

This API updates card details including authorization controls and status.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````

PATCH {{baseUrl}}/zoqq/api/v1/cards

````


  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint updates card properties including transaction limits, authorization controls, and card status.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Card ID to update |
    | authorization_controls | object | No | Transaction authorization settings |
    | authorization_controls.allowed_transaction_count | string | No | SINGLE/MULTIPLE |
    | authorization_controls.transaction_limits | object | No | Limit configuration |
    | card_status | string | No | ACTIVE/INACTIVE/BLOCKED |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request PATCH \
      --url {{baseUrl}}/zoqq/api/v1/cards \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "id": "card_1234567890abcdef",
        "authorization_controls": {
          "allowed_transaction_count": "MULTIPLE",
          "transaction_limits": {
            "currency": "USD",
            "limits": [
              {
                "amount": 20000,
                "interval": "ALL_TIME"
              }
            ]
          }
        },
        "card_status": "INACTIVE"
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/cards"

    payload = {
        "id": "card_1234567890abcdef",
        "authorization_controls": {
            "allowed_transaction_count": "MULTIPLE",
            "transaction_limits": {
                "currency": "USD",
                "limits": [
                    {
                        "amount": 20000,
                        "interval": "ALL_TIME"
                    }
                ]
            }
        },
        "card_status": "INACTIVE"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.patch(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cards"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("PATCH", HttpRequest.BodyPublishers.ofString("{\"id\":\"card_1234567890abcdef\",\"authorization_controls\":{\"allowed_transaction_count\":\"MULTIPLE\",\"transaction_limits\":{\"currency\":\"USD\",\"limits\":[{\"amount\":20000,\"interval\":\"ALL_TIME\"}]}},\"card_status\":\"INACTIVE\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>
    </Tabs>

    <h3>Response Example</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>

    ```json
    {
      "code": 200,
      "status": "success",
      "message": "card updated successfully"
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Card not found"
    }
    ```

      </TabItem>
      <TabItem value="422" label="422: Validation Error">

    ```json
    {
      "code": 422,
      "status": "Error",
      "message": "Invalid amount specified",
      "errors": [
        {
          "field": "authorization_controls.transaction_limits.limits[0].amount",
          "message": "Amount exceeds maximum limit"
        }
      ]
    }
    ```

      </TabItem>
    </Tabs>
  </div>
</div>


## Update Card Holder

This API updates card holder details including address and contact information.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````

PATCH {{baseUrl}}/zoqq/api/v1/cardHolders

````


  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint updates card holder information including physical address, postal address, and contact details.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Card holder ID to update |
    | individual | object | No | Individual details |
    | individual.address | object | No | Physical address |
    | mobile_number | string | No | Updated mobile number |
    | postal_address | object | No | Mailing address |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request PATCH \
      --url {{baseUrl}}/zoqq/api/v1/cardHolders \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "id": "1e301167-ff1a-4a4e-bf2a-d2f84e144b03",
        "individual": {
          "address": {
            "city": "Austin",
            "country": "US",
            "line1": "1234 Elm Street",
            "state": "TX",
            "postcode": "94932"
          }
        },
        "mobile_number": "91-95053039",
        "postal_address": {
          "city": "Los Angeles",
          "country": "US",
          "line1": "5678 Oak Avenue",
          "state": "CA",
          "postcode": "94932"
        }
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/cardHolders"

    payload = {
        "id": "1e301167-ff1a-4a4e-bf2a-d2f84e144b03",
        "individual": {
            "address": {
                "city": "Austin",
                "country": "US",
                "line1": "1234 Elm Street",
                "state": "TX",
                "postcode": "94932"
            }
        },
        "mobile_number": "91-95053039",
        "postal_address": {
            "city": "Los Angeles",
            "country": "US",
            "line1": "5678 Oak Avenue",
            "state": "CA",
            "postcode": "94932"
        }
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.patch(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cardHolders"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("PATCH", HttpRequest.BodyPublishers.ofString("{\"id\":\"1e301167-ff1a-4a4e-bf2a-d2f84e144b03\",\"individual\":{\"address\":{\"city\":\"Austin\",\"country\":\"US\",\"line1\":\"1234 Elm Street\",\"state\":\"TX\",\"postcode\":\"94932\"}},\"mobile_number\":\"91-95053039\",\"postal_address\":{\"city\":\"Los Angeles\",\"country\":\"US\",\"line1\":\"5678 Oak Avenue\",\"state\":\"CA\",\"postcode\":\"94932\"}}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>
    </Tabs>

    <h3>Response Example</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>

    ```json
    {
      "code": 200,
      "status": "success",
      "message": ""
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Card holder not found"
    }
    ```

      </TabItem>
      <TabItem value="422" label="422: Validation Error">

    ```json
    {
      "code": 422,
      "status": "Error",
      "message": "Invalid address format",
      "errors": [
        {
          "field": "individual.address.postcode",
          "message": "Invalid postal code format"
        }
      ]
    }
    ```

      </TabItem>
    </Tabs>
  </div>
</div>


## Get Card Limit

This API retrieves the current transaction limits for a specific card.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````

GET {{baseUrl}}/zoqq/api/v1/cards/limit

````


  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns the current transaction limits and remaining amounts for a specific card, including both purchase and cash withdrawal limits.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |

    <h3>Query Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Card ID to retrieve limits for |
    | currency | string | No | Filter by specific currency |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/cards/limit?id=card_1234567890abcdef&currency=USD' \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests

    url = "{{baseUrl}}/zoqq/api/v1/cards/limit"
    params = {
        "id": "card_1234567890abcdef",
        "currency": "USD"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.get(url, headers=headers, params=params)
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cards/limit?id=card_1234567890abcdef&currency=USD"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("GET", HttpRequest.BodyPublishers.noBody())
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>
    </Tabs>

    <h3>Response Example</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>

    ```json
    {
      "code": 200,
      "status": "success",
      "message": "",
      "data": {
        "cash_withdrawal_limits": [
          {
            "amount": 1000,
            "interval": "PER_TRANSACTION",
            "remaining": 1000
          }
        ],
        "currency": "USD",
        "limits": [
          {
            "amount": 1000,
            "interval": "PER_TRANSACTION",
            "remaining": 1000
          }
        ]
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Card not found"
    }
    ```

      </TabItem>
      <TabItem value="403" label="403: Forbidden">

    ```json
    {
      "code": 403,
      "status": "Error",
      "message": "Not authorized to view these limits"
    }
    ```

      </TabItem>
    </Tabs>
  </div>
</div>

## Get Card Transactions

This API retrieves transaction history for a specific card.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````

POST {{baseUrl}}/zoqq/api/v1/cardHolders

````


  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a paginated list of transactions for a specific card, including detailed merchant information, transaction amounts, and status.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Card ID to retrieve transactions for |
    | limit | integer | No | Number of transactions to return (default: 20) |
    | offset | integer | No | Pagination offset (default: 0) |
    | start_date | string | No | Filter transactions from this date (YYYY-MM-DD) |
    | end_date | string | No | Filter transactions to this date (YYYY-MM-DD) |
    | status | string | No | Filter by transaction status (APPROVED, DECLINED, etc.) |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/cardHolders \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
        "limit": 20,
        "offset": 0,
        "start_date": "2023-01-01",
        "end_date": "2023-12-31",
        "status": "APPROVED"
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/cardHolders"

    payload = {
        "id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
        "limit": 20,
        "offset": 0,
        "start_date": "2023-01-01",
        "end_date": "2023-12-31",
        "status": "APPROVED"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cardHolders"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"id\":\"7f687fe6-dcf4-4462-92fa-80335301d9d2\",\"limit\":20,\"offset\":0,\"start_date\":\"2023-01-01\",\"end_date\":\"2023-12-31\",\"status\":\"APPROVED\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>
    </Tabs>

    <h3>Response Example</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>

    ```json
    {
      "code": 200,
      "status": "success",
      "message": "",
      "data": {
        "has_more": true,
        "items": [
          {
            "acquiring_institution_identifier": "123456",
            "auth_code": "000001",
            "billing_amount": 100,
            "billing_currency": "USD",
            "card_id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
            "card_nickname": "string",
            "client_data": "Some client data",
            "digital_wallet_token_id": "2af871b8-466e-465e-a8de-eeaac9f82392",
            "failure_reason": "INSUFFICIENT_FUNDS",
            "lifecycle_id": "95ede192-3a86-461e-96d9-f51b55aae79e",
            "masked_card_number": "************4242",
            "matched_authorizations": [
              "6c2dc266-09ad-4235-b61a-767c7cd6d6ea"
            ],
            "merchant": {
              "category_code": "4829",
              "city": "San Francisco",
              "country": "USA",
              "identifier": "012345678910123",
              "name": "Merchant A",
              "postcode": "94111",
              "state": "CA"
            },
            "network_transaction_id": "3951729271768745",
            "posted_date": "2018-03-22T16:08:02+00:00",
            "retrieval_ref": "909916088001",
            "risk_details": {
              "risk_actions_performed": [
                "TRANSACTION_BLOCKED"
              ],
              "risk_factors": [
                "Suspicious transaction velocity"
              ],
              "three_dsecure_outcome": "AUTHENTICATED"
            },
            "status": "APPROVED",
            "transaction_amount": 100,
            "transaction_currency": "USD",
            "transaction_date": "2018-03-21T16:08:02+00:00",
            "transaction_id": "6c2dc266-09ad-4235-b61a-767c7cd6d6ea",
            "transaction_type": "REFUND"
          }
        ]
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Card not found"
    }
    ```

      </TabItem>
      <TabItem value="422" label="422: Validation Error">

    ```json
    {
      "code": 422,
      "status": "Error",
      "message": "Invalid date format",
      "errors": [
        {
          "field": "start_date",
          "message": "Must be in YYYY-MM-DD format"
        }
      ]
    }
    ```

      </TabItem>
    </Tabs>
  </div>
</div>
````
