# Outsourced services

This module manages workflows for tasks that are sent to external third-party workshops or specialists (for example machine shops, body specialists, or advanced diagnostics). It connects **job card tasks** to **external vendors** so costs and status stay visible to advisors and mechanics.

---

## Vendors / service list

**Route:** `/outsourcedServices`

**Usage:** Maintain the directory of external workshops, machine shops, or specialists you work with. Use this list when assigning outsource work and when reviewing who performs which type of external service.

---

## Add / edit vendor

**Route:** `/outsourcedServices/new`

**Usage:** Create or update a vendor record with contact details, service specialties, and pricing arrangements so advisors can choose the right partner and finance can track expected costs.

---

## Outsource requests

**Usage:** Track **specific jobs** sent to external vendors: what was sent, to whom, expected cost, and progress through completion.

### Create request

**Route:** `/outsourcedServices/requests/:taskId/new`

**Usage:** Link a **specific task** from an **active job card** to an external vendor. The flow records what was sent out, when it was sent, and the expected cost so the job card and accounts stay aligned.

### Status tracking

Monitor whether external work is **pending**, **in progress**, or **completed**, so the service desk can update the customer and internal scheduling without guessing.

---

## Workflow integration

### Job card view

Mechanics and advisors can see at a glance which tasks are handled **internally** versus those **outsourced** to external partners, without leaving the job context.
