---
id: accounts
title: Accounts
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Accounts

## Create Account

This API allows you to create a new account for a user in the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>

```
POST {{baseUrl}}/zoqq/api/v1/accounts
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint creates a new account for the authenticated user. 
    The request requires account details including account type, currency, 
    and other relevant information. Upon successful creation, the response 
    includes the newly created account details.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier based on requirement |
    | x-request-id | string | Yes | Idempotency key for request tracking |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Optional) |
    | Content-Type | string | Yes | Must be application/json |
    
    <h3>Request Body Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | account_type | string | Yes | Type of account (CHECKING, SAVINGS, etc.) |
    | currency | string | Yes | Currency code (USD, EUR, etc.) |
    | label | string | No | Optional account label |
    | country_code | string | Yes | ISO country code |
    | institution_id | string | Yes | ID of the financial institution |
    | metadata | object | No | Additional account metadata |
    
    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | number | Response code (201 for success) |
    | status | string | Status of the response (success/error) |
    | message | string | Additional information about the response |
    | data | object | Created account object |
    | data.id | string | Unique identifier for the account (UUID) |
    | data.status | string | Account status (PENDING, ACTIVE, etc.) |
    | data.account_number | string | Generated account number |
    | data.label | string | Account label if provided |
    | data.account_type | string | Type of account |
    | data.country_code | string | ISO country code |
    | data.institution | object | Information about the financial institution |
    | data.created_at | string | Timestamp of account creation |
  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/accounts \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "account_type": "CHECKING",
        "currency": "USD",
        "label": "Primary Checking",
        "country_code": "US",
        "institution_id": "inst_12345"
      }'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    import json
    
    url = "{{baseUrl}}/zoqq/api/v1/accounts"
    
    payload = {
        "account_type": "CHECKING",
        "currency": "USD",
        "label": "Primary Checking",
        "country_code": "US",
        "institution_id": "inst_12345"
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/accounts"))
        .header("x-api-key", "{{Shared Xapikey By ZOqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"account_type\":\"CHECKING\",\"currency\":\"USD\",\"label\":\"Primary Checking\",\"country_code\":\"US\",\"institution_id\":\"inst_12345\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```
    
      </TabItem>
      <TabItem value="php" label="PHP">
    
    ```php
    <?php
    $curl = curl_init();
    
    $data = [
      "account_type" => "CHECKING",
      "currency" => "USD",
      "label" => "Primary Checking",
      "country_code" => "US",
      "institution_id" => "inst_12345"
    ];
    
    curl_setopt_array($curl, [
      CURLOPT_URL => "{{baseUrl}}/zoqq/api/v1/accounts",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_CUSTOMREQUEST => "POST",
      CURLOPT_POSTFIELDS => json_encode($data),
      CURLOPT_HTTPHEADER => [
        "x-api-key: {{Shared Xapikey By ZOqq}}",
        "x-program-id: {{BasedOnRequirement}}",
        "x-request-id: {{IdempotencyKey}}",
        "x-user-id: {{Useridentificationkey}}",
        "Content-Type: application/json",
        "Authorization: Bearer {{YOUR_TOKEN}}"
      ],
    ]);
    
    $response = curl_exec($curl);
    curl_close($curl);
    
    echo $response;
    ?>
    ```
    
      </TabItem>
      <TabItem value="csharp" label="C#">
    
    ```csharp
    var client = new RestClient("{{baseUrl}}/zoqq/api/v1/accounts");
    var request = new RestRequest(Method.POST);
    request.AddHeader("x-api-key", "{{Shared Xapikey By ZOqq}}");
    request.AddHeader("x-program-id", "{{BasedOnRequirement}}");
    request.AddHeader("x-request-id", "{{IdempotencyKey}}");
    request.AddHeader("x-user-id", "{{Useridentificationkey}}");
    request.AddHeader("Content-Type", "application/json");
    request.AddHeader("Authorization", "Bearer {{YOUR_TOKEN}}");
    request.AddJsonBody(new {
        account_type = "CHECKING",
        currency = "USD",
        label = "Primary Checking",
        country_code = "US",
        institution_id = "inst_12345"
    });
    IRestResponse response = client.Execute(request);
    Console.WriteLine(response.Content);
    ```
    
      </TabItem>
    </Tabs>
    
    <h3>Response Example</h3>
    
    <Tabs>
      <TabItem value="201" label="201: Created" default>
    
    ```json
    {
      "code": 201,
      "status": "success",
      "message": "Account created successfully",
      "data": {
        "id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
        "status": "PENDING",
        "account_number": "9876543210",
        "label": "Primary Checking",
        "account_type": "CHECKING",
        "country_code": "US",
        "institution": {
          "id": "inst_12345",
          "name": "Community Federal Savings Bank",
          "logo_url": "https://example.com/logo.png"
        },
        "created_at": "2023-06-15T10:30:00Z",
        "currency": "USD"
      }
    }
    ```
    
      </TabItem>
      <TabItem value="400" label="400: Error">
    
    ```json
    {
      "code": 400,
      "status": "error",
      "message": "Invalid request parameters",
      "errors": [
        {
          "field": "currency",
          "message": "Currency code is required"
        }
      ]
    }
    ```
    
      </TabItem>
      <TabItem value="409" label="409: Conflict">
    
    ```json
    {
      "code": 409,
      "status": "error",
      "message": "Account with these details already exists"
    }
    ```
    
      </TabItem>
    </Tabs>
  </div>
</div>

## Get Account

This API allows you to retrieve all accounts associated with a user in the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>

```
GET {{baseUrl}}/zoqq/api/v1/accounts
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a list of all accounts associated with the authenticated user. 
    The response includes detailed information about each account, including account status, 
    account number, institution details, and supported features.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier based on requirement |
    | x-request-id | string | Yes | Idempotency key for request tracking |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Optional) |
    
    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | number | Response code (200 for success) |
    | status | string | Status of the response (success/error) |
    | message | string | Additional information about the response |
    | data | array | Array of account objects |
    | data[].id | string | Unique identifier for the account (UUID) |
    | data[].status | string | Account status (ACTIVE, INACTIVE, etc.) |
    | data[].account_number | string | Account number |
    | data[].label | string | Optional account label |
    | data[].account_type | string | Type of account (Checking, Savings, etc.) |
    | data[].country_code | string | ISO country code |
    | data[].institution | object | Information about the financial institution |
    | data[].supported_features | array | List of supported payment features |
  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url {{baseUrl}}/zoqq/api/v1/accounts \
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
    
    url = "{{baseUrl}}/zoqq/api/v1/accounts"
    
    headers = {
        "x-api-key": "{{Shared Xapikey By ZOqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }
    
    response = requests.get(url, headers=headers)
    print(response.json())
    ```
    
      </TabItem>
      <TabItem value="java" label="Java">
    
    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/accounts"))
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
      <TabItem value="php" label="PHP">
    
    ```php
    <?php
    $curl = curl_init();
    
    curl_setopt_array($curl, [
      CURLOPT_URL => "{{baseUrl}}/zoqq/api/v1/accounts",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => [
        "x-api-key: {{Shared Xapikey By ZOqq}}",
        "x-program-id: {{BasedOnRequirement}}",
        "x-request-id: {{IdempotencyKey}}",
        "x-user-id: {{Useridentificationkey}}",
        "Authorization: Bearer {{YOUR_TOKEN}}"
      ],
    ]);
    
    $response = curl_exec($curl);
    curl_close($curl);
    
    echo $response;
    ?>
    ```
    
      </TabItem>
      <TabItem value="csharp" label="C#">
    
    ```csharp
    var client = new RestClient("{{baseUrl}}/zoqq/api/v1/accounts");
    var request = new RestRequest(Method.GET);
    request.AddHeader("x-api-key", "{{Shared Xapikey By ZOqq}}");
    request.AddHeader("x-program-id", "{{BasedOnRequirement}}");
    request.AddHeader("x-request-id", "{{IdempotencyKey}}");
    request.AddHeader("x-user-id", "{{Useridentificationkey}}");
    request.AddHeader("Authorization", "Bearer {{YOUR_TOKEN}}");
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
      "data": [
        {
          "id": "85c7a2e6-7c4f-4abc-9e15-d4f3b5b8c382",
          "status": "ACTIVE",
          "account_number": "8483855800",
          "label": "",
          "account_type": "Checking",
          "country_code": "US",
          "institution": {
            "address": "89-16 Jamaica Ave",
            "city": "Woodhaven, NY",
            "name": "Community Federal Savings Bank",
            "zip_code": "11421"
          },
          "supported_features": [
            {
              "currency": "USD",
              "local_clearing_system": "ACH",
              "routing_codes": [
                {
                  "type": "ach",
                  "value": "026073150"
                }
              ],
              "transfer_method": "LOCAL",
              "type": "DEPOSIT"
            },
            {
              "currency": "USD",
              "local_clearing_system": "FEDWIRE",
              "routing_codes": [
                {
                  "type": "fedwire",
                  "value": "026073008"
                }
              ],
              "transfer_method": "LOCAL",
              "type": "DEPOSIT"
            },
            {
              "currency": "USD",
              "routing_codes": [
                {
                  "type": "swift",
                  "value": "CMFGUS33"
                }
              ],
              "transfer_method": "SWIFT",
              "type": "DEPOSIT"
            }
          ]
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
    </Tabs>
  </div>
</div>

## Get Balance

This API allows you to retrieve the available, pending, and reserved balances for all currencies associated with an account.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/accounts/balance
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint retrieves the current balance information for all currencies associated with the authenticated user's account. 
    The response includes available balance, pending amounts, and reserved amounts for each currency.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier based on requirement |
    | x-request-id | string | Yes | Idempotency key for request tracking |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Optional) |
    
    <h3>Query Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | currency | string | No | Filter results by specific currency (e.g. USD, SGD) |
    | as_of | string | No | Timestamp to get historical balance (ISO 8601 format) |
    
    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | number | Response code (200 for success) |
    | status | string | Status of the response (success/error) |
    | message | string | Additional information about the response |
    | data | array | Array of balance objects by currency |
    | data[].currency | string | Currency code (e.g. "USD", "SGD") |
    | data[].available_balance | number | Available balance amount |
    | data[].pending_amount | number | Amount in pending transactions |
    | data[].reserved_amount | number | Amount reserved for holds/authorizations |
    | data[].updated_at | string | Timestamp of last balance update |
  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/accounts/balance?currency=SGD' \
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
    import json
    
    url = "{{baseUrl}}/zoqq/api/v1/accounts/balance"
    params = {"currency": "SGD"}
    
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/accounts/balance?currency=SGD"))
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
      <TabItem value="php" label="PHP">
    
    ```php
    <?php
    $curl = curl_init();
    
    curl_setopt_array($curl, [
      CURLOPT_URL => "{{baseUrl}}/zoqq/api/v1/accounts/balance?currency=SGD",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => [
        "x-api-key: {{Shared Xapikey By ZOqq}}",
        "x-program-id: {{BasedOnRequirement}}",
        "x-request-id: {{IdempotencyKey}}",
        "x-user-id: {{Useridentificationkey}}",
        "Authorization: Bearer {{YOUR_TOKEN}}"
      ],
    ]);
    
    $response = curl_exec($curl);
    curl_close($curl);
    
    echo $response;
    ?>
    ```
    
      </TabItem>
      <TabItem value="csharp" label="C#">
    
    ```csharp
    var client = new RestClient("{{baseUrl}}/zoqq/api/v1/accounts/balance?currency=SGD");
    var request = new RestRequest(Method.GET);
    request.AddHeader("x-api-key", "{{Shared Xapikey By ZOqq}}");
    request.AddHeader("x-program-id", "{{BasedOnRequirement}}");
    request.AddHeader("x-request-id", "{{IdempotencyKey}}");
    request.AddHeader("x-user-id", "{{Useridentificationkey}}");
    request.AddHeader("Authorization", "Bearer {{YOUR_TOKEN}}");
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
      "data": [
        {
          "currency": "SGD",
          "available_balance": 42.72,
          "pending_amount": 0,
          "reserved_amount": 12,
          "updated_at": "2023-06-15T10:30:00Z"
        },
        {
          "currency": "USD",
          "available_balance": 22.72,
          "pending_amount": 5,
          "reserved_amount": 10,
          "updated_at": "2023-06-15T10:30:00Z"
        }
      ]
    }
    ```
    
      </TabItem>
      <TabItem value="400" label="400: Error">
    
    ```json
    {
      "code": 400,
      "status": "error",
      "message": "Invalid currency parameter"
    }
    ```
    
      </TabItem>
      <TabItem value="404" label="404: Not Found">
    
    ```json
    {
      "code": 404,
      "status": "error",
      "message": "No balances found for specified criteria"
    }
    ```
    
      </TabItem>
    </Tabs>
  </div>
</div>

## Get Account Transactions

This API retrieves a list of transactions for the authenticated user's account with filtering capabilities.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/accounts/transactions
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a paginated list of transactions for the user's account. 
    Transactions can be filtered by date range, type, status, and other criteria.</p>
    
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
    | page | integer | No | Page number (default: 1) |
    | size | integer | No | Items per page (default: 20, max: 100) |
    | from_date | string | No | Start date (YYYY-MM-DD) |
    | to_date | string | No | End date (YYYY-MM-DD) |
    | type | string | No | Transaction type filter |
    | status | string | No | Transaction status filter |
    | currency | string | No | Currency code filter |
    
    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | integer | Response status code |
    | status | string | Response status |
    | message | string | Additional message |
    | data | object | Transaction data |
    | data.transactions | array | Array of transaction objects |
    | data.pagination | object | Pagination information |
    | data.pagination.total_items | integer | Total transactions available |
    | data.pagination.total_pages | integer | Total pages available |
    | data.pagination.current_page | integer | Current page number |
    | data.pagination.items_per_page | integer | Items per page |
  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/accounts/transactions?page=1&size=20&from_date=2023-01-01&to_date=2023-12-31' \
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
    
    url = "{{baseUrl}}/zoqq/api/v1/accounts/transactions"
    params = {
        "page": 1,
        "size": 20,
        "from_date": "2023-01-01",
        "to_date": "2023-12-31"
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/accounts/transactions?page=1&size=20&from_date=2023-01-01&to_date=2023-12-31"))
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
        "transactions": [
          {
            "id": "txn_123456789",
            "amount": 100.50,
            "currency": "USD",
            "type": "CREDIT",
            "status": "COMPLETED",
            "description": "Funds transfer",
            "created_at": "2023-06-15T10:30:00Z",
            "updated_at": "2023-06-15T10:30:00Z",
            "reference_id": "ref_987654321"
          }
        ],
        "pagination": {
          "total_items": 125,
          "total_pages": 7,
          "current_page": 1,
          "items_per_page": 20
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
      "message": "No transactions found"
    }
    ```
    
      </TabItem>
    </Tabs>
  </div>
</div>
