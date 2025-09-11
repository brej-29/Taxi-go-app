<div align="center">
  <h1>🚕 Taxi Go - Ride Hailing App</h1>
  <p><i>A modern, feature-rich taxi booking application built with Next.js and Mapbox.</i></p>
</div>

<br>

<div align="center">
  <a href="https://github.com/brej-29/Taxi-go-app">
    <img alt="Last Commit" src="https://img.shields.io/github/last-commit/brej-29/Taxi-go-app">
  </a>
  <img alt="Next.js" src="https://img.shields.io/badge/Framework-Next.js-black">
  <img alt="React" src="https://img.shields.io/badge/Library-React-blue">
  <img alt="TypeScript" src="https://img.shields.io/badge/Language-TypeScript-blue">
  <img alt="Mapbox" src="https://img.shields.io/badge/Maps-Mapbox-blueviolet">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Styling-Tailwind%20CSS-teal">
  <img alt="Clerk" src="https://img.shields.io/badge/Auth-Clerk-yellowgreen">
</div>

<div align="center">
  <br>
  <b>Built with the tools and technologies:</b>
  <br>
  <br>
  <code>Next.js</code> | <code>React</code> | <code>TypeScript</code> | <code>Tailwind CSS</code> | <code>Mapbox GL JS</code> | <code>Clerk</code>
</div>

---

## **Table of Contents**
* [Overview](#overview)
* [Features](#features)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Usage](#usage)
* [Project Structure](#project-structure)
* [License](#license)
* [Contact](#contact)

---

## **Overview**

**Taxi Go** is a web-based taxi booking application designed to provide a seamless ride-hailing experience. It features an interactive map interface, real-time location services, address auto-completion, and dynamic route calculation. The project is built using a modern tech stack centered around Next.js for the frontend and Mapbox for geospatial functionalities.

---

## **Features**

-   **🔐 Secure User Authentication:** Seamless and secure user sign-up and sign-in process managed by Clerk, ensuring user data is protected.
-   **🗺️ Interactive Map Interface:** A real-time, dynamic map powered by Mapbox GL JS that centers on the user's current location upon loading.
-   **📍 Address Auto-Completion:** Integrated with Google Places API to provide intelligent address suggestions as users type their pickup and drop-off locations, reducing errors and speeding up the booking process.
-   **🚗 Ride Type Selection:** Users can choose from a variety of vehicle types (e.g., UberX, UberXL, Comfort) to suit their needs and budget.
-   ** Map Route & Fare Calculation:** Dynamically calculates and displays the optimal route on the map, along with the estimated travel distance and fare, providing transparency to the user before confirming a ride.
-   **💳 Flexible Payment Options:** A dedicated section for payment, designed to be extended with various payment gateways.
-   **📱 Responsive Design:** Built with Tailwind CSS, the application is fully responsive and provides a consistent user experience across desktops, tablets, and mobile devices.

-   <img width="1919" height="918" alt="image" src="https://github.com/user-attachments/assets/2929ff3a-2c30-4803-ae46-c4eb17afb354" /> <img width="1919" height="921" alt="image" src="https://github.com/user-attachments/assets/ae3b9b99-b39b-499e-9abf-09bf8f4c577d" />



---

## **Getting Started**

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

You will need the following installed on your machine:
*   Node.js (v18.x or later)
*   npm or yarn
*   A Mapbox access token
*   A Google Cloud Platform API key with the Places API enabled
*   Clerk API keys for authentication

### **Installation**

1.  Clone the repository:
    ```sh
    git clone https://github.com/brej-29/Taxi-go-app.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd Taxi-go-app
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```
4.  Create a `.env.local` file in the root of the project and add your environment variables:
    ```
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token
    NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    ```

### **Usage**

Run the development server:
```sh
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

---

## **Project Structure**

Here is an overview of the key directories and files in the project:

```
taxi-go-app/
├── app/
│   ├── (auth)/                   # Authentication-related pages (sign-in, sign-up)
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── _components/              # Reusable UI components for the application
│   │   ├── Booking/
│   │   │   ├── AutoCompleteAddress.tsx
│   │   │   ├── Cars.tsx
│   │   │   └── Cards.tsx
│   │   ├── Map/
│   │   │   ├── MapBoxMap.tsx
│   │   │   └── Markers.tsx
│   │   └── NavBar.tsx
│   ├── _context/                 # React Context providers for global state management
│   │   ├── DirectionDataContext.tsx
│   │   ├── SourceCordiContext.tsx
│   │   └── UserLocationContext.tsx
│   ├── favicon.ico/
│   ├── globals.css               # Global CSS styles
│   ├── layout.tsx                # Root layout for the application
│   └── page.tsx                  # Main homepage component
├── public/                       # Static assets (images, logos)
│   └── logo.png
├── .env.local.example            # Example environment variables
├── .gitignore
├── next.config.mjs               # Next.js configuration
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.ts
```

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**
If you have any questions or feedback, feel free to reach out via my [LinkedIn Profile](https://www.linkedin.com/in/brejesh-balakrishnan-7855051b9/).

