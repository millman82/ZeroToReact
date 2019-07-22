# Notifications Context Exercise

In this exercise we will move our notification item storage from state in `index.tsx` to a React Context provider.
This is overkill for the scale of this small project, but in a larger scale app our notifications could be added to and managed in multiple ways.

## Steps

### Step 1

Use the `React.createContext` function to create a context for storing `INotificationItem`s.

### Step 2

Create a Provider wrapper that holds the values in state. It should also provide remove and add functions.

### Step 3

Use the context provider to wrap the component tree in `index.tsx`.

### Step 4

Use the context consumer to retrieve the add function in `AddNotification`.

### Step 5

Use the context consumer to retrieve the notifications and remove function in `NotificationList`.

## References

- [React Docs](https://reactjs.org/docs/context.html)
- [Updating Context from a Nested Component](https://reactjs.org/docs/context.html#updating-context-from-a-nested-component)
