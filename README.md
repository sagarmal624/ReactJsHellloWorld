
# Slides:    http://slides.com/sagarmalshankhala/deck#/6
# React Js

# Table of Content

What is react?and its feature

Components

Props and State

Communication between component

Component life cycle

Event Handling


# What is React?
React is a JavaScript library for creating user interfaces.

# Good thing about ReactJS:- 

# THE GOOD:
React.js is extremely efficient: React.js creates its own virtual DOM where your components actually live.

It makes writing Javascript easier: React.js uses a special syntax called JSX, which allows you to mix HTML with Javascript. 

It gives you out-of-the-box developer tools: When you start your journey with React.js, do not forget to install official React.js chrome extension.

It’s awesome for SEO: One of the biggest issue with Javascript frameworks is that they are not search engine friendly.

UI Test Cases: It is extremely easy to write UI test cases because the virtual DOM system implemented entirely in JS.



# THE BAD:

* React.js is only a view layer.

* Integrating React.js into a traditional MVC framework such as rails would require some configuration (i.e., substituting erb with React.js).

* There is a learning curve for beginners who are new to web development.


# WHY YOU SHOULD USE REACT.JS

* React.js works great for teams, strongly enforcing UI and workflow patterns.

* The user interface code is readable and maintainable.

* And also, there is now a lot of demand for developers with ReactJS experience.


# Components

React is all about components. You need to think of everything as a component

# How to declare React Components


```javascript
1: ES5 React.CreateClass


var Profile = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.bio}</p>
      </div>
    );
  }
});

```

```javascript
2: ES6 Class Components 
​class Profile extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>
          {this.props.bio}
        </p>
      </div>
    );
  }
}
```
```javascript
3. Functional Components

const Profile = props => {
  return (  
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>;
  );
};

```


# PROPS

This simply is shorthand for properties. Props are how components talk to each other. If you’re at all familiar with React then you should know that props flow downwards from the parent component.

There is also the case that you can have default props so that props are set even if a parent component doesn’t pass props down.

When we need immutable data in our component, we can just add props to reactDOM.render() function


# State

State is used for mutable data, or data that will change. setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

# Demo: Now Time to show something Code

# Component Life Cycle

* componentWillMount is executed before rendering, on both the server and the client side.

* componentDidMount is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.

* componentWillReceiveProps is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.

* shouldComponentUpdate should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.

* componentWillUpdate is called just before rendering.

* componentDidUpdate is called just after rendering.

* componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.


* How to Handle Event In ReactJs

onClick,OnChange........
Demo


