What is JSX, and why is it used?
Answer:JSX stands for JavaScript XML.JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.


What is the difference between State and Props?
Answer:  
State -> The Data is passed within the component only,Mutable ,The state can be used only with the state components/class component (Before 16.0),both read and write.

Props->The Data is passed from one component to another,Immutable,used with state and functional components,  read-only.

What is the useState hook, and how does it work?
Answer:The React useState Hook allows us to track state in a function component.
The useState() hook allows you to add state to functional components in React. It works by:

1. Initialize State: When you call useState(initialValue), it creates a state variable and an updater function.

const [count, setCount] = useState(0);
2. State is Preserved Across Renders: React remembers the state value between re-renders of the component. Each time the component renders, React keeps the latest value of count.

3. State Updates with the Updater Function: When you call setCount(newValue) React updates the state and it re-renders the component to reflect the new state value.

<button onClick={() => setCount(count + 1)}>Increment</button>
4. Triggers Re-render: React will re-render only the component where useState was used—ensuring your UI updates automatically when the state changes.

How can you share state between components in React?
Answer:Sharing state between components in React can be achieved through several methods, depending on the relationship between the components and the complexity of the state management required.
1. Lifting State Up:
2.Context API:
3. State Management Libraries
4. Custom Hooks:


How is event handling done in React?
Answer:In React, events are handled similarly to how they are handled in regular HTML. However, in React, event handling is done using JSX syntax, and React provides its own synthetic event system, which is compatible with most browser events.
