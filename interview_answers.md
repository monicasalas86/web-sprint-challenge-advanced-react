# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    A stateful component with have state, and a functional component doesnt need state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount gets called as soon as the render method is called the first time.
    componentWillUpdate get called before rendering

3. Define stateful logic.
    Stateful logic is logic that is built into a component that deals with state. It can handle a click event, for example.

4. What are the three step of creating a successful test? What is done in each phase?
    1. Arrange: sets up the test case, renders a react element to the virtual DOM
    2. Act: targets what we want to test from the DOM
    3. Assert: tests for expected outcome to being rendered