# ShopEasy - E-Commerce Website
##Deploye:-
## Project Overview
ShopEasy is a modern e-commerce website built with React, Redux Toolkit, and Tailwind CSS. 
It provides product browsing, cart management, user authentication, and checkout functionality.

## Key Features
- Product listing with search & category filters
- Product detail pages with ratings & descriptions
- Shopping cart with quantity management
- User authentication (login/register/logout)
- Checkout process & order confirmation
- Responsive design
- Redux Toolkit for state management
- localStorage caching
- Protected routes
- Product slider & about section

## Technologies
React 18 | Redux Toolkit | React Router v6 | Tailwind CSS | Fake Store API
Authentication: localStorage (simulated)

## Installation
1. Clone the repo: `https://github.com/Shiakh0112/nua-software-engineer-4164-Assignment-product-fatching`
2. Navigate: `cd ecommerce-app`
3. Install dependencies: `npm run dev`
4. Start server: `npm start`
5. Open: `http://localhost:5173`

## Project Structure
- `components/` - Reusable UI
- `hooks/` - Custom hooks
- `pages/` - Pages
- `services/` - API calls
- `store/` - Redux store & slices
- `utils/` - Helpers & constants
- `styles/` - Global CSS

## Components
- Header: Navbar, cart count, user menu
- ProductCard: Product info, add to cart, rating
- ProductGrid: Product listing
- Cart: Item list, quantity & price management
- Checkout: Shipping, payment & order summary

## State Management
- authSlice: login/logout, user state
- cartSlice: cart items, quantity, price, localStorage sync
- productsSlice: product data, search & filters

## Authentication Flow
- Registration & login (localStorage)
- Protected routes with redirect
- User session management

## Shopping Cart Flow
- Add/update/remove items
- Quantity validation (1-10)
- Price calculation
- Cart clearing on checkout

## Responsive Design
- Mobile-first approach
- Flexible grids & touch-friendly UI
- Optimized images

## Performance
- Component memoization
- Debounced search
- Lazy loading images
- Code splitting & optimized re-renders

## Contact
- GitHub: https://github.com/Shiakh0112
- Email: khatikashfaq992@gmail.com

## License
MIT License
