# React Learning Journey

![Project Logo](./src/components/images/logo.png)

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Navigation](#navigation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)


## Description

Welcome to my React Learning Journey repository! This project showcases my progress and learning experiences while mastering React, Redux, Parcel bundler, Tailwind CSS, and testing frameworks like Jest. It includes various components, state management with Redux, and robust testing to ensure code quality. The application is deployed on Vercel, demonstrating seamless deployment practices.

## Tech Stack

- **Frontend:**
  - React
  - React Router DOM
  - Redux & @reduxjs/toolkit
  - Tailwind CSS
  - Parcel Bundler

- **Testing:**
  - Jest
  - React Testing Library
  - Babel

- **Deployment:**
  - Vercel

- **Others:**
  - CORS Anywhere

## Features

- **Responsive Design:** Built with Tailwind CSS for a responsive and modern UI.
- **State Management:** Utilizes Redux for efficient state management across components.
- **Routing:** Implemented with React Router DOM for seamless navigation.
- **Lazy Loading:** Optimized performance with lazy loading of components.
- **Testing:** Comprehensive unit, integration, and end-to-end testing using Jest and React Testing Library.
- **Deployment:** Easily deployable to Vercel for live access.
- **CORS Handling:** Integrated `cors-anywhere` for handling CORS issues during development.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/hello-react.git
   cd hello-react

2. **Install Dependencies:**
    ```bash
    npm install

## Usage

1. **Start the Development Server:**
    ```bash
        npm start

    This will start the development server at http://localhost:1234

2. **Run Tests:**
    ```bash
        npm start

3. **Build for Production:**
    ```bash
        npm run build

## Navigation

The application consists of the following main sections:

-**Home:** Displays a list of restaurants with options to search and filter.
- **About Us:** Information about the creator or the project.
- **Contact Us:** Contact form or information.
- **Cart:** View and manage items added to the cart.
- **Grocery (Lazy Loaded):** Separate section for grocery items, loaded on demand for   performance optimization.

## Testing
This project includes comprehensive testing using Jest and React Testing Library.

- **Unit Testing:** Testing individual components and functions.
- **Integration Testing:** Testing the integration between components.
- **End-to-End Testing (e2e):** Ensuring the application works as expected from the user's perspective.

### Setting Up Tests
Ensure all dev dependencies are installed:
    ```bash
    npm install
Run tests using:
    ```bash
    npm test
Test coverage reports can be generated and viewed in the coverage directory.

## Contributing
Contributions are welcome! Please follow these steps:

1. **Fork the Repository.**

2. **Create a New Branch:**
    ```bash
    git checkout -b feature/YourFeature
3.**Commit Your Changes:**
    ```bash
    git commit -m "Add some feature"

4. **Push to the Branch:**
    ```bash
    git push origin feature/YourFeature

5. **Open a Pull Request.**
Please ensure your code follows the project's coding standards and passes all tests.
