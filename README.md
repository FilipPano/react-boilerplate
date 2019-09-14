# Documentation

### Project Setup

1. Run **`yarn install`** (Yarn is required on your local machine)

1. Create a **`.env`** file in the project’s root and copy & paste the following:

    ```
    NODE_PATH=src/
    ```

1. Run **`yarn start`** (This will start your project in dev environment)

---

### Folder Structure

We have a tree structure as following:

- **`assets`**
    > The project’s assets that are used throughout the application are stored here.

    - **`icons`**
    > Contains all icons as Components

    - **`resources`**
    > Contains all resources like images, videos etc.

- **`components`**
    > All components that are presentational (can be reused even in different applications) are stored here.

- **`containers`**
    > All components that contain the business logic of the application (are connected to the store or make sense only in this application) are stored here.

- **`global`**
    > All variables (global styles too) that are used throughout the application are stored here.

- **`pages`**
    > All components that represent a React Route are stored here.
    
    > All routes are stored inside the **`App.js`** file.

- **`services`**
    > All http requests and state management that the application should do is stored here.
    
    > Services are grouped based on the types of data and features that the application has (ex: **products, users**) and then further divided into sub-folders which contain a particular object or feature related to that type (ex: inside products we can have: **products-list, selected-product, favorite-products** etc.)
     
    > Each sub-folder contains the **reducer**, **actions**, **effects** (if needed), **api** (if needed) and models (if needed)

- **`store`**
    > Contains the **redux store**, **root reducer** and **root effect**.

- **`utils`**
    > Contains utility functions that can be used throughout the application.

---

### Conventions

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

- If a particular component is only used and only makes sense inside another component (For example we want to divide a component into multiple ones for readability) then we create another **`components`** folder inside the parent and create the component there.

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

    **Example:**
    ```
    /src
        /components
            /form-elements
                /Input
                /Select
                /Checkbox
                _styles.scss
    ```

- When exporting multiple functions or objects from one file, put them in a constant and then export the constant as default.

    **Example:**
    ```
    const HomePage = '/';
    const AboutPage = '/about';
    
    const Routes = { HomePage, AboutPage };
    
    export default Routes; 
    ```

- Absolute paths are used when importing something that is outside of the folder in which we are using the import (ex: importing assets inside a component or importing another component from the root components folder)

- Relative paths are used when importing something that is within the same folder (ex: importing a component’s styles or importing a child component)

- When importing global styles inside other sass files we use absolute paths as well: **`@import '~global/styles'`**

---

### Linting

This project uses Airbnb's eslint config.

Install and configure an ESLint plugin for your IDE to be able to see all eslint errors.

Code with eslint errors should not be pushed to repositories. For that reason a prehook is attached for checking for any eslint errors when committing.

Some of the airbnb's default rules are customized and disabled. If you find a certain rule to be invaluable and make the code worse, talk with the team to potentially get it disabled.

All customized rules are inside **`.eslintrc`**.

All files that should be ignored by eslint are specified inside **`.eslintignore`**.

---

### Dependencies

- **React Router** (page routing)

- **Redux** (storing application data)

- **Redux Saga** (async action watchers)

- **Sass** (styling)

- **CSS Modules** (styling, comes out of the box with react scripts 2+)

- **Axios** (http requests)

- **Autoprefixer** (no need to add webkit, moz or any prefixes when styling).
