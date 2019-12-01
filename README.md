## React Boilerplate

### Project Setup

1. Run **`yarn install`** (Yarn is required on your local machine)

1. Create a **`.env`** file in the project’s root and copy the variables from **`.env-example`**

1. Run **`yarn start`** (This will start your project in dev environment)

---

### Folder Structure

The project contains the following tree structure:

- **`assets`**
    > The project’s assets that are used throughout the application are stored here.

    - **`icons`**
    > Contains all icons as Components

    - **`resources`**
    > Contains all resources like images, videos etc.

- **`components`**
    > All presentational components are stored here

- **`global`**
    > All global variables and styles that are used throughout the application are stored here

- **`pages`**
    > All components that represent a React Route are stored here.
    
    > All routes are stored inside the **`App.js`** file.

- **`services`**
    > All http requests and global state management that the application has is stored here
    
    > Services are grouped based on the types of data and features that the application has (ex: **products, users**) and then further divided into sub-folders which contain a particular object or feature related to that type (ex: inside products we can have: **products-list, selected-product, favorite-products** etc.)
     
    > Each sub-folder contains the **reducer***, **actions***, **models** **effects**, **api** and **hook** related to that object/feature

- **`store`**
    > Contains the **redux store**, **root reducer** and **root effect**

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
            NavLik.test.js
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

- Absolute paths are used when importing something that is outside of the folder in which we are using the import (ex: importing assets or importing a service inside a component)

- Relative paths are used when importing something that is within the same folder (ex: importing a component’s styles or importing a child component)

- When importing global styles inside other sass files use absolute paths: **`@import '~global/styles'`**

---

### Linting

#### Eslint

This project uses a customized Airbnb eslint config.

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

- **redux** (storing application data)

- **react-redux** (react wrapper for redux)

- **redux-saga** (async redux middleware)

- **axios** (http requests)

- **css-modules** (styling, comes out of the box with react scripts 2+)

- **autoprefixer** (no need to add vendor prefixes when styling)

- **classnames** (convenient way to add multiple class names with CSS Modules)
