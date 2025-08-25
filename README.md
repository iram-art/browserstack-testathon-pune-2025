# BrowserStack Testathon - Pune 2025

This repository contains my Cypress-based automation test suite developed for the **BrowserStack Testathon - Pune 2025**.  

It includes:
- Documented test cases using **BrowserStack Test Management**
- End-to-end automation with **Cypress** integrated into **BrowserStack Automate**
- Test reporting and analytics dashboards for tracking results

---

## 1. Setup Instructions

### Clone the repository:

```bash
git clone https://github.com/<your-username>/browserstack-testathon-pune-2025.git
cd browserstack-testathon-pune-2025

```

## 2. Install dependencies:
npm install

## 3. Add BrowserStack credentials:
Create a .env file in the project root:

```
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key

```

## 2. Running the Tests
Run locally:
  a. npm run test:local

Open Cypress in interactive mode:
  b. npm run test:open

Run on BrowserStack cloud:
  c. npm run test:browserstack
