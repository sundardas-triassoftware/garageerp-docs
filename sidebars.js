// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/overview',
        'introduction/getting-started',
        'introduction/user-usage-menu-guide',
      ],
    },
    {
      type: 'category',
      label: 'How to set up',
      collapsed: false,
      items: ['introduction/how-to-set-up'],
    },
    {
      type: 'category',
      label: 'Authentication',
      items: ['authentication/login'],
    },
    {
      type: 'category',
      label: 'Dashboard',
      items: ['dashboard/metrics', 'dashboard/kpis', 'dashboard/overview'],
    },
    {
      type: 'category',
      label: 'Estimations',
      items: [
        'estimations/creating-estimates',
        'estimations/tax-calculations',
        'estimations/approvals',
      ],
    },
    {
      type: 'category',
      label: 'Bookings',
      items: ['bookings/scheduling', 'bookings/multi-service-selection'],
    },
    {
      type: 'category',
      label: 'Service Management',
      items: [
        'service-management/service-requests-entry',
        'service-management/service-requests-inspection',
        'service-management/job-cards-mechanic-tasks',
        'service-management/job-cards-parts-tracking',
        'service-management/gatepasses-entry-exit-control',
        'service-management/quotations',
      ],
    },
    {
      type: 'category',
      label: 'CRM & People',
      items: [
        'crm-people/customer-directory',
        'crm-people/service-history',
        'crm-people/employee-management',
      ],
    },
    {
      type: 'category',
      label: 'Inventory',
      items: [
        'inventory/products',
        'inventory/brands',
        'inventory/stock-management',
      ],
    },
    {
      type: 'category',
      label: 'Procurement & Sales',
      items: [
        'procurement-sales/purchase-orders',
        'procurement-sales/invoices',
        'procurement-sales/returns',
      ],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: [
        'accounts/suppliers',
        'accounts/ledgers',
        'accounts/outsource-services',
      ],
    },
    {
      type: 'category',
      label: 'Setup & Admin',
      items: [
        'setup-admin/user-roles',
        'setup-admin/document-templates',
        'setup-admin/general-settings',
      ],
    },
  ],
};

export default sidebars;
