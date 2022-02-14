import React from 'react';

const routes = {
  Root: {
    path: `/`,
  },

  Home: {
    path: `/home`,
    component: React.lazy(() =>
      import(
        '../components/Pages/Statics/NewHomePage' /* webpackChunkName: "HomePage" */
      ),
    ),
  },

  Auth: {
    Login: {
      path: '/login',
      component: React.lazy(() =>
        import(
          '../components/Pages/Auth/LoginPage' /* webpackChunkName: "LoginPage" */
        ),
      ),
    },

    SecurityCheck: {
      path: '/security_check',
      component: React.lazy(() =>
        import(
          '../components/Pages/Auth/LoginPage/SecurityCheck' /* webpackChunkName: "SecurityCheck" */
        ),
      ),
    },

    Signup: {
      path: '/signup',
      component: React.lazy(() =>
        import(
          '../components/Pages/Auth/SignupPage' /* webpackChunkName: "SignupPage" */
        ),
      ),
    },

    ResetPassword: {
      path: '/reset_password',
      component: React.lazy(() =>
        import(
          '../components/Pages/Auth/ForgotPasswordPage' /* webpackChunkName: "ForgotPasswordPage" */
        ),
      ),
    },

    RecoveryPassword: {
      path: '/recovery_password',
      component: React.lazy(() =>
        import(
          '../components/Pages/Auth/ForgotPasswordPage/RecoveryPassword' /* webpackChunkName: "RecoveryPassword" */
        ),
      ),
    },

    ChangePassword: {
      path: '/change_password',
      component: React.lazy(() =>
        import(
          '../components/Pages/Auth/ChangePassword' /* webpackChunkName: "ChangePassword" */
        ),
      ),
    },

    Reset2FA: {
      path: `/reset-google-2fa`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Auth/Reset2FA' /* webpackChunkName: "Reset2FA" */
        ),
      ),
    },
  },

  Trade: {
    SpotTrade: {
      path: '/trade/spot',
      component: React.lazy(() =>
        import(
          '../components/Pages/Trade/SpotTrade' /* webpackChunkName: "SpotTrade" */
        ),
      ),
    },
    ChartPage: {
      path: `/trade/chart`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Trade/ChartPage' /* webpackChunkName: "ChartPage" */
        ),
      ),
    },
  },

  Profile: {
    BalanceDetails: {
      path: '/balance_details',
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/BalanceDetails' /* webpackChunkName: "BalanceDetailsPages" */
        ),
      ),
    },

    Deposit: {
      path: '/deposit',
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/Deposit' /* webpackChunkName: "DepositPage" */
        ),
      ),
    },

    Withdraw: {
      path: '/withdraw',
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/Withdraw' /* webpackChunkName: "WithdrawPage" */
        ),
      ),
    },

    WalletWithdraw: {
      path: '/wallet',
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/Withdraw/WalletWithdraw' /* webpackChunkName: "WalletWithdrawPage" */
        ),
      ),
    },

    Transfer: {
      path: '/transfer',
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/Transfer' /* webpackChunkName: "TransferPage" */
        ),
      ),
    },

    History: {
      path: '/history',
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/History' /* webpackChunkName: "History page" */
        ),
      ),
    },

    Verification: {
      path: '/verification',
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/Verification' /* webpackChunkName: "Verification page" */
        ),
      ),
    },

    HistoryRoutes: {
      TradeHistory: {
        path: '/history/trade-history',
        component: React.lazy(() =>
          import(
            '../components/Pages/Users/History/TradeHistory' /* webpackChunkName: "TradeHistory page" */
          ),
        ),
      },

      OpenOrders: {
        path: '/history/open-orders',
        component: React.lazy(() =>
          import(
            '../components/Pages/Users/History/OpenOrders' /* webpackChunkName: "OpenOrders page" */
          ),
        ),
      },

      SwapHistory: {
        path: '/history/swap-history',
        component: React.lazy(() =>
          import(
            '../components/Pages/Users/History/SwapHistory' /* webpackChunkName: "OpenOrders page" */
          ),
        ),
      },

      DepositHistory: {
        path: '/history/deposit-history',
        component: React.lazy(() =>
          import(
            '../components/Pages/Users/History/DepositHistory' /* webpackChunkName: "DepositHistory page" */
          ),
        ),
      },

      WithdrawalHistory: {
        path: '/history/withdrawal-history',
        component: React.lazy(() =>
          import(
            '../components/Pages/Users/History/WithdrawalHistory' /* webpackChunkName: "WithdrawalHistory page" */
          ),
        ),
      },
    },

    WithdrawalWhiteListAddresses: {
      path: '/whitelist-withdrawal-addresses',
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/WhiteListWithdrawalAddresses' /* webpackChunkName: "WhiteListWithdrawalAddresses page" */
        ),
      ),
    },

    LockedToken: {
      path: '/locked-token',
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/LockedToken' /* webpackChunkName: "LockedToken page" */
        ),
      ),
    },

    PaymentAgent: {
      path: `/payment-agent`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/PaymentAgent/PublicPaymentAgents' /* webpackChunkName: "PaymentAgent" */
        ),
      ),
    },

    PaymentAgentForm: {
      path: `/payment-agent-form`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/PaymentAgent/PaymentForm' /* webpackChunkName: "PaymentAgentForm" */
        ),
      ),
    },

    PaymentAgentDetails: {
      path: `/payment-agent-details`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/PaymentAgent/Details' /* webpackChunkName: "PaymentAgentDetails" */
        ),
      ),
      Deposit: {
        path: `/payment-agent-details/deposit`,
        component: React.lazy(() =>
          import(
            '../components/Pages/Users/PaymentAgent/Details/Deposit' /* webpackChunkName: "PaymentAgentDetailsDeposit" */
          ),
        ),
      },
      Withdrawal: {
        path: `/payment-agent-details/withdrawal`,
        component: React.lazy(() =>
          import(
            '../components/Pages/Users/PaymentAgent/Details/Withdrawal' /* webpackChunkName: "PaymentAgentDetailsWithdrawal" */
          ),
        ),
      },
      Transfer: {
        path: `/payment-agent-details/transfer`,
        component: React.lazy(() =>
          import(
            '../components/Pages/Users/PaymentAgent/Details/Transfer' /* webpackChunkName: "PaymentAgentDetailsTransfer" */
          ),
        ),
      },
    },
    EditPaymentAgent: {
      path: `/edit-agent-data`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/PaymentAgent/EditPaymentAgent' /* webpackChunkName: "EditPaymentAgent" */
        ),
      ),
    },
  },

  Support: {
    path: `/support`,
    component: React.lazy(() =>
      import(
        '../components/Pages/Statics/Support' /* webpackChunkName: "HomePage" */
      ),
    ),
  },

  Static: {
    MobileBuyDBA: {
      path: `/mobile-buy-dba`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/MobileBuyDBA' /* webpackChunkName: "MobileBuyDBA page" */
        ),
      ),
    },

    BuyDBA: {
      path: `/buy-dba`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/BuyDBA' /* webpackChunkName: "BuyDBA" */
        ),
      ),
    },

    BuyDBAFormStep1: {
      path: `/buy-dba-step-1`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/BuyDBA/BuyForm/BuyFormStep1' /* webpackChunkName: "BuyFormStep1" */
        ),
      ),
    },

    BuyDBAFormStep2: {
      path: `/buy-dba-step-2`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/BuyDBA/BuyForm/BuyFormStep2' /* webpackChunkName: "BuyFormStep1" */
        ),
      ),
    },

    BuyDBAFormStep3: {
      path: `/buy-dba-step-3`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/BuyDBA/BuyForm/BuyFormStep3' /* webpackChunkName: "BuyFormStep1" */
        ),
      ),
    },

    // Trade: {
    //   path: `/trade`,
    //   component: React.lazy(() =>
    //     import(
    //       '../components/Pages/Statics/Trade' /* webpackChunkName: "Trade" */
    //     ),
    //   ),
    // },

    Defi: {
      path: `/defi`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/Defi' /* webpackChunkName: "Defi" */
        ),
      ),
    },

    // Blog: {
    //   path: `/blog`,
    //   component: React.lazy(() =>
    //     import(
    //       '../components/Pages/Statics/Blog' /* webpackChunkName: "Blog" */
    //     ),
    //   ),
    // },

    // LearningPortal: {
    //   path: `/learning-portal`,
    //   component: React.lazy(() =>
    //     import(
    //       '../components/Pages/Statics/LearningPortal' /* webpackChunkName: "LearningPortal" */
    //     ),
    //   ),
    // },

    Investment: {
      path: `/investment`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/InvestmentForm' /* webpackChunkName: "InvestmentForm" */
        ),
      ),
    },

    Affiliate: {
      path: `/affiliate`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/Affiliate' /* webpackChunkName: "StaticAffiliate" */
        ),
      ),
    },

    UserAffiliate: {
      path: `/user-affiliate`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/Affiliate' /* webpackChunkName: "UserAffiliate" */
        ),
      ),
    },

    AffiliateRatings: {
      path: `/affiliate-ratings`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Users/AffiliateRatings' /* webpackChunkName: "AffiliateRatings" */
        ),
      ),
    },

    Careers: {
      path: `/careers`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/Careers' /* webpackChunkName: "Careers" */
        ),
      ),
    },

    FAQ: {
      path: `/faq`,
      component: React.lazy(() =>
        import('../components/Pages/Statics/FAQ' /* webpackChunkName: "FAQ" */),
      ),
    },

    Contacts: {
      path: `/contacts`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/Contacts' /* webpackChunkName: "Contacts" */
        ),
      ),
    },

    Legal: {
      path: `/legal`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/Legal' /* webpackChunkName: "Legal" */
        ),
      ),
    },

    PrivacyAndTerms: {
      path: `/privacy&terms`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/Privacy&Terms' /* webpackChunkName: "Privacy&Terms" */
        ),
      ),
    },

    TermsAndCondition: {
      path: `/terms&conditions`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/Terms&Conditions' /* webpackChunkName: "Terms&Conditions" */
        ),
      ),
    },

    AMLPolicy: {
      path: `/aml-kyc-policy`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/AMLPolicy' /* webpackChunkName: "AMLPolicy" */
        ),
      ),
    },

    ListingDelisting: {
      path: `/listing-delisting`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/ListingDelisting' /* webpackChunkName: "ListingDelisting" */
        ),
      ),
    },

    Security: {
      path: `/security`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/Security' /* webpackChunkName: "Security" */
        ),
      ),
    },

    DepositInstructions: {
      path: `/deposit-instructions`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/DepositInstructions' /* webpackChunkName: "DepositInstructions" */
        ),
      ),
    },

    WithdrawalInstructions: {
      path: `/withdrawal-instructions`,
      component: React.lazy(() =>
        import(
          '../components/Pages/Statics/WithdrawalInstructions' /* webpackChunkName: "WithdrawalInstructions" */
        ),
      ),
    },
  },

  Blog: {
    path: 'https://blog.dafrixchange.com/',
  },
};
export default routes;
