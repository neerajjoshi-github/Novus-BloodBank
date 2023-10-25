# NOVUS: Blood Donation Management Web App (Client)

## Overview

This is a client-side web application designed to help organizations efficiently manage blood donation data. This app allows organizations to keep track of their blood inventory, record donations from donors, and facilitate the distribution of blood to hospitals.

## Demo

Check out the live demo deployed on Vercel: [NOVUS-BLOODBANK](https://novus-blood-bank-client.vercel.app/)

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Run Locally](#run-locally)
- [Dependencies](#dependencies)

## Features

- **User Authentication**: Secure user authentication with JSON Web Tokens (JWT).
- **Responsive Design**: Optimized for both large screens and mobile devices.
- **Inventory Management**: Efficiently manage blood inventory for donors, hospitals, and organizations.
- **Ease of Use**: Easily add new inventories.
- **Styling**: Utilize modern and responsive UI design with Tailwind CSS.

## Screenshots

![Desktop View Screenshot](/public/readme/image-1.png)

## Run Locally

To get started with NOVUS, follow these steps:

1. Clone the Novus-BloodBank-Client repository to your local machine.

```bash
  git clone https://github.com/neerajjoshi-github/Novus-BloodBank-Client.git
```

2. Navigate to the client directory.

```bash
  cd Novus-BloodBank-Client
  npm install
```

3. Run `npm install` to install client-side project dependencies.

```bash
  npm install
```

4. Start the client server.

```bash
 npm run dev
```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the Novus Client.

6. **Backend Server Setup**: To complete the NOVUS Blood Donation Management Web App, you will need to set up a backend server. For detailed instructions and access to the backend server code, please visit our [Backend Server Repository](https://github.com/neerajjoshi-github/Novus-BloodBank-Server).

## Dependencies

The NOVUS web app relies on various libraries and packages for development and functionality. Here are the key client-side dependencies listed :

- **@reduxjs/toolkit**: Redux toolkit for client-side state management.
- **antd**: Ant Design for UI components.
- **axios**: HTTP client for making API requests.
- **lottie-react**: Library for rendering Lottie animations.
- **react**: The core library for building user interfaces.
- **react-dom**: Provides DOM-specific methods for React.
- **react-icons**: Icons library for React applications.
- **react-redux**: Official Redux bindings for React.
- **react-router-dom**: Routing library for React applications.
- **redux**: Predictable state container for JavaScript apps.

Please refer to the `package.json` file for the complete list of client-side dependencies.

## I hope you find this project interesting and useful. Thanks for checking it out!!
