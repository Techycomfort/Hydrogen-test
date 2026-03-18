🚀 Hydrogen Pay QA Test Suite

📌 Overview
This repository contains a comprehensive QA test suite for the Hydrogen Pay platform, covering:
🔌 API Testing (Postman + Newman)
⚡ Performance Testing (Apache JMeter)
🌐 Web Automation Testing (Cypress)
The suite validates functionality, performance, and user experience, simulating real-world scenarios including high traffic conditions and user authentication flows.

🎯 Objectives
Validate API functionality and edge cases
Automate API testing with reporting (Newman)
Assess system performance under heavy load
Automate UI testing for critical user journeys
Identify bottlenecks and scalability issues

🔌 API Testing (Postman + Newman)
📌 Overview
This collection covers functional and validation testing for the Hydrogen Payment Service API using Postman, with automated execution via Newman.

🧪 Test Coverage
👤 Customers (/customers)
✅ Successful customer creation
❌ Missing name/email/both
❌ Duplicate email
❌ Invalid email format
💳 Payments (/payments)
✅ Successful payment initiation
❌ Invalid amount
❌ Unsupported currency
❌ Invalid customer ID
🔄 Transaction Validation (/payments/transaction_id)
Successful, pending, failed states
Invalid transaction ID

⚙️ Automation & Scripts
🔁 Dynamic variables:
customer_id (from customer response)
transaction_id (from payment response)
✅ Automated assertions:
HTTP status codes
Response schema
Error messages
🔗 Chained requests simulate:
Create customer
Initiate payment
Verify transaction


🔧 Environment
Mock server used (no live API base URL)
Enables contract-based testing

🌍 Environment Configuration
Variable
Description
baseUrl
Base URL for the API (mock server or real environment)

⚠️ The baseUrl is environment-driven and not hardcoded.



⚡ Performance Testing (JMeter)
📌 Overview
Performance testing simulates Black Friday-level traffic on the Jumia homepage to evaluate scalability and responsiveness.

🧪 Test Configuration
Component
Details
Tool
Apache JMeter
Test Type
Load Testing
Scenario
High concurrency (Black Friday simulation)
Target
Jumia Homepage




📊 Performance Test Summary
Metric
Value
Total Requests
~22,000+
Average Response Time
~97,000 ms
Median Response Time
~4,542 ms
75th Percentile
~16,450 ms
Minimum Response Time
142 ms
Maximum Response Time
~5,603,881 ms
Error Rate
0%


📈 Analysis
✅ Strengths
Zero request failures (0% error rate)
System remained operational under load
⚠️ Performance Issues
Extremely high average response time
Large variance in response times
Presence of severe latency outliers

🚨 Key Insight
The system is stable but experiences significant performance degradation under high load, indicating scalability limitations.

📄 Performance Report
Detailed results available in:
performance-tests/Performance Test Results.csv


🛠️ Recommendations
Optimize backend queries
Introduce caching/CDN
Implement load balancing
Monitor P95/P99 latency metrics

🌐 Web Automation Testing (Cypress)
📌 Overview
Cypress-based automation tests validate the Hydrogen Pay Dashboard Login Page.

🧪 Test Coverage
🔐 Login Page (/login)
✅ Positive Scenarios
Page loads successfully
Form elements are visible
Submit button enables correctly
❌ Negative Scenarios
Invalid credentials show error
User remains on login page

⚙️ Features
🧩 UI validation (inputs, buttons)
🔄 Form behavior testing
🚨 Error handling validation

🔐 Credential Management
Stored securely in:
cypress.env.json

Accessed via:
Cypress.env('HYDROGEN_EMAIL')
Cypress.env('HYDROGEN_PASSWORD')

✅ File is excluded from version control

🏗️ Configuration
module.exports = {
  e2e: {
    baseUrl: 'https://dashboard.hydrogenpay.com',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 10000,
  },
};


📁 Project Structure
├── api-tests/
│     ├── Hydrogen Payment Service.postman_collection.json
│     └── Mock Environment.postman_environment.json
       └── newman-report.html
├── performance-tests/
│     ├── Jumia Performance Test.jmx
│     └── Performance Test Results.csv
├── cypress/
│     └── e2e/login.cy.js
├── cypress.config.js
├── cypress.env.json (gitignored)
├── README.md


▶️ How to Run
🔌 API Tests (Newman)
Run the following command to execute the collection and generate an HTML report:
newman run "Hydrogen Payment Service.postman_collection.json" \
  -e "Mock Environment.postman_environment.json" \
  -r cli,htmlextra \
  --reporter-htmlextra-export report.html



⚡ Performance Tests
Open .jmx in JMeter
Run test
Analyze reports

🌐 Cypress Tests
npm install
npx cypress run


🧠 Test Strategy
This project demonstrates:
🔄 End-to-end QA coverage (API + UI + Performance)
🧪 Contract-based API testing using mock servers
⚡ Performance validation under peak load
🔐 Secure credential handling
📊 Automated reporting (Newman)

📊 Key Highlights
Full QA coverage across multiple system layers
Automated API tests with dynamic variables
Performance insights under realistic high-load conditions
UI automation for critical user flows
Structured reports for stakeholder visibility

📌 Notes
API tests use a mock server
Performance results are from a simulated environment
Credentials are securely managed and not committed

👩‍💻 Author
Hydrogen Pay QA Test Suite — API | Performance | Automation

⭐️ Support
If you find this useful, feel free to ⭐️ the repo or contribute improvements!

