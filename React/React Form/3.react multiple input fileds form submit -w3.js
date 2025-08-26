import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

============================================== Explanation: setInputs(values => ({ ...values, [name]: value })); ===================================================
Certainly! Let's break down the line:

```jsx
setInputs(values => ({ ...values, [name]: value }));
```

### Context

- `setInputs` is a function from `useState` used to update the state.
- `values` represents the current state of the form inputs.
- `[name]` is a dynamic key that represents the name of the form field being updated.
- `value` is the new value for the form field.

### Example Breakdown

Consider a form with two input fields: "username" and "age". The initial state might look like this:

```jsx
const [inputs, setInputs] = useState({ username: '', age: '' });
```

### Scenario

Imagine the user is interacting with the form, and you want to update the "age" field.

1. **Initial State:**

   ```jsx
   inputs = {
     username: 'John',  // previously entered username
     age: '25'          // current value of age
   }
   ```

2. **User Enters a New Age:**

   - The user types `30` into the "age" input field.
   - This triggers the `handleChange` function, where `event.target.name` is `"age"` and `event.target.value` is `"30"`.

3. **Calling `setInputs`:**

   ```jsx
   setInputs(values => ({ ...values, [name]: value }));
   ```

   Here’s a step-by-step explanation of what happens inside `setInputs`:

   - **Current State (`values`):**
     ```jsx
     values = {
       username: 'John',
       age: '25'
     }
     ```

   - **`...values` Spread Operator:**
     - This creates a shallow copy of the current state:
       ```jsx
       { username: 'John', age: '25' }
       ```

   - **Dynamic Property `[name]: value`:**
     - Here, `[name]` is `"age"` and `value` is `"30"`.
     - This sets the `"age"` key in the copied object to `"30"`:
       ```jsx
       { username: 'John', age: '30' }
       ```

   - **Resulting State:**
     ```jsx
     {
       username: 'John',
       age: '30'
     }
     ```

### Summary

In this example, the line:

```jsx
setInputs(values => ({ ...values, [name]: value }));
```

- **Copies** the existing state (`values`).
- **Updates** the field specified by `name` with the new value.
- **Returns** a new state object with the updated value for the field.

This approach ensures that you only modify the specific field that changed while preserving all other existing state values.
