
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started'],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'api-reference/authentication',
        {
          type: 'doc',
          id: 'api-reference/onboarding',
          label: 'Onboarding',
        },
        {
          type: 'category',
          label: 'Accounts',
          items: [
            'api-reference/accounts',
          ],
        },
        {
          type: 'category',
          label :'Cards',
          items: [
            'api-reference/cards',
          ],
        },
        
        {
          type: 'category',
          label :'Foreign Exchange',
          items: [
            'api-reference/foreign exchange',
          ],
        },
        {
          type: 'category',
          label: 'Payout',
          items: [
            'api-reference/payout',
          ],
        },
        {
          type: 'doc',
          id: 'api-reference/wallets',
          label: 'Wallets',
        },
        'api-reference/transactions',
      ],
    },
    {
      type: 'category',
      label: 'Changelog',
      collapsed: false,
      items: ['changelog'],
    },
  ],
};

export default sidebars;
