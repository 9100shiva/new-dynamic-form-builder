# Dynamic Form Builder Application

## 📌 Project Overview

This is a Dynamic Form Builder Application built with **Angular 16**. It allows users to configure form fields dynamically, including text, number, email, and dropdown fields. Users can specify if a field is required and configure options for dropdown fields. The configured form can then be used to generate a fully functional form.

## 🚀 Features

* Add multiple form fields with customizable types (Text, Number, Email, Dropdown).
* Toggle field requirement using a stylish toggle switch.
* Configure dropdown options dynamically.
* Real-time validation for required fields and email fields.
* Save and load form configurations using a shared service.
* Generate and use the configured form dynamically.

## 🛠️ Technologies Used

* Angular 16
* Angular Reactive Forms
* Angular Router
* TypeScript
* CSS (Custom styling for form components)

## 📂 Project Structure

* **form-config.component**: Allows users to configure form fields.
* **generated-form.component**: Displays and submits the dynamically generated form.
* **form-data.service**: Manages form configurations between components.

## ⚡ Getting Started

### Prerequisites

* Node.js and npm installed on your system.
* Angular CLI installed globally.

### Installation

1. Clone this repository:

   ```bash
   git clone <your-repo-url>
   cd <your-repo-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

```bash
ng serve
```

* The application will be available at `http://localhost:4200`.

### Building the Application

```bash
ng build
```

## ✅ Usage Instructions

1. Go to the **Form Configuration** page.
2. Add fields by clicking "Add Field".
3. Set the field type (Text, Number, Email, Dropdown).
4. Toggle the "Required" switch for mandatory fields.
5. For dropdown fields, add options as needed.
6. Save the configuration.
7. Navigate to the **Generated Form** page to use the dynamically generated form.

## 🚀 Future Enhancements

* Support for more field types (Date, Password, etc.).
* Field reordering using drag-and-drop.
* Improved UI/UX with animations.