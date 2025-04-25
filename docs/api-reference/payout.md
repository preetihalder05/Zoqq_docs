---
id: payout
title: Payout
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Get Create Beneficiary Schema

This API retrieves the required schema for creating a beneficiary based on transfer corridor parameters.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/transfer/beneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns the dynamic schema required to create a beneficiary, based on the specified transfer corridor parameters. The schema fields will vary depending on the country, currency, and transfer method.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    
    <h3>Query Parameters</h3>
    
    | Parameter | Type | Required | Description | Values |
    |-----------|------|----------|-------------|--------|
    | account_currency | string | Yes | Beneficiary account currency | ISO currency code |
    | bank_country_code | string | Yes | Beneficiary bank country | ISO country code |
    | entity_type | string | Yes | Type of beneficiary | `PERSONAL`, `BUSINESS` |
    | local_clearing_system | string | Yes | Local clearing system | `ACH`, `FASTER_PAYMENTS`, `SEPA`, etc. |
    | transfer_method | string | Yes | Transfer method | `LOCAL`, `SWIFT`, `WALLET` |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?account_currency=USD&bank_country_code=US&entity_type=PERSONAL&local_clearing_system=ACH&transfer_method=LOCAL' \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests

    url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"
    params = {
        "account_currency": "USD",
        "bank_country_code": "US",
        "entity_type": "PERSONAL",
        "local_clearing_system": "ACH",
        "transfer_method": "LOCAL"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By ZOqq}}",
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?account_currency=USD&bank_country_code=US&entity_type=PERSONAL&local_clearing_system=ACH&transfer_method=LOCAL"))
        .header("x-api-key", "{{Shared Xapikey By ZOqq}}")
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
        "schema": {
          "type": "object",
          "required": ["account_number", "routing_number", "full_name"],
          "properties": {
            "account_number": {
              "type": "string",
              "description": "Beneficiary account number",
              "minLength": 4,
              "maxLength": 17
            },
            "routing_number": {
              "type": "string",
              "description": "ABA routing number",
              "pattern": "^[0-9]{9}$"
            },
            "full_name": {
              "type": "string",
              "description": "Beneficiary full legal name",
              "minLength": 1,
              "maxLength": 100
            },
            "account_type": {
              "type": "string",
              "enum": ["CHECKING", "SAVINGS"]
            }
          }
        },
        "corridor_details": {
          "source_currency": "USD",
          "destination_currency": "USD",
          "country": "US",
          "clearing_system": "ACH",
          "estimated_settlement_time": "1-2 business days"
        }
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
      <TabItem value="404" label="404: Not Supported">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Corridor not supported"
    }
    ```

      </TabItem>
      <TabItem value="422" label="422: Validation Error">

    ```json
    {
      "code": 422,
      "status": "Error",
      "message": "Invalid parameters",
      "errors": [
        {
          "field": "bank_country_code",
          "message": "Must be a valid ISO country code"
        }
      ]
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>

## Create Beneficiary

This API creates a new beneficiary for transfers based on the required schema.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
POST {{baseUrl}}/zoqq/api/v1/transfer/beneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint creates a new beneficiary account for making transfers. The request body should follow the schema returned by the Get Beneficiary Schema endpoint.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |
    
    <h3>Request Body</h3>
    
    <p>The request body structure varies based on the beneficiary type and corridor. Use the <code>GET /transfer/beneficiary</code> endpoint first to get the required schema for your specific parameters.</p>

    <h4>Example for US ACH Personal Account:</h4>
    ```json
    {
      "account_number": "123456789",
      "routing_number": "026073150",
      "full_name": "John Doe",
      "account_type": "CHECKING",
      "bank_country_code": "US",
      "account_currency": "USD",
      "entity_type": "PERSONAL",
      "transfer_method": "LOCAL"
    }
    ```

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/transfer/beneficiary \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "account_number": "123456789",
        "routing_number": "026073150",
        "full_name": "John Doe",
        "account_type": "CHECKING",
        "bank_country_code": "US",
        "account_currency": "USD",
        "entity_type": "PERSONAL",
        "transfer_method": "LOCAL"
      }'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"

    payload = {
        "account_number": "123456789",
        "routing_number": "026073150",
        "full_name": "John Doe",
        "account_type": "CHECKING",
        "bank_country_code": "US",
        "account_currency": "USD",
        "entity_type": "PERSONAL",
        "transfer_method": "LOCAL"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By ZOqq}}",
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"))
        .header("x-api-key", "{{Shared Xapikey By ZOqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"account_number\":\"123456789\",\"routing_number\":\"026073150\",\"full_name\":\"John Doe\",\"account_type\":\"CHECKING\",\"bank_country_code\":\"US\",\"account_currency\":\"USD\",\"entity_type\":\"PERSONAL\",\"transfer_method\":\"LOCAL\"}"))
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
        "id": "beneficiary_id",
        "beneficiary_account_currency": "USD",
        "beneficiary_account_number": "••••6789",
        "bank_name": "Bank of America",
        "status": "VERIFICATION_PENDING",
        "created_at": "2023-06-16T05:22:14Z"
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
      "message": "Invalid account details",
      "errors": [
        {
          "field": "routing_number",
          "message": "Invalid ABA routing number"
        }
      ]
    }
    ```

      </TabItem>
      <TabItem value="409" label="409: Conflict">

    ```json
    {
      "code": 409,
      "status": "Error",
      "message": "Beneficiary already exists"
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>

## Validate Create Beneficiary

This API validates beneficiary details before creation without actually creating the beneficiary.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
POST {{baseUrl}}/zoqq/api/v1/transfer/validatebeneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint validates beneficiary account details according to the schema requirements for the specified transfer corridor. It performs all validation checks without persisting the beneficiary.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |
    
    <h3>Request Body</h3>
    
    <p>The request body should match the structure returned by the <code>GET /transfer/beneficiary</code> schema endpoint for your specific corridor.</p>

    <h4>Example for US ACH Personal Account:</h4>
    ```json
    {
      "account_number": "123456789",
      "routing_number": "026073150",
      "full_name": "John Doe",
      "account_type": "CHECKING",
      "bank_country_code": "US",
      "account_currency": "USD",
      "entity_type": "PERSONAL",
      "transfer_method": "LOCAL"
    }
    ```

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/transfer/validatebeneficiary \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "account_number": "123456789",
        "routing_number": "026073150",
        "full_name": "John Doe",
        "account_type": "CHECKING",
        "bank_country_code": "US",
        "account_currency": "USD",
        "entity_type": "PERSONAL",
        "transfer_method": "LOCAL"
      }'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/transfer/validatebeneficiary"

    payload = {
        "account_number": "123456789",
        "routing_number": "026073150",
        "full_name": "John Doe",
        "account_type": "CHECKING",
        "bank_country_code": "US",
        "account_currency": "USD",
        "entity_type": "PERSONAL",
        "transfer_method": "LOCAL"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By ZOqq}}",
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/validatebeneficiary"))
        .header("x-api-key", "{{Shared Xapikey By ZOqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"account_number\":\"123456789\",\"routing_number\":\"026073150\",\"full_name\":\"John Doe\",\"account_type\":\"CHECKING\",\"bank_country_code\":\"US\",\"account_currency\":\"USD\",\"entity_type\":\"PERSONAL\",\"transfer_method\":\"LOCAL\"}"))
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
      "message": "Validation successful",
      "data": []
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
          "field": "routing_number",
          "message": "Invalid ABA routing number format"
        },
        {
          "field": "account_number",
          "message": "Account number must be 9-12 digits"
        }
      ]
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Bank not found for given routing number"
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>

## Update Beneficiary

This API updates specific fields of an existing beneficiary account.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
PATCH {{baseUrl}}/zoqq/api/v1/transfer/beneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint partially updates a beneficiary's information. Only include fields that need to be updated, following the same validation schema as beneficiary creation.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |
    
    <h3>Request Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | beneficiary_id | string | Yes | ID of the beneficiary to update |

    <h3>Request Body</h3>

    <p>Include only the fields that need updating, following the same schema as beneficiary creation:</p>

    ```json
    {
      "full_name": "Updated Name",
      "account_number": "987654321",
      "account_type": "SAVINGS"
    }
    ```

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request PATCH \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?beneficiary_id=beneficiary_123' \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "full_name": "Updated Name",
        "account_number": "987654321",
        "account_type": "SAVINGS"
      }'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"
    params = {"beneficiary_id": "beneficiary_123"}

    payload = {
        "full_name": "Updated Name",
        "account_number": "987654321",
        "account_type": "SAVINGS"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By ZOqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.patch(url, headers=headers, params=params, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?beneficiary_id=beneficiary_123"))
        .header("x-api-key", "{{Shared Xapikey By ZOqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("PATCH", HttpRequest.BodyPublishers.ofString("{\"full_name\":\"Updated Name\",\"account_number\":\"987654321\",\"account_type\":\"SAVINGS\"}"))
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
      "data": []
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
          "field": "account_number",
          "message": "Invalid account number format"
        }
      ]
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Beneficiary not found"
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>

## Get Beneficiary by ID

This API retrieves detailed information about a specific beneficiary.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/transfer/beneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns complete details for a single beneficiary, including account information, verification status, and supported payout methods.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    
    <h3>Query Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | beneficiary_id | string | Yes | The ID of the beneficiary to retrieve |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?beneficiary_id=beneficiary_123' \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests

    url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"
    params = {
        "beneficiary_id": "beneficiary_123"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By ZOqq}}",
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?beneficiary_id=beneficiary_123"))
        .header("x-api-key", "{{Shared Xapikey By ZOqq}}")
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
        "id": "beneficiary_123",
        "account_holder_name": "John Doe",
        "account_number": "••••6789",
        "bank_name": "Bank of America",
        "bank_country_code": "US",
        "currency": "USD",
        "entity_type": "PERSONAL",
        "status": "VERIFIED",
        "created_at": "2023-06-16T05:22:14Z",
        "last_used_at": "2023-06-18T10:15:22Z",
        "payout_methods": ["LOCAL", "SWIFT"],
        "metadata": {
          "routing_number": "•••••3150",
          "account_type": "CHECKING"
        }
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
      "message": "Beneficiary not found"
    }
    ```

      </TabItem>
      <TabItem value="403" label="403: Forbidden">

    ```json
    {
      "code": 403,
      "status": "Error",
      "message": "Not authorized to view this beneficiary"
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>

## Get Beneficiary List

This API retrieves a list of all beneficiaries associated with the authenticated user.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/transfer/beneficiarylist
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a paginated list of all beneficiaries created by the user, including their status and supported payout methods.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    
    <h3>Query Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | limit | integer | No | Number of results per page (default: 20, max: 100) |
    | offset | integer | No | Pagination offset (default: 0) |
    | status | string | No | Filter by beneficiary status |
    | currency | string | No | Filter by beneficiary currency |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/beneficiarylist?limit=20&offset=0' \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests

    url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiarylist"
    params = {
        "limit": 20,
        "offset": 0
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By ZOqq}}",
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiarylist?limit=20&offset=0"))
        .header("x-api-key", "{{Shared Xapikey By ZOqq}}")
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
          "id": "beneficiary_id_1",
          "account_holder_name": "John Doe",
          "account_number": "••••6789",
          "bank_name": "Bank of America",
          "currency": "USD",
          "country": "US",
          "status": "VERIFIED",
          "created_at": "2023-06-16T05:22:14Z",
          "payout_methods": ["LOCAL", "SWIFT"],
          "last_used_at": "2023-06-18T10:15:22Z"
        },
        {
          "id": "beneficiary_id_2",
          "account_holder_name": "Acme Corp",
          "account_number": "••••4321",
          "bank_name": "Chase",
          "currency": "EUR",
          "country": "DE",
          "status": "PENDING_VERIFICATION",
          "created_at": "2023-06-17T11:32:45Z",
          "payout_methods": ["SEPA"],
          "last_used_at": null
        }
      ],
      "pagination": {
        "total_count": 15,
        "limit": 20,
        "offset": 0
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
      "message": "No beneficiaries found"
    }
    ```

      </TabItem>
      <TabItem value="429" label="429: Rate Limited">

    ```json
    {
      "code": 429,
      "status": "Error",
      "message": "Too many requests"
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>
