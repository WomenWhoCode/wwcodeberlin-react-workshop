# Workshop Overview

### Step 0: Create a new App

```
git checkout 0-step
```

Let's start by creating a default configuration for our React app with `create-react-app`:

```
create-react-app buttons
cd buttons
npm install
npm start
```
This will start the app and you can open it in a browser window as `localhost:3000`.

Look around the files that were created by `create-react-app`.
Also inspect the result in the browser with the dev tools.

**Overview**:
```
|
|_ package.json // contains the script we have available and the dependencies
|_ public
    |_ index.html // the basic HTML file the browser will load first. It contains one element with an ID to mount the React App
|_ src
    |_ index.js // here the React App gets loaded in place of the div with the "root" ID
    |_ App.js // This is the main component for our React app
```
There are some more files, but those are related to styling and mobile bookmarks.


### Step 1: JSX and our first custom component

```
git checkout 1-step
```

Let's have a deeper look at our first React component in `App.js`:
Here we have a class component.
It implements a **lifecycle method** called `render`.
There are many more lifecycle methods available on React classes, each with their specific use cases.
Render is the only method that each React component must implement: It needs to return some **JSX**.
This is a special syntax close to HTML that allows us to define what the component should render to the DOM.


We will then add our first custom component to our App:
`<Button />`
While our very first component, App, is a class component, we will define the Button as a functional component.
This is a way to define components that are not very complex and do not need to use e.g. lifecycle methods or state.

### Step 2: Reusing components and Props

```
git checkout 2-step
```

To make components more reusable, we can provide some properties ("props") from the parent.
We set the value of the prop in the parent and the child component can then access and use that value.
This allows us to create slightly different variations of the same component.
In our case we want to create several Buttons with different colors.
Props are the default way to propagate information through our app:
The flow is always from the top level down to the children - via props.

### Step 3: Functions as Props

```
git checkout 3-step
```

In the last step we added a prop to our component.
It was relatively easy because it just accepts a color string.
Now we want to use more complex features and a prop that expects a function.
We want to use this to make our button component react to click events.

### Step 4: The special prop - children

```
git checkout 4-step
```

As with standard HTML elements, we can also nest our custom components.
In that case we get the special prop "children" that contains the elements that are nested inside the component.
We can then control where and how we want to render the child components.

### Step 5: Component State

```
git checkout 5-step
```

Besides props, we also have component state to hold values for our components.
The values of props are always controlled by the parent and can not be changed by the component itself.
State in the other hand is fully controlled by the component it is defined in.
But a value from state can become a prop for a child component...


### Step 6: Changing state

```
git checkout 6-step
```

Class components can hold state and to update the values in the state, we use the `setState` function.
We can also define methods on our class to manage the component state.
These class methods can also be passed as props to child components.
This is a way to allow the children to pass information back to the parent.

```
git checkout 6.1-step
```

### Step 7: Conditional Rendering

```
git checkout 7-step
```

One convenience functionality we can use are default props:
In a component we can chose some value for a prop that should be used by default in case not value is passed.
If we do not set a default, the prop's value will be `undefined`. This is fine in some cases, but we need to make sure to handle these cases well.

One way to deal with `undefined` props is conditional rendering:
JSX allows us to render components or HTML elements based on conditions.
This way we do not have to write complicated if statements to control what the rendered output from our components should be.
We can just check if our prop is "truthy" (`undefined` is falsy) and then render the related DOM node.



### Step 8: Component Composition

```
git checkout 8-step
```

We already used the `children` prop, but just with some text.
We can also nest our custom components, meaning we will have the inner component available in the `children` prop.


