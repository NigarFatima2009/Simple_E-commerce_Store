The Simple E-commerce Store app is a web application designed to provide users with a seamless online shopping experience. Built with React for the front end and an Express backend with MongoDB, this app allows users to browse products, add items to their cart, and manage their shopping cart. It also features a robust authentication system that ensures secure user registration and login.

Functionalities
User Registration and Login:

Register: New users can create an account by providing a username and password. The system checks for existing users to prevent duplicate accounts.
Login: Registered users can log in using their credentials. Upon successful login, users receive a token that is stored in local storage for authenticated requests.
Authentication: The app uses JWT (JSON Web Tokens) to manage user sessions, ensuring secure access to protected routes.
Product Listing:

Browse Products: Users can view a list of available products with details such as name, price, category, and image.
Product Categories: Products are categorized for easy browsing (e.g., men's, women's products).
Shopping Cart:

Add to Cart: Users can add products to their shopping cart.
View Cart: Users can view the contents of their cart, which displays all the products they have added.
Remove from Cart: Users can remove items from their cart if they change their mind.
Protected Routes:

Access to certain parts of the application, such as the product list and cart, is restricted to logged-in users only. This ensures that only authenticated users can manage their shopping activities.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- Git

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/Counter-app.git
    cd Counter-app
    ```

2. **Install dependencies**:
    If you are using npm:
    ```bash
    npm install
    ```
    Or if you are using yarn:
    ```bash
    yarn install
    ```

### Running the Project

1. **Start the development server**:
    If you are using npm:
    ```bash
    npm start
    ```
    Or if you are using yarn:
    ```bash
    yarn start
    ```

2. **Open your browser and navigate to**:
    ```
    http://localhost:3000
    ```

    This will open the application in development mode

https://github.com/user-attachments/assets/70a12b81-97cf-4cbf-b5d3-decdb0193e5f

https://github.com/user-attachments/assets/f0a881b0-d9ae-451f-bc54-690d95939d56

https://github.com/user-attachments/assets/4627a313-ee2f-41bd-9be9-ae520b1e5e5e

