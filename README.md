# Admin Dashboard for E-commerce, with React Js.

## visit with the [Live Link ](https://admin-dashboard-v01.netlify.app/).

## Feature in the app

- it has many pages

  - login page
  - register page
  - dashboard page
  - 404 error page

- in dashboard page has so many component
  - dashboard overview (admin can see his full overview in the component with cards graph and table. )
  - in customer-list components (admin can see all customers and there activity.)
  - in add-customer components (admin can add new customer.)
  - in product-list components (admin can see product view in table and from here he/she also can edit and delete product.)
  - in product-grid components (admin can see product in card-view and from here he/she also can edit and delete product.)
  - in add-product components (admin can add new product and upload product image.)
  - in order-list components (admin can see orders view in table and from here he/she can see status of order also can delete product.)

## uses library

- tailwind css

```
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

```

```
add the code in 'tailwind.config.cjs'

----------------------------------

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```
also add the code in 'index.css'
-------------------------------

@tailwind base;
@tailwind components;
@tailwind utilities;
```

- ant-design

```
npm i antd
```

- react-router-dom

```
npm i react-router-dom
```

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

###

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Note: the hole project create run and build with vite.js**

## Thank You for visiting this

**Sifat Fahimul**

I
