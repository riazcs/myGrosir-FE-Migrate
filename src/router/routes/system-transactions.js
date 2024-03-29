const systemTransactionRoutes = [
  {
    path: "/transactions",
    children: [
      {
        path: "new-shops",
        name: "Tranaction NewShops",
        component: () => import("@/views/pages/system-transactions/NewShops.vue"),
        meta: {
          pageTitle: "New Shops",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "New Shops",
              active: true,
            },
          ],
        },
      },
      {
        path: "bonus-payments",
        name: "Transation BonusPayments",
        component: () => import("@/views/pages/system-transactions/BonusPayments.vue"),
        meta: {
          pageTitle: "Bonus Payments",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Bonus Payments",
              active: true,
            },
          ],
        },
      },
      {
        path: "contracts-signings",
        name: "Transactions ContractSignings",
        component: () =>
          import("@/views/pages/system-transactions/ContractSignings.vue"),
        meta: {
          pageTitle: "Contracts Signings",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Contracts Signings",
              active: true,
            },
          ],
        },
      },
      {
        path: "agent-checks",
        name: "Transactions AgentChecks",
        component: () =>
          import("@/views/pages/system-transactions/ConsignmentChecks.vue"),
        meta: {
          pageTitle: "Consign Checks",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Consign Checks",
              active: true,
            },
          ],
        },
      },
      {
        path: "agent-sales",
        name: "Transactions AgentSales",
        component: () =>
          import("@/views/pages/system-transactions/ConsignmentSales.vue"),
        meta: {
          pageTitle: "Consign Sales",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Consign Sales",
              active: true,
            },
          ],
        },
      },
      {
        path: "consign-payments",
        name: "Transactions ConsignPayments",
        component: () =>
          import("@/views/pages/system-transactions/ConsignmentPayments.vue"),
        meta: {
          pageTitle: "Consign Payments",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Consign Payments",
              active: true,
            },
          ],
        },
      },
      {
        path: "agent-stock",
        name: "Trasnactions AgentStock",
        component: () =>
          import("@/views/pages/system-transactions/ConsignmentStock.vue"),
        meta: {
          pageTitle: "Consign Stock",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Consign Stock",
              active: true,
            },
          ],
        },
      },
      {
        path: "late-actions",
        name: "Transactions LateActions",
        component: () =>
          import("@/views/pages/system-transactions/LateActions.vue"),
        meta: {
          pageTitle: "Late Actions",
          breadcrumb: [
            {
              text: "Transactions",
              active: false,
            },
            {
              text: "Late Actions",
              active: true,
            },
          ],
        },
      },
      {
        path: "new-accounts",
        name: "Transactions NewAccounts",
        component: () =>
          import("@/views/pages/system-transactions/NewAccounts.vue"),
        meta: {
          pageTitle: "New Accounts",
          breadcrumb: [
            {
              text: "Transactions",
              to: "/",
              active: false,
            },
            {
              text: "New Accounts",
              active: true,
            },
          ],
        },
      },
    ],
  },
]

export default systemTransactionRoutes
