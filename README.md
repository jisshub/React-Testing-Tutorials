# React-Testing-Tutorials
https://www.youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd

## JEST vs RTL

- **Jest** is a javascript testing framework.
- Jest is a test runner that finds test, runs the test, determines whether the tests are passed / failed and reports it back in a human readable manner.

- **React Testing Library(RTL)** provides virtual dom which we can use to interact with and verify the behaviour of a react component. 
- Testing library is a family of packages which helps test UI components.
- The core library is called **DOM testing library** and RTL is simply a wrapper around this core library to test React applications in an easier way.

## Types of Test

### 1. Unit Test

    - Testing individual block of an application such as a class or a function or a component.
    - Each unit or building block is tested in isolation, independent of other units.
    - Dependencies are mocked.
    - Run in a short amount of time and make it very easy to pinpoint failures.
    - Easy to write and maintain.

### 2. Integration Test

    - Testing a combination of units & ensuring they work together.
    - Take longer than unit tests.

### 3. End to End(e2e) Test

    - Testing entire application flow and ensuring it works as designed from start to finish.
    - Take longer as they cover most amount of code.


## What is Automated Test ?

Automated test is the one that throws error when actual output does not match the expected output. It will pass when the output is correct and provide meaningful feedback when it is not.

**Example:**

```js
const getFullName= (first, last) => {
    return `${first} ${last}`
}

const actualFullName = getFullName('Jissmon', 'Jose')
const expectedFullName = 'JissmonJose'

if (actualFullName !== expectedFullName) {
    throw new Error(
        `${actualFullName} is not equal to ${expectedFullName}!`
    )
}
```