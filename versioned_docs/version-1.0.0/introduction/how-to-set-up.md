# How to set up

Follow these steps **in order** the first time you configure GarageERP for a site. Skipping or reordering steps usually causes missing masters (no brands, no supplier mapping, wrong tax, and so on) and blocks **bookings** and **estimations** from working cleanly.

---

## 1. Log in

Sign in at **`/login`** with an administrator account so you can reach settings and master data.

More detail: [Login](../authentication/login.md).

---

## 2. General settings

Open **General settings** (in the app this may appear under system settings; route is typically **`/genaralSettings`** as configured in the product) and set organization-wide options: garage name, logo, contact details, **currency**, **tax**, and other defaults before users start entering transactions.

More detail: [General settings](../setup-admin/general-settings.md).

---

## 3. Employee roles (permissions)

Define **roles** and what each role can do (for example admin, service advisor, mechanic, cashier). Menus and screens respect these permissions, so do this before creating many employees.

More detail: [User roles](../setup-admin/user-roles.md).  
Application route reference: **`/roles`**.

---

## 4. Employees

Add **employees** (staff profiles, contact details, and assign each user to a **role** from step 3) so the right people can log in and see the correct menus.

More detail: [Employee management](../crm-people/employee-management.md).  
Application route reference: **`/employee`**, **`/employeeForm`**.

---

## 5. Inventory (units, categories, brands, products)

Configure masters so parts and services can be priced and issued on jobs:

| Master | Typical route | Purpose |
|--------|----------------|---------|
| **Units** | `/units` | Liters, pieces, sets, etc. |
| **Categories** | `/categories` | Groups such as oils, filters, brake parts. |
| **Brands** | `/brands` | Part and product brands. |
| **Products** | `/products` | SKUs, pricing, stock, reorder levels. |

**CSV upload:** If you **import products via CSV** (or equivalent bulk import) and the template creates or references **units**, **categories**, and **brands** in the same import, you **do not** need to create every unit, category, and brand manually beforehand—only fix exceptions after import.

Related docs in this site:

- [Products](../inventory/products.md)  
- [Brands](../inventory/brands.md)  
- [Stock management](../inventory/stock-management.md)  

---

## 6. Suppliers

Maintain your **supplier directory** (payment terms, contacts, and how you buy stock) before linking products to vendors.

More detail: [Suppliers](../accounts/suppliers.md).  
Application route reference: **`/suppliers`**.

---

## 7. Supplier products

Map **catalog products** to **suppliers** (supplier part numbers, supplier-specific pricing, and who can supply which SKU). This supports purchasing and job costing.

Application route reference: **`/supplierProducts`**. (Use the same area in the app as your **Suppliers** / accounts menu.)

---

## After setup: bookings and estimations

Once the steps above are done, continue with your **operational flow**:

- **Bookings** — appointments and workload: [Scheduling](../bookings/scheduling.md), [Multi-service selection](../bookings/multi-service-selection.md).  
- **Estimations** — quotes before work: [Creating estimates](../estimations/creating-estimates.mdx), [Tax calculations](../estimations/tax-calculations.md), [Approvals](../estimations/approvals.md).

For a full map of menus and routes, see [User usage menu guide](./user-usage-menu-guide.md).
