## React Boilerplate

### Project Setup

1. Run **`yarn install`** (yarn is required on your local machine)

1. Create a **`.env`** file in the project’s root and fill in the variables from **`.env-example`**

1. Run **`yarn start`** (this will start your project in dev environment)

#### Production
1. Run **`yarn build`** to create a production build. The final output will be located in a **`/build`** folder.

---

### Folder Structure

The project contains the following tree structure:

- **`assets`**
  > Contains the project’s assets that are used throughout the application.

  - **`images`**
  > Contains all images

- **`components`**
  > Contains all reusable components

- **`global`**
  > Contains all global variables and styles that are used throughout the application

- **`pages`**
  > Contains all components that represent a React Route.

- **`services`**
  > All global state (server and client) is stored here

  > The state is exposed via hooks to the components

- **`store`**
  > Contains the **redux store** for client side data management and **react-query cache** for server side data management

- **`utils`**
  > Contains utility functions that are used throughout the application

---

### Conventions

- This project follows functional paradigm and is built only with functional components using React hooks

- Each component is put into a folder named the same as we would like to call the component (ex: **NavLink**)

- The component is written in an **`index.js`** file and it’s styles are written as **`styles.module.scss`** (CSS Modules are used for styling)

- If there are additional files that are needed for the component (animations, tests) they are put into their own folders inside the component’s folder.

  **Example:**
    ```
    /NavLink
        /animations
            index.js
        /tests
            index.test.js
        index.js
        styles.module.scss
    ```

- If a particular component is only used and only makes sense inside another component (For example we want to divide a component into multiple subcomponents for readability) then we create another **`components`** folder inside the parent and create the component there.

  **Example:**
    ```
    /Header
        /components
            /HeaderPromo
                index.js
                styles.module.scss
        index.js
        styles.module.scss
    ```

- Multiple components that have something in common (styling or context) can be grouped into a folder that is named after the thing that they have in common and is written in lowercase.

  **Example:**
    ```
    /src
        /components
            /Divider
            /form-elements
                /Input
                /Select
                /Checkbox
            /Product
    ```

- If a group of components have some styles in common then those styles are created inside the folder as: **`_styles.scss`**

  These styles contain variables and mixins that are used by the components

- We can create an **index.js** as well to export all components from inside the folder

  **Example:**
    ```
    /src
        /components
            /form-elements
                /Input
                /Select
                /Checkbox
                _styles.scss
                index.js
    ```

- Use named exports instead of default exports

- Both absolute and relative paths are used depending on which one is shortest

- When importing global styles inside other sass files use absolute paths: **`@import '~global/styles'`**

---

### Linting

#### Eslint

This project uses Airbnb's eslint config and typescript-eslint.

Install and configure an ESLint plugin for your IDE to be able to see all eslint errors.

All customized rules are inside **`.eslintrc`**.

All files that should be ignored by eslint are specified inside **`.eslintignore`**.

#### Stylelint

Stylelint is used for linting the CSS.

Install a stylelint plugin in your IDE to be able to see all potential errors.

All rules can be found inside **.stylelintrc** file.

---

Code with linting errors should not be pushed to repositories. For that reason a pre-hook is attached that checks for any linting errors when committing.

If you find a certain rule to be invaluable and make the code worse, talk with the team to potentially get it disabled.

---

### Dependencies

- **react-router-dom** (page routing)

- **redux** (storing client side data)

- **react-redux** (react wrapper for redux)

- **@reduxjs/toolkit** (redux config / removes boilerplate)

- **react-query** (storing server side data)

- **axios** (http requests)

- **css-modules** (styling)

- **autoprefixer** (no need to add vendor prefixes when styling)

- **classnames** (convenient way to add multiple class names)
