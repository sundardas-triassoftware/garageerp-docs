# User usage menu guide

This guide maps GarageERP sidebar areas to application routes. Use it as a foundation for onboarding, help articles, or training: each entry lists the **menu label**, **route path**, and **what it is used for** in day-to-day garage operations.

---

## 1. Login

- **Login** (`/login`)
  - **Usage:** Secure entry point where users authenticate with their credentials.

---

## 2. Dashboard

- **Dashboard** (`/dashboard`)
  - **Usage:** Primary landing page with an overview of key garage metrics, ongoing services, pending approvals, and overall performance indicators.

---

## 3. Estimation

- **Estimations** (`/estimation`)
  - **Usage:** Track and manage cost estimates given to customers before work begins.
- **Create/Edit Estimation** (`/estimationForm`)
  - **Usage:** Build the list of expected parts and labor to produce a formal cost estimate for customer approval.

---

## 4. Booking

- **Bookings** (`/booking`)
  - **Usage:** Manage upcoming customer appointments to balance garage workload.
- **Create/Edit Booking** (`/bookingForm`)
  - **Usage:** Schedule a future vehicle service appointment with desired dates and service categories.

---

## 5. Service request

Core operations: tracking vehicles from entry to exit.

- **Service Requests** (`/serviceRequest`)
  - **Usage:** Central place to view, filter, and manage all customer service requests.
- **Start/Create** (`/serviceRequest/start`, `/serviceRequestForm`)
  - **Usage:** Start a new service request, capture initial vehicle inspection, and record customer complaints.
- **View details** (service request detail views in-app)
  - **Usage:** Open a specific service request to review or update status and add findings.
- **Job Cards** (`/jobCard`)
  - **Usage:** Active work document for mechanics: parts used, labor hours, and tasks performed on the vehicle.
- **Task details** (within a job card)
  - **Usage:** Inspect individual tasks assigned inside a job card.
- **Gatepasses** (`/gatepasses`)
  - **Usage:** Security and inventory control: track vehicles entering and leaving the garage.
- **Create Gatepass** (`/serviceRequest/gatePass`)
  - **Usage:** Issue a formal document allowing a vehicle to leave (or record entry) after service or as required by process.
- **Quotations** (`/quotation`)
  - **Usage:** Manage formal quotations sent to customers or insurers.

---

## 6. CRM and people management

- **Customers** (`/customers`)
  - **Usage:** Customer directory: contacts, active vehicles, and outstanding balances.
- **Service History** (`/customers/serviceHistory/:customerId`)
  - **Usage:** Full past service records, prior repairs, and replaced parts for a given customer’s vehicle context.
- **Employees** (`/employee`)
  - **Usage:** Directory of garage staff: mechanics and administrative users.
- **Add/Edit Employee** (`/employeeForm`)
  - **Usage:** Maintain staff profiles, contact information, and internal roles.

---

## 7. Inventory management

- **Products** (`/products`)
  - **Usage:** Main catalog for spare parts, consumables, and merchandise: pricing, stock levels, and reorder points.
- **Brands** (`/brands`)
  - **Usage:** Part and vehicle brands (for example Toyota, Bosch, Castrol) for categorization and search.
- **Categories** (`/categories`)
  - **Usage:** Logical groupings (for example engine oils, brake pads, filters) for browsing and reporting.
- **Units** (`/units`)
  - **Usage:** Units of measure for inventory (for example liters, pieces, sets).

---

## 8. Procurement and sales

### Purchase

- **Purchase Orders** (`/purchaseOrder`)
  - **Usage:** Create and manage formal requests to suppliers for stock or job-specific parts.
- **Purchase Invoices** (`/purchaseInvoice`)
  - **Usage:** Record supplier invoices for accounts payable.
- **Purchase Returns** (`/purchaseReturn`)
  - **Usage:** Track parts returned to suppliers for credit (defective or incorrect items).

### Sales

- **Sales Orders** (`/salesOrder`)
  - **Usage:** Over-the-counter sales of parts or accessories separate from a repair job card.
- **Sales Invoices** (`/salesInvoice`)
  - **Usage:** Billing for direct sales.
- **Sales Returns** (`/salesReturn`)
  - **Usage:** Customer returns for over-the-counter purchases.

### Combined invoicing

- **Invoices** (`/invoices`)
  - **Usage:** Central hub for all generated invoices (from service requests or direct sales) for accounts receivable.

---

## 9. Accounts and vendor management

- **Suppliers** (`/suppliers`)
  - **Usage:** Directory of external suppliers, parts stores, and wholesale distributors.
- **Supplier Products** (`/supplierProducts`)
  - **Usage:** Map inventory products to suppliers, including supplier-specific pricing and part numbers.
- **Account Groups** (`/account/group`) **and Ledgers** (`/account/ledger`)
  - **Usage:** Financial structure to categorize revenue and expenses and to record detailed transactions for accounting.
- **Outsourced Services** (`/outsourcedServices`)
  - **Usage:** Workflows for tasks sent to external workshops or specialists; manage vendors, requests, and status from one module.
- **Vendors / service list** (`/outsourcedServices`)
  - **Usage:** Directory of external workshops, machine shops, or specialists.
- **Add/Edit vendor** (`/outsourcedServices/new`)
  - **Usage:** Record contact details, service specialties, and pricing for external partners.
- **Outsource requests**
  - **Usage:** Track specific jobs sent to external vendors.
- **Create request** (`/outsourcedServices/requests/:taskId/new`)
  - **Usage:** Link a specific task from an active job card to an external vendor; record what was sent, when, and expected cost.
- **Status tracking**
  - **Usage:** See whether external work is pending, in progress, or completed.
- **Job card view (integration)**
  - **Usage:** Mechanics and advisors see which tasks are internal versus outsourced without leaving the job card context.

---

## 10. Master data setup

Primarily for initial setup or administrators to standardize data entry.

- **Service Types** (`/serviceTypes`)
  - **Usage:** Standard services (for example minor service, major repair, inspection).
- **Service Categories** (`/serviceCategory`)
  - **Usage:** Broader groupings (for example mechanical, electrical, bodywork).
- **Product Condition** (`/productCondition`)
  - **Usage:** Labels for parts condition (for example new, refurbished, used).
- **Insurance Companies** (`/insuranceCompany`)
  - **Usage:** Insurers recognized for accident or insurance repair workflows.
- **Damage Types** (`/damageTypes`)
  - **Usage:** Standard damage labels (for example scratch, dent, broken glass).
- **Vehicle Area** (`/vehicleArea`)
  - **Usage:** Standard vehicle sections (for example front bumper, rear left door, engine bay).
- **Severity** (`/severity`)
  - **Usage:** Damage or urgency levels (for example low, medium, critical).

---

## 11. Administration and settings

### User management

- **Users** (`/users`)
  - **Usage:** Create system accounts and manage passwords.
- **Roles** (`/roles`)
  - **Usage:** Define permission sets (for example admin, service advisor, mechanic, cashier).
- **Menus** (`/menus`)
  - **Usage:** Configure which sidebar entries are visible per role.

### System settings

- **General Settings** (`/genaralSettings`)
  - **Usage:** Global options such as garage name, logo, contact details, currency, and tax rates. *(Route spelling matches the application.)*
- **Templates** (`/templates`)
  - **Usage:** Lay out printed documents (invoices, quotations, job cards) using the template editor.
