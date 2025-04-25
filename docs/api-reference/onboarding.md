---
id: onboarding
title: Onboarding
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create User

This API creates a new user in the system with business and personal details.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    POST {{baseUrl}}/zoqq/api/v1/user
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint creates a new user with business details, personal information, and required documents. The user can be either an individual or a business entity.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | Yes | Bearer token |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | account_details | object | Yes | Contains business and personal details |
    | account_details.business_details | object | Yes | Business information |
    | account_details.business_person_details | array | Yes | Array of person details |
    | account_details.legal_entity_type | string | Yes | BUSINESS or INDIVIDUAL |
    | customer_agreements | object | Yes | User agreements |
    | primary_contact | object | Yes | Primary contact information |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

<Tabs>
  <TabItem value="curl" label="cURL" default>
    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/user \
      --header 'x-api-key: {{Shared Xapikey By ZOqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --header 'Content-Type: application/json' \
      --data '{
        "account_details": {
          "business_details": {
            "account_usage": {
              "estimated_monthly_revenue": {
                "amount": "50",
                "currency": "USD"
              },
              "product_reference": [
                "ACCEPT_ONLINE_PAYMENTS",
                "RECEIVE_TRANSFERS"
              ]
            },
            "as_trustee": true,
            "attachments": {
              "business_documents": [
                {
                  "file_id": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
                  "tag": "BUSINESS_LICENSE"
                }
              ]
            },
            "business_identifiers": [
              {
                "country_code": "SG",
                "number": "A1098762872",
                "type": "BRN"
              }
            ],
            "business_name": "STYLOPAY Pty Ltd2",
            "business_structure": "COMPANY",
            "contact_number": "528854125",
            "description_of_goods_or_services": "food",
            "industry_category_code": "ICCV3_0000XX",
            "operating_country": ["US", "AU", "SG"],
            "registration_address": {
              "address_line1": "200 Collins Street",
              "address_line2": "200 Collins Street",
              "country_code": "SG",
              "postcode": "3000",
              "state": "Singapore",
              "suburb": "Melbourne"
            }
          },
          "business_person_details": [
            {
              "attachments": {
                "business_person_documents": [
                  {
                    "file_id": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
                    "tag": "PERSON_PURPORTING_TO_ACT_AUTHORISATION_LETTER"
                  }
                ]
              },
              "residential_address": {
                "address_line1": "200 Collins Street",
                "country_code": "SG",
                "postcode": "3000",
                "state": "VIC",
                "suburb": "Melbourne"
              },
              "email": "nivi@yopmail.com",
              "date_of_birth": "1980-10-10",
              "first_name": "testAir",
              "roles": ["BENEFICIAL_OWNER"],
              "identifications": {
                "primary": {
                  "identification_type": "PASSPORT",
                  "issuing_country_code": "SG",
                  "passport": {
                    "effective_at": "2020-11-01",
                    "expire_at": "2040-11-01",
                    "front_file_id": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
                    "number": "6275046"
                  }
                }
              },
              "last_name": "Smith",
              "middle_name": "John",
              "nationality": "SG",
              "live_selfie_file_id": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA"
            }
          ],
          "legal_entity_type": "BUSINESS"
        },
        "customer_agreements": {
          "agreed_to_data_usage": true,
          "agreed_to_terms_and_conditions": true
        },
        "primary_contact": {
          "email": "airwallex8@yopmail.com",
          "mobile": "896300124"
        }
      }'
    ```
  </TabItem>

  <TabItem value="java" label="Java">
    ```java
    import java.net.HttpURLConnection;
    import java.net.URL;
    import java.io.OutputStream;
    import java.io.BufferedReader;
    import java.io.InputStreamReader;

    public class CreateUser {
        public static void main(String[] args) throws Exception {
            URL url = new URL("{{baseUrl}}/zoqq/api/v1/user");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("x-api-key", "{{Shared Xapikey By ZOqq}}");
            connection.setRequestProperty("x-program-id", "{{BasedOnRequirement}}");
            connection.setRequestProperty("x-request-id", "{{IdempotencyKey}}");
            connection.setRequestProperty("x-user-id", "{{Useridentificationkey}}");
            connection.setRequestProperty("Authorization", "Bearer {{YOUR_TOKEN}}");
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setDoOutput(true);

            String jsonInputString = "{\"account_details\": {\"business_details\": {\"account_usage\": {\"estimated_monthly_revenue\": {\"amount\": \"50\",\"currency\": \"USD\"},\"product_reference\": [\"ACCEPT_ONLINE_PAYMENTS\",\"RECEIVE_TRANSFERS\"]},\"as_trustee\": true,\"attachments\": {\"business_documents\": [{\"file_id\": \"NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA\",\"tag\": \"BUSINESS_LICENSE\"}]},\"business_identifiers\": [{\"country_code\": \"SG\",\"number\": \"A1098762872\",\"type\": \"BRN\"}],\"business_name\": \"STYLOPAY Pty Ltd2\",\"business_structure\": \"COMPANY\",\"contact_number\": \"528854125\",\"description_of_goods_or_services\": \"food\",\"industry_category_code\": \"ICCV3_0000XX\",\"operating_country\": [\"US\",\"AU\",\"SG\"],\"registration_address\": {\"address_line1\": \"200 Collins Street\",\"address_line2\": \"200 Collins Street\",\"country_code\": \"SG\",\"postcode\": \"3000\",\"state\": \"Singapore\",\"suburb\": \"Melbourne\"}},\"business_person_details\": [{\"attachments\": {\"business_person_documents\": [{\"file_id\": \"NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA\",\"tag\": \"PERSON_PURPORTING_TO_ACT_AUTHORISATION_LETTER\"}]},\"residential_address\": {\"address_line1\": \"200 Collins Street\",\"country_code\": \"SG\",\"postcode\": \"3000\",\"state\": \"VIC\",\"suburb\": \"Melbourne\"},\"email\": \"nivi@yopmail.com\",\"date_of_birth\": \"1980-10-10\",\"first_name\": \"testAir\",\"roles\": [\"BENEFICIAL_OWNER\"],\"identifications\": {\"primary\": {\"identification_type\": \"PASSPORT\",\"issuing_country_code\": \"SG\",\"passport\": {\"effective_at\": \"2020-11-01\",\"expire_at\": \"2040-11-01\",\"front_file_id\": \"NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA\",\"number\": \"6275046\"}}},\"last_name\": \"Smith\",\"middle_name\": \"John\",\"nationality\": \"SG\",\"live_selfie_file_id\": \"NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA\"}],\"legal_entity_type\": \"BUSINESS\"},\"customer_agreements\": {\"agreed_to_data_usage\": true,\"agreed_to_terms_and_conditions\": true},\"primary_contact\": {\"email\": \"airwallex8@yopmail.com\",\"mobile\": \"896300124\"}}";

            try(OutputStream os = connection.getOutputStream()) {
                byte[] input = jsonInputString.getBytes("utf-8");
                os.write(input, 0, input.length);           
            }

            try(BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"))) {
                StringBuilder response = new StringBuilder();
                String responseLine = null;
                while ((responseLine = br.readLine()) != null) {
                    response.append(responseLine.trim());
                }
                System.out.println(response.toString());
            }
        }
    }
    ```
  </TabItem>

  <TabItem value="python" label="Python">
    ```python
    import requests

    url = "{{baseUrl}}/zoqq/api/v1/user"
    headers = {
        "x-api-key": "{{Shared Xapikey By ZOqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Authorization": "Bearer {{YOUR_TOKEN}}",
        "Content-Type": "application/json"
    }

    data = {
        "account_details": {
            "business_details": {
                "account_usage": {
                    "estimated_monthly_revenue": {
                        "amount": "50",
                        "currency": "USD"
                    },
                    "product_reference": [
                        "ACCEPT_ONLINE_PAYMENTS",
                        "RECEIVE_TRANSFERS"
                    ]
                },
                "as_trustee": True,
                "attachments": {
                    "business_documents": [
                        {
                            "file_id": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
                            "tag": "BUSINESS_LICENSE"
                        }
                    ]
                },
                "business_identifiers": [
                    {
                        "country_code": "SG",
                        "number": "A1098762872",
                        "type": "BRN"
                    }
                ],
                "business_name": "STYLOPAY Pty Ltd2",
                "business_structure": "COMPANY",
                "contact_number": "528854125",
                "description_of_goods_or_services": "food",
                "industry_category_code": "ICCV3_0000XX",
                "operating_country": ["US", "AU", "SG"],
                "registration_address": {
                    "address_line1": "200 Collins Street",
                    "address_line2": "200 Collins Street",
                    "country_code": "SG",
                    "postcode": "3000",
                    "state": "Singapore",
                    "suburb": "Melbourne"
                }
            },
            "business_person_details": [
                {
                    "attachments": {
                        "business_person_documents": [
                            {
                                "file_id": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
                                "tag": "PERSON_PURPORTING_TO_ACT_AUTHORISATION_LETTER"
                            }
                        ]
                    },
                    "residential_address": {
                        "address_line1": "200 Collins Street",
                        "country_code": "SG",
                        "postcode": "3000",
                        "state": "VIC",
                        "suburb": "Melbourne"
                    },
                    "email": "nivi@yopmail.com",
                    "date_of_birth": "1980-10-10",
                    "first_name": "testAir",
                    "roles": ["BENEFICIAL_OWNER"],
                    "identifications": {
                        "primary": {
                            "identification_type": "PASSPORT",
                            "issuing_country_code": "SG",
                            "passport": {
                                "effective_at": "2020-11-01",
                                "expire_at": "2040-11-01",
                                "front_file_id": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
                                "number": "6275046"
                            }
                        }
                    },
                    "last_name": "Smith",
                    "middle_name": "John",
                    "nationality": "SG",
                    "live_selfie_file_id": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA"
                }
            ],
            "legal_entity_type": "BUSINESS"
        },
        "customer_agreements": {
            "agreed_to_data_usage": True,
            "agreed_to_terms_and_conditions": True
        },
        "primary_contact": {
            "email": "airwallex8@yopmail.com",
            "mobile": "896300124"
        }
    }

    response = requests.post(url, headers=headers, json=data)
    print(response.text)
    ```
  </TabItem>

  <TabItem value="php" label="Php">
    ```php
    <?php
    $url = '{{baseUrl}}/zoqq/api/v1/user';
    $headers = [
        'x-api-key: {{Shared Xapikey By ZOqq}}',
        'x-program-id: {{BasedOnRequirement}}',
        'x-request-id: {{IdempotencyKey}}',
        'x-user-id: {{Useridentificationkey}}',
        'Authorization: Bearer {{YOUR_TOKEN}}',
        'Content-Type: application/json'
    ];

    $data = [
        'account_details' => [
            'business_details' => [
                'account_usage' => [
                    'estimated_monthly_revenue' => [
                        'amount' => '50',
                        'currency' => 'USD'
                    ],
                    'product_reference' => [
                        'ACCEPT_ONLINE_PAYMENTS',
                        'RECEIVE_TRANSFERS'
                    ]
                ],
                'as_trustee' => true,
                'attachments' => [
                    'business_documents' => [
                        [
                            'file_id' => 'NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA',
                            'tag' => 'BUSINESS_LICENSE'
                        ]
                    ]
                ],
                'business_identifiers' => [
                    [
                        'country_code' => 'SG',
                        'number' => 'A1098762872',
                        'type' => 'BRN'
                    ]
                ],
                'business_name' => 'STYLOPAY Pty Ltd2',
                'business_structure' => 'COMPANY',
                'contact_number' => '528854125',
                'description_of_goods_or_services' => 'food',
                'industry_category_code' => 'ICCV3_0000XX',
                'operating_country' => ['US', 'AU', 'SG'],
                'registration_address' => [
                    'address_line1' => '200 Collins Street',
                    'address_line2' => '200 Collins Street',
                    'country_code' => 'SG',
                    'postcode' => '3000',
                    'state' => 'Singapore',
                    'suburb' => 'Melbourne'
                ]
            ],
            'business_person_details' => [
                [
                    'attachments' => [
                        'business_person_documents' => [
                            [
                                'file_id' => 'NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA',
                                'tag' => 'PERSON_PURPORTING_TO_ACT_AUTHORISATION_LETTER'
                            ]
                        ]
                    ],
                    'residential_address' => [
                        'address_line1' => '200 Collins Street',
                        'country_code' => 'SG',
                        'postcode' => '3000',
                        'state' => 'VIC',
                        'suburb' => 'Melbourne'
                    ],
                    'email' => 'nivi@yopmail.com',
                    'date_of_birth' => '1980-10-10',
                    'first_name' => 'testAir',
                    'roles' => ['BENEFICIAL_OWNER'],
                    'identifications' => [
                        'primary' => [
                            'identification_type' => 'PASSPORT',
                            'issuing_country_code' => 'SG',
                            'passport' => [
                                'effective_at' => '2020-11-01',
                                'expire_at' => '2040-11-01',
                                'front_file_id' => 'NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA',
                                'number' => '6275046'
                            ]
                        ]
                    ],
                    'last_name' => 'Smith',
                    'middle_name' => 'John',
                    'nationality' => 'SG',
                    'live_selfie_file_id' => 'NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA'
                ]
            ],
            'legal_entity_type' => 'BUSINESS'
        ],
        'customer_agreements' => [
            'agreed_to_data_usage' => true,
            'agreed_to_terms_and_conditions' => true
        ],
        'primary_contact' => [
            'email' => 'airwallex8@yopmail.com',
            'mobile' => '896300124'
        ]
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
    ?>
    ```
  </TabItem>

  <TabItem value="csharp" label="C#">
    ```csharp
    using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;

    class Program
    {
        static async Task Main(string[] args)
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage(HttpMethod.Post, "{{baseUrl}}/zoqq/api/v1/user");
            
            request.Headers.Add("x-api-key", "{{Shared Xapikey By ZOqq}}");
            request.Headers.Add("x-program-id", "{{BasedOnRequirement}}");
            request.Headers.Add("x-request-id", "{{IdempotencyKey}}");
            request.Headers.Add("x-user-id", "{{Useridentificationkey}}");
            request.Headers.Add("Authorization", "Bearer {{YOUR_TOKEN}}");
            
            var json = @"{
                ""account_details"": {
                    ""business_details"": {
                        ""account_usage"": {
                            ""estimated_monthly_revenue"": {
                                ""amount"": ""50"",
                                ""currency"": ""USD""
                            },
                            ""product_reference"": [
                                ""ACCEPT_ONLINE_PAYMENTS"",
                                ""RECEIVE_TRANSFERS""
                            ]
                        },
                        ""as_trustee"": true,
                        ""attachments"": {
                            ""business_documents"": [
                                {
                                    ""file_id"": ""NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA"",
                                    ""tag"": ""BUSINESS_LICENSE""
                                }
                            ]
                        },
                        ""business_identifiers"": [
                            {
                                ""country_code"": ""SG"",
                                ""number"": ""A1098762872"",
                                ""type"": ""BRN""
                            }
                        ],
                        ""business_name"": ""STYLOPAY Pty Ltd2"",
                        ""business_structure"": ""COMPANY"",
                        ""contact_number"": ""528854125"",
                        ""description_of_goods_or_services"": ""food"",
                        ""industry_category_code"": ""ICCV3_0000XX"",
                        ""operating_country"": [""US"", ""AU"", ""SG""],
                        ""registration_address"": {
                            ""address_line1"": ""200 Collins Street"",
                            ""address_line2"": ""200 Collins Street"",
                            ""country_code"": ""SG"",
                            ""postcode"": ""3000"",
                            ""state"": ""Singapore"",
                            ""suburb"": ""Melbourne""
                        }
                    },
                    ""business_person_details"": [
                        {
                            ""attachments"": {
                                ""business_person_documents"": [
                                    {
                                        ""file_id"": ""NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA"",
                                        ""tag"": ""PERSON_PURPORTING_TO_ACT_AUTHORISATION_LETTER""
                                    }
                                ]
                            },
                            ""residential_address"": {
                                ""address_line1"": ""200 Collins Street"",
                                ""country_code"": ""SG"",
                                ""postcode"": ""3000"",
                                ""state"": ""VIC"",
                                ""suburb"": ""Melbourne""
                            },
                            ""email"": ""nivi@yopmail.com"",
                            ""date_of_birth"": ""1980-10-10"",
                            ""first_name"": ""testAir"",
                            ""roles"": [""BENEFICIAL_OWNER""],
                            ""identifications"": {
                                ""primary"": {
                                    ""identification_type"": ""PASSPORT"",
                                    ""issuing_country_code"": ""SG"",
                                    ""passport"": {
                                        ""effective_at"": ""2020-11-01"",
                                        ""expire_at"": ""2040-11-01"",
                                        ""front_file_id"": ""NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA"",
                                        ""number"": ""6275046""
                                    }
                                }
                            },
                            ""last_name"": ""Smith"",
                            ""middle_name"": ""John"",
                            ""nationality"": ""SG"",
                            ""live_selfie_file_id"": ""NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA""
                        }
                    ],
                    ""legal_entity_type"": ""BUSINESS""
                },
                ""customer_agreements"": {
                    ""agreed_to_data_usage"": true,
                    ""agreed_to_terms_and_conditions"": true
                },
                ""primary_contact"": {
                    ""email"": ""airwallex8@yopmail.com"",
                    ""mobile"": ""896300124""
                }
            }";
            
            request.Content = new StringContent(json, Encoding.UTF8, "application/json");
            
            var response = await client.SendAsync(request);
            var responseString = await response.Content.ReadAsStringAsync();
            
            Console.WriteLine(responseString);
        }
    }
    ```
  </TabItem>
</Tabs>
  </div> 
</div>

## Get User

This API retrieves user details from the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    GET {{baseUrl}}/zoqq/api/v1/user
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint retrieves the details of an existing user including business information, personal details, and account status.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | Yes | Bearer token |

  </div>

  <div className="api-docs-right">
    <h3>Request Examples</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request GET \
          --url {{baseUrl}}/zoqq/api/v1/user \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Authorization: Bearer {{Bearer Token}}'
        ```
      </TabItem>
      <TabItem value="java" label="Java">
        ```java
        import java.net.HttpURLConnection;
        import java.net.URL;
        import java.io.BufferedReader;
        import java.io.InputStreamReader;

        public class GetUser {
            public static void main(String[] args) throws Exception {
                URL url = new URL("{{baseUrl}}/zoqq/api/v1/user");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");
                
                // Set headers
                conn.setRequestProperty("x-api-key", "{{Shared Xapikey By Zoqq}}");
                conn.setRequestProperty("x-program-id", "{{BasedOnRequirement}}");
                conn.setRequestProperty("x-request-id", "{{IdempotencyKey}}");
                conn.setRequestProperty("x-user-id", "{{Useridentificationkey}}");
                conn.setRequestProperty("Authorization", "Bearer {{Bearer Token}}");
                
                int responseCode = conn.getResponseCode();
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuffer response = new StringBuffer();
                
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();
                
                System.out.println(response.toString());
            }
        }
        ```
      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/user"

        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Authorization": "Bearer {{Bearer Token}}"
        }

        response = requests.get(url, headers=headers)
        print(response.json())
        ```
      </TabItem>
      <TabItem value="php" label="PHP">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/user';

        $headers = array(
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Authorization: Bearer {{Bearer Token}}'
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        curl_close($ch);

        echo $response;
        ?>
        ```
      </TabItem>
      <TabItem value="csharp" label="C#">
        ```csharp
        using System;
        using System.Net;
        using System.IO;

        class Program
        {
            static void Main()
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create("{{baseUrl}}/zoqq/api/v1/user");
                request.Method = "GET";
                
                // Set headers
                request.Headers["x-api-key"] = "{{Shared Xapikey By Zoqq}}";
                request.Headers["x-program-id"] = "{{BasedOnRequirement}}";
                request.Headers["x-request-id"] = "{{IdempotencyKey}}";
                request.Headers["x-user-id"] = "{{Useridentificationkey}}";
                request.Headers["Authorization"] = "Bearer {{Bearer Token}}";
                
                try
                {
                    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                    StreamReader reader = new StreamReader(response.GetResponseStream());
                    string jsonResponse = reader.ReadToEnd();
                    Console.WriteLine(jsonResponse);
                }
                catch (WebException ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
        ```
      </TabItem>
    </Tabs>

    <h3>Response Examples</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>
        ```json
        {
          "account_details": {
            "attachments": {
              "additional_files": []
            },
            "business_details": {
              "account_usage": {
                "estimated_monthly_revenue": {
                  "amount": "10.0",
                  "currency": "USD"
                },
                "product_reference": [
                  "ACCEPT_ONLINE_PAYMENTS",
                  "SG"
                ]
              },
              "as_trustee": true,
              "attachments": {
                "business_documents": []
              },
              "business_address": null,
              "business_identifiers": [],
              "business_name": "STYLOPAY Pty Ltd2",
              "business_name_english": null,
              "business_name_trading": null,
              "business_start_date": null,
              "business_structure": "COMPANY",
              "contact_number": null,
              "description_of_goods_or_services": "Payment gateway services",
              "explanation_for_high_risk_countries_exposure": null,
              "has_nominee_shareholders": null,
              "industry_category_code": "ICCV3_0000XX",
              "no_shareholders_with_over_25percent": null,
              "operating_country": [],
              "registration_address": {
                "address_line1": "123 Market Street",
                "address_line2": "Suite 456",
                "country_code": "SG",
                "postcode": "2010",
                "state": "NSW",
                "suburb": "Newtown"
              },
              "registration_address_english": null,
              "state_of_incorporation": null,
              "url": null,
              "urls": null
            },
            "business_person_details": [],
            "trustee_details": null,
            "individual_details": null,
            "legal_entity_id": "le_5lhQNwZMOJaTmINmCGBOsA",
            "legal_entity_identifier": null,
            "legal_entity_type": "BUSINESS"
          },
          "created_at": "2025-04-07T08:14:13+0000",
          "customer_agreements": {
            "agreed_to_data_usage": true,
            "agreed_to_terms_and_conditions": true,
            "terms_and_conditions": {
              "device_data": {},
              "service_agreement_type": "FULL"
            }
          },
          "id": "acct_M41_8fDmNT6AvcpwdvzHXw",
          "nickname": "acct_M41_8fDmNT6AvcpwdvzHXw",
          "primary_contact": {
            "attachments": {
              "identity_files": []
            },
            "email": "testairwallex3@yopmail.com",
            "mobile": "912514678"
          },
          "status": "CREATED",
          "view_type": "EXCLUDED_PII"
        }
        ```
      </TabItem>
      <TabItem value="400" label="400: Error">
        ```json
        {
          "code": 400,
          "status": "Error",
          "message": "failed reason"
        }
        ```
      </TabItem>
    </Tabs>
  </div> 
</div>


## Accept Terms & Conditions

This API allows users to accept the terms and conditions.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    GET {{baseUrl}}/zoqq/api/v1/user/terms&conditions/Id
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint allows users to accept the terms and conditions required by the platform.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | Yes | Bearer token |

  </div>

  <div className="api-docs-right">
    <h3>Request Examples</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request GET \
          --url {{baseUrl}}/zoqq/api/v1/user/terms&conditions/Id \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Authorization: Bearer {{Bearer Token}}'
        ```
      </TabItem>
      <TabItem value="java" label="Java">
        ```java
        import java.net.HttpURLConnection;
        import java.net.URL;
        import java.io.BufferedReader;
        import java.io.InputStreamReader;

        public class AcceptTerms {
            public static void main(String[] args) throws Exception {
                URL url = new URL("{{baseUrl}}/zoqq/api/v1/user/terms&conditions/Id");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");
                
                // Set headers
                conn.setRequestProperty("x-api-key", "{{Shared Xapikey By Zoqq}}");
                conn.setRequestProperty("x-program-id", "{{BasedOnRequirement}}");
                conn.setRequestProperty("x-request-id", "{{IdempotencyKey}}");
                conn.setRequestProperty("x-user-id", "{{Useridentificationkey}}");
                conn.setRequestProperty("Authorization", "Bearer {{Bearer Token}}");
                
                int responseCode = conn.getResponseCode();
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuffer response = new StringBuffer();
                
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();
                
                System.out.println(response.toString());
            }
        }
        ```
      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/user/terms&conditions/Id"

        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Authorization": "Bearer {{Bearer Token}}"
        }

        response = requests.get(url, headers=headers)
        print(response.json())
        ```
      </TabItem>
      <TabItem value="php" label="PHP">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/user/terms&conditions/Id';

        $headers = array(
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Authorization: Bearer {{Bearer Token}}'
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        curl_close($ch);

        echo $response;
        ?>
        ```
      </TabItem>
      <TabItem value="csharp" label="C#">
        ```csharp
        using System;
        using System.Net;
        using System.IO;

        class Program
        {
            static void Main()
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create("{{baseUrl}}/zoqq/api/v1/user/terms&conditions/Id");
                request.Method = "GET";
                
                // Set headers
                request.Headers["x-api-key"] = "{{Shared Xapikey By Zoqq}}";
                request.Headers["x-program-id"] = "{{BasedOnRequirement}}";
                request.Headers["x-request-id"] = "{{IdempotencyKey}}";
                request.Headers["x-user-id"] = "{{Useridentificationkey}}";
                request.Headers["Authorization"] = "Bearer {{Bearer Token}}";
                
                try
                {
                    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                    StreamReader reader = new StreamReader(response.GetResponseStream());
                    string jsonResponse = reader.ReadToEnd();
                    Console.WriteLine(jsonResponse);
                }
                catch (WebException ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
        ```
      </TabItem>
    </Tabs>

    <h3>Response Examples</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>
        ```json
        {
          "status": "success",
          "message": "Terms and conditions accepted successfully"
        }
        ```
      </TabItem>
      <TabItem value="400" label="400: Error">
        ```json
        {
          "code": 400,
          "status": "Error",
          "message": "failed reason"
        }
        ```
      </TabItem>
    </Tabs>
  </div> 
</div>

## Account Activation

This API activates a user account in the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    GET {{baseUrl}}/zoqq/api/v1/user/activate/Id
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint activates a user account after verifying all required information.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by ZOqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | Yes | Bearer token |

  </div>

  <div className="api-docs-right">
    <h3>Request Examples</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request GET \
          --url {{baseUrl}}/zoqq/api/v1/user/activate/Id \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Authorization: Bearer {{Bearer Token}}'
        ```
      </TabItem>
      <TabItem value="java" label="Java">
        ```java
        import java.net.HttpURLConnection;
        import java.net.URL;
        import java.io.BufferedReader;
        import java.io.InputStreamReader;

        public class ActivateAccount {
            public static void main(String[] args) throws Exception {
                URL url = new URL("{{baseUrl}}/zoqq/api/v1/user/activate/Id");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");
                
                // Set headers
                conn.setRequestProperty("x-api-key", "{{Shared Xapikey By Zoqq}}");
                conn.setRequestProperty("x-program-id", "{{BasedOnRequirement}}");
                conn.setRequestProperty("x-request-id", "{{IdempotencyKey}}");
                conn.setRequestProperty("x-user-id", "{{Useridentificationkey}}");
                conn.setRequestProperty("Authorization", "Bearer {{Bearer Token}}");
                
                int responseCode = conn.getResponseCode();
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuffer response = new StringBuffer();
                
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();
                
                System.out.println(response.toString());
            }
        }
        ```
      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/user/activate/Id"

        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Authorization": "Bearer {{Bearer Token}}"
        }

        response = requests.get(url, headers=headers)
        print(response.json())
        ```
      </TabItem>
      <TabItem value="php" label="PHP">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/user/activate/Id';

        $headers = array(
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Authorization: Bearer {{Bearer Token}}'
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        curl_close($ch);

        echo $response;
        ?>
        ```
      </TabItem>
      <TabItem value="csharp" label="C#">
        ```csharp
        using System;
        using System.Net;
        using System.IO;

        class Program
        {
            static void Main()
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create("{{baseUrl}}/zoqq/api/v1/user/activate/Id");
                request.Method = "GET";
                
                // Set headers
                request.Headers["x-api-key"] = "{{Shared Xapikey By Zoqq}}";
                request.Headers["x-program-id"] = "{{BasedOnRequirement}}";
                request.Headers["x-request-id"] = "{{IdempotencyKey}}";
                request.Headers["x-user-id"] = "{{Useridentificationkey}}";
                request.Headers["Authorization"] = "Bearer {{Bearer Token}}";
                
                try
                {
                    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                    StreamReader reader = new StreamReader(response.GetResponseStream());
                    string jsonResponse = reader.ReadToEnd();
                    Console.WriteLine(jsonResponse);
                }
                catch (WebException ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
        ```
      </TabItem>
    </Tabs>

    <h3>Response Examples</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>
        ```json
        {
          "status": "success",
          "message": "Account Activated"
        }
        ```
      </TabItem>
      <TabItem value="400" label="400: Error">
        ```json
        {
          "code": 400,
          "status": "Error",
          "message": "failed reason"
        }
        ```
      </TabItem>
    </Tabs>
  </div> 
</div>