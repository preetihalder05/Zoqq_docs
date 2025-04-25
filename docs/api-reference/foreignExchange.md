---
id: foreignExchange
title: Foreign Exchange
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Foreign Exchange

## Generate Quote

This API generates a quote for currency conversion or payout transactions.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/transfer/quote
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint provides real-time quotes for currency conversions or payouts, including exchange rates and expiration times.</p>
    
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
    | quote_type | string | Yes | Type of quote | `payout`, `conversion` |
    | lock_period | string | Yes | Rate lock duration | `5_mins`, `15_mins`, `1_hour`, `4_hours`, `8_hours`, `24_hours` |
    | conversion_schedule | string | Yes | Conversion timing | `immediate`, `end_of_day`, `next_day`, `2_days` |
    | source_currencycode | string | Yes | Source currency | ISO currency code |
    | destination_currencycode | string | Yes | Target currency | ISO currency code |
    | source_amount | number | Conditional* | Amount to convert | Must be null if destination_amount provided |
    | destination_amount | number | Conditional* | Target amount | Must be null if source_amount provided |

    *Either source_amount or destination_amount must be provided, but not both

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/quote?quote_type=payout&lock_period=5_mins&conversion_schedule=immediate&source_currencycode=USD&destination_currencycode=SGD&source_amount=100' \
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

    url = "{{baseUrl}}/zoqq/api/v1/transfer/quote"
    params = {
        "quote_type": "payout",
        "lock_period": "5_mins",
        "conversion_schedule": "immediate",
        "source_currencycode": "USD",
        "destination_currencycode": "SGD",
        "source_amount": 100
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/quote?quote_type=payout&lock_period=5_mins&conversion_schedule=immediate&source_currencycode=USD&destination_currencycode=SGD&source_amount=100"))
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
        "id": "quote_6wBIHIRhPElAHfcgVaDFZs",
        "netExchangeRate": 1.3279389,
        "expiryTime": "2023-06-16T05:07:03Z",
        "sourceCurrencyCode": "USD",
        "destinationCurrencyCode": "SGD",
        "quoteType": "payout",
        "conversionSchedule": "immediate",
        "lockPeriod": "5_mins",
        "rateCaptureTime": "2023-06-16T01:02:03Z",
        "sourceAmount": 100,
        "destinationAmount": 132.79,
        "createdTime": "2023-06-16T05:02:03Z"
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Reason of the error"
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
          "field": "source_amount",
          "message": "Cannot specify both source_amount and destination_amount"
        }
      ]
    }
    ```

      </TabItem>
      <TabItem value="429" label="429: Rate Limited">

    ```json
    {
      "code": 429,
      "status": "Error",
      "message": "Too many quote requests"
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>

## Fetch Quote Details

This API retrieves details of a previously generated quote.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/transfer/quotedetails
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns the full details of a specific quote including exchange rate, amounts, and expiration information.</p>
    
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
    | quote_id | string | Yes | The ID of the quote to retrieve |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/quotedetails?quote_id=quote_6wBIHIRhPElAHfcgVaDFZs' \
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

    url = "{{baseUrl}}/zoqq/api/v1/transfer/quotedetails"
    params = {
        "quote_id": "quote_6wBIHIRhPElAHfcgVaDFZs"
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/quotedetails?quote_id=quote_6wBIHIRhPElAHfcgVaDFZs"))
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
        "id": "quote_6wBIHIRhPElAHfcgVaDFZs",
        "netExchangeRate": 1.3279389,
        "expiryTime": "2023-06-16T05:07:03Z",
        "sourceCurrencyCode": "USD",
        "destinationCurrencyCode": "SGD",
        "quoteType": "payout",
        "conversionSchedule": "immediate",
        "lockPeriod": "5_mins",
        "rateCaptureTime": "2023-06-16T01:02:03Z",
        "sourceAmount": 100,
        "destinationAmount": 132.79
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Invalid quote ID"
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Quote not found"
    }
    ```

      </TabItem>
      <TabItem value="410" label="410: Expired">

    ```json
    {
      "code": 410,
      "status": "Error",
      "message": "Quote has expired"
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>

## Create Conversion

This API executes a currency conversion based on a previously generated quote.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
POST {{baseUrl}}/zoqq/api/v1/transfer/conversion
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint initiates a currency conversion transaction using a valid quote ID. The conversion will be processed according to the terms of the original quote.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    | Content-Type | string | Yes | Must be application/json |
    
    <h3>Request Body Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | quote_id | string | Yes | Valid quote ID from Generate Quote |
    | source_amount | number | Conditional* | Amount to convert | 
    | destination_amount | number | Conditional* | Target amount |

    *Either source_amount or destination_amount must match the original quote

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/transfer/conversion \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "quote_id": "quote_6WRfj2CkYaRSuiPskK3kj3",
        "source_amount": 100,
        "destination_amount": 132.52
      }'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/transfer/conversion"

    payload = {
        "quote_id": "quote_6WRfj2CkYaRSuiPskK3kj3",
        "source_amount": 100,
        "destination_amount": 132.52
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/conversion"))
        .header("x-api-key", "{{Shared Xapikey By ZOqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"quote_id\":\"quote_6WRfj2CkYaRSuiPskK3kj3\",\"source_amount\":100,\"destination_amount\":132.52}"))
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
        "id": "conversion_4UTXo2tQnThdZGrMz6FdQR",
        "status": "processing",
        "conversion_time": "2023-06-16T05:22:14Z",
        "source_currencycode": "USD",
        "destination_currencycode": "SGD",
        "source_amount": 100,
        "destination_amount": 132.52,
        "quote_id": "quote_6WRfj2CkYaRSuiPskK3kj3",
        "net_exchangerate": 1.3251652,
        "system_reference_number": "WFT9188961163",
        "createdTime": "2023-06-16T05:22:14Z"
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Reason of failure"
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Quote not found or expired"
    }
    ```

      </TabItem>
      <TabItem value="409" label="409: Conflict">

    ```json
    {
      "code": 409,
      "status": "Error",
      "message": "Amounts don't match original quote"
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
          "field": "source_amount",
          "message": "Must be positive number"
        }
      ]
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>

## Get Conversion

This API retrieves the status and details of a specific currency conversion.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/transfer/conversion
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns the current status and full details of a currency conversion transaction.</p>
    
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
    | conversion_id | string | Yes | The ID of the conversion to retrieve |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/conversion?conversion_id=conversion_4UTXo2tQnThdZGrMz6FdQR' \
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

    url = "{{baseUrl}}/zoqq/api/v1/transfer/conversion"
    params = {
        "conversion_id": "conversion_4UTXo2tQnThdZGrMz6FdQR"
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/conversion?conversion_id=conversion_4UTXo2tQnThdZGrMz6FdQR"))
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
        "id": "conversion_4UTXo2tQnThdZGrMz6FdQR",
        "status": "processing",
        "conversion_time": "2023-06-16T05:22:14Z",
        "source_currencycode": "USD",
        "destination_currencycode": "SGD",
        "source_amount": 100,
        "destination_amount": 132.52,
        "quote_id": "quote_6WRfj2CkYaRSuiPskK3kj3",
        "net_exchangerate": 1.3251652,
        "system_reference_number": "WFT9188961163",
        "createdTime": "2023-06-16T05:22:14Z"
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Reason of failure"
    }
    ```

      </TabItem>
      <TabItem value="404" label="404: Not Found">

    ```json
    {
      "code": 404,
      "status": "Error",
      "message": "Conversion not found"
    }
    ```

      </TabItem>
      <TabItem value="410" label="410: Gone">

    ```json
    {
      "code": 410,
      "status": "Error",
      "message": "Conversion record expired"
    }
    ```

      </TabItem>
    </Tabs>

  </div>
</div>
