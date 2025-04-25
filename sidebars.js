const sidebars = {
  guide: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started"],
    },
  ],
  apiReference: [
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: [
        "api-reference/authentication",
        {
          type: "doc",
          id: "api-reference/onboarding",
          label: "Onboarding",
        },

    
        {
          type: "category",
          label: "Accounts",
          items: [
            {
              type: "doc",
              id: "api-reference/accounts",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/accounts#create-account",
              label: "🟡 POST Create Account",
            },
            {
              type: "link",
              href: "/docs/api-reference/accounts#get-account",
              label: "🟢 GET Get Account",
            },
            {
              type: "link",
              href: "/docs/api-reference/accounts#get-balance",
              label: "🟢 GET Get Balance",
            },
            {
              type: "link",
              href: "/docs/api-reference/accounts#get-account-transactions",
              label: "🟢 GET Get Account Transactions",
            },
          ],
        },
        {
          type: "category",
          label: "Cards",
          items: [
            {
              type: "doc",
              id: "api-reference/cards",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#create-cardholder",
              label: "🟡 POST Create Cardholder",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#create-card",
              label: "🟡 POST Create Card",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#get-all-cards",
              label: "🟢 GET Get All Cards",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#activate-card",
              label: "🟡 POST Activate Cards",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#update-card",
              label: "🟡 PATCH Update Cards",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#update-card-holder",
              label: "🟡 PATCH Update Card Holder",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#get-card-limit",
              label: "🟢 GET Get Card Limit",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#get-card-transactions",
              label: "🟡 POST Get Card Transactions",
            },
          ],
        },
        {
          type: "category",
          label: "Foreign Exchange",
          items: [
            {
              type: "doc",
              id: "api-reference/foreignExchange",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/foreignExchange#generate-quote",
              label: "🟢 GET Generate Quote ",
            },
            {
              type: "link",
              href: "/docs/api-reference/foreignExchange#fetch-quote-details",
              label: "🟢 GET Fetch Quote Details ",
            },
            {
              type: "link",
              href: "/docs/api-reference/foreignExchange#create-conversion",
              label: "🟡 POST Create Conversion",
            },
            {
              type: "link",
              href: "/docs/api-reference/foreignExchange#get-conversion",
              label: "🟢 GET Get Conversion",
            },
          ],
        },
        {
          type: "category",
          label: "Payout",
          items: [
            {
              type: "doc",
              id: "api-reference/payout",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#get-create-beneficiary-schema",
              label: "🟢 GET Get-Create-Beneficiary-Schema",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#create-beneficiary",
              label: "🟡 POST Create Beneficiary",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#validate-create-beneficiary",
              label: "🟡 POST Validate Create Beneficiary",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#update-beneficiary",
              label: "🟡 PATCH Update Beneficiary",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#get-beneficiary-by-id",
              label: "🟢 GET Get Beneficiary by ID",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#get-beneficiary-list",
              label: "🟢 GET Get Beneficiary List",
            },
          ],
        },
      ],
    },
  ],
  changelog: [
    {
      type: "category",
      label: "Changelog",
      collapsed: false,
      items: ["changelog"],
    },
  ],
};

export default sidebars;
