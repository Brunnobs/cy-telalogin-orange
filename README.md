# 🚀 E2E Test Automation - OrangeHRM (Cypress)

## 📌 About the Project

This project contains automated End-to-End (E2E) tests using **Cypress** to validate authentication and user information update flows in the OrangeHRM system.

The automation covers:

- ✅ Successful login
- ❌ Failed login (invalid credentials)
- 📝 Personal information update
- 🎲 Dynamic data generation
- 🧱 Page Object Model structure

The main objective of this project is to demonstrate practical knowledge in E2E automation, organized test architecture, and maintainable test code.

---

## 🛠 Technologies Used

- Cypress
- JavaScript
- Node.js
- Chance (dynamic test data)
- Page Object Model (POM)
- Git & GitHub

---

## 📂 Project Structure

```
cypress/
  ├── e2e/
  │     ├── login.cy.js
  │     ├── userInfoUpdate.cy.js
  ├── fixtures/
  │     ├── UserData.json
  ├── pages/
  │     ├── loginPage.js
  │     ├── dashboardPage.js
  │     ├── menuPages.js
  │     ├── myinfoPage.js
cypress.config.js
package.json
```

---

## 🧪 Test Scenarios Covered

### 🔐 Login Tests

✔ Login with invalid credentials  
→ Validates error message and access restriction  

✔ Login with valid credentials  
→ Validates successful authentication  
→ Confirms dashboard access  

These tests ensure authentication reliability and proper access control behavior.

---

### 📝 User Information Update

✔ Access My Info section  
✔ Update personal details  
✔ Fill employee information  
✔ Update status fields  
✔ Save changes successfully  

This scenario validates form interactions, data persistence, and correct system behavior after updates.

Dynamic data is generated using Chance to simulate realistic user input and avoid repeated static values.

---

## ⚙️ Prerequisites

Make sure you have installed:

- Node.js (LTS recommended)
- npm

Check installation:

```
node -v
npm -v
```

---

## 📥 Installation

Clone the repository:

```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Navigate to the project folder:

```
cd YOUR-REPOSITORY
```

Install dependencies:

```
npm install
```

---

## ▶️ Running the Tests

Open Cypress in interactive mode:

```
npx cypress open
```

Run tests in headless mode:

```
npx cypress run
```

---

## 🎯 Project Goals

This project demonstrates:

- E2E test automation structure
- Login validation (positive and negative scenarios)
- Page Object Model implementation
- Use of fixtures for test data management
- Dynamic test data generation
- Organized and scalable automation design

---

## 👨‍💻 Author

QA Automation project developed for learning and portfolio purposes.
