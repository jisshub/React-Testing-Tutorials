# React-Testing-Tutorials
https://www.youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd

[JEST vs RTL](#jest-vs-rtl)

[Types of Test](#types-of-test)

[What is Automated Test ?](#what-is-automated-test)

[Create a React Project With Typescript](#create-a-react-project-with-typescript)

[Running Tests](#running-tests)

[Anatomy of a test](#anatomy-of-a-test)

[Writing First Test](#writing-first-test)

[Test Driven Development](#test-driven-development)

[Testing react props](#testing-react-props)

[Jest Watch Mode](#jest-watch-mode)

[Filtering Tests](#filtering-tests)

[Grouping the tests](#grouping-the-tests)


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

## Create a React Project With Typescript

```bash
npx create-react-app my-app --template typescript
```

## Running Tests

```tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
- Here no need to import `test` and `expect` method since it is glabally provided by create-react-app.


```bash
npm test
```

## Anatomy of a test

- test() function takes 3 arguments.
- test(name, function, timeout)
- 1st argument is the test name used to identify the test.
- 2nd argument is a function that contains the expectations to test.
- 3rd argument is timeout which is an optional argument that specify how long to wait before aborting the test. Default timeout value is 5 seconds.


## Writing First Test

- Create a component called greet.
- Create a test file for the same.
- Add test name as 1st argument.
- Create an arrow function as 2nd argument.
- In arrow function, Create a virtual dom of the greet component against which we test our assertions.
- To create a virtual dom of the component, we use
*render()* method.
- Call render from `@testing-library/react`.
- Inject `Greet` component into `render` method.
- Next check text 'Hello' is present in Greet component.
- Pass text to expect method and check it is present in document.
- finally run the test.

**greet.test.tsx**

```tsx
import {render, screen} from '@testing-library/react';
import { Greet } from './greet';

test('greet renders correctly', ()=>{
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
});
```


### Ignoring case using regex

- Here we case of text by using regex. And we ignore the case while testing.

```tsx
test('greet renders correctly', ()=>{
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
});
```

## Test Driven Development

- TDD is a software development process where you write test before writing software code.
- Once the test is written, then write the code to ensure the test pass.

    1. Create tests that verify the functionality of a specific feature.
    2. Write software code that will run the tests sucessfully when re-executed.
    3. Refactor the code for optimization while ensuring the tests continue to pass.

- Also called *red-green testing* as all test go from a *red failed state* to a *green passed state*.


## Testing react props

**greet.tsx**

```tsx
type GreetProps= {
  name: string
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        Hello {props.name}
    </div>
  )
}
```

**greet.test.tsx**

```tsx
test('greet renders with a name', () => { 
    render(<Greet name={'jissmon'}/>)
    const textElement = screen.getByText('hello vishwas')
    expect(textElement).toBeInTheDocument()
 })
```

## Jest Watch Mode

- Watch mode is an option we can pass to jest asking to watch files that have changed since the last commit and execute test related only to those changed files.


## Filtering Tests

**test.only()** - run only this test
**test.skip()** - run other test but skip the test where skip method is called.

## Grouping the tests

We can wrap multiple tests in a `describe` block.

### describe function

*describe(name, function)*

- 1st argument is the group name.
- 2nd argument is a function that contains the expectations to test.

- We pass both tests into `describe` block.

```tsx
import {render, screen} from '@testing-library/react';
import { Greet } from './greet';

describe('first', () => {         
    test('greet renders correctly', ()=>{
        render(<Greet name='justin'/>);
        const textElement = screen.getByText('Hello justin');
        expect(textElement).toBeInTheDocument();
    });

    test('greet renders with a name', () => { 
        render(<Greet name='jissmon'/>)
        const textElement = screen.getByText('Hello jissmon')
        expect(textElement).toBeInTheDocument()
    });
});
```

**Note:** A test suite is a test file.

## Filename Conventions





https://www.youtube.com/watch?v=NEEtzkLn2Gc&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=6

