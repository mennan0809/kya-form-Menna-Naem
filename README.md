# KYC Form – Frontend Assessment
**Candidate:** Menna Naem  

🔗 **Live Demo:** [https://kya-form-menna-naem.vercel.app](https://kya-form-menna-naem.vercel.app)

---

## 🚀 Project Overview

This is a **dynamic KYC (Know Your Customer) form** built in **React**. Instead of hardcoding fields, it reads a **JSON schema** and shows the right input type automatically. It also handles validation, multi-step navigation, and dark/light mode.

Basically, it’s a form that adjusts itself based on the questions you define.

---

## ✨ Features

- **Dynamic form fields** generated from a JSON schema  
- **Input types supported:**
  - Text input  
  - Text area  
  - Radio buttons  
  - Multi-choice checkboxes  
  - Dropdown  
  - Bonus: Date picker & file upload  
- **Validation:** required fields, min/max selections, age checks for date inputs  
- **Multi-step navigation:** break the form into manageable steps  
- **Persistent state:** saves progress in local storage  
- **UI/UX polish:** responsive, accessible, smooth stepper animations  
- **Submission handling:** shows a confirmation message and logs responses as JSON 

---

## 💡 How to Run Locally

1. Clone the repo:

```bash
git clone https://github.com/mennan0809/kya-form-Menna-Naem.git
cd kya-form-Menna-Naem
```

2. Install dependencies:
```bash
npm install
```

3. Start the app locally:
```bash
npm run dev
```
4. Open your browser at http://localhost:5173

---

## 🧠 My Thought Process

- **Keep it dynamic** – I designed the form to automatically adjust based on the JSON schema, making it easy to add new questions.

- **Validation separate from UI** – All validation logic lives in `lib/validation.js`, keeping the form components clean and focused.

- **User experience** – The multi-step layout, inline error messages, and local storage make it simple and frustration-free for users to fill out.

- **Reusable components** – `FieldRenderer`, `Dropdown`, and `CustomDatePicker` are built to be reusable in other forms or projects.

- **Accessibility** – Dark/light mode toggle, responsive design, and smooth stepper animations enhance both usability and visual appeal.

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS  
- **State Management:** React `useState` + custom `useLocalStorage` hook  
- **Validation:** Custom library (`lib/validation.js`)  
- **Deployment:** Vercel  
- **Version Control:** Git, GitHub
