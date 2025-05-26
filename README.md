# Overcomplicated Password Input
### A ridiculously overengineered password input component
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)

## How to Use?
This project is a great example of unnecessary complexity that goes to absurd lengths to avoid using the native `password` input type. Instead, it meticulously binds multiple events and implements some state management to track the real password while rendering only asterisks—all in pure Vanilla JavaScript.

However, but if you’re brave (or bored) enough to try it, follow these steps to get it running as a standalone PoC.

### Setup
1. Clone the repository to your local machine.
2. No installation or dependencies are required since this is built with Vanilla JS. Simply open the `index.html` file in your browser to see the magic of overcomplication in action.
3. Alternatively, serve the project on a local server (e.g., using `http-server` or any other tool) at `localhost:8080` for a proper testing environment.

### Debugging
If you want to debug this monstrosity, a `launch.json` configuration file is included for use with Visual Studio Code. To debug:
- Ensure your project is served at `localhost:8080`.
- Open the project in VS Code.
- Use the provided `launch.json` to start a debugging session.

### Implementation Details
Instead of using the straightforward `<input type="password">`, this component:
- The actual password is stored in a separate variable (passwordState).
- The input field displays asterisks (\*) instead of the real characters (mimicking a password field).
- A separate DOM element (uncensoredPasswordDiv) shows the uncensored password for debugging or display purposes.
- Key events like typing, backspace, delete, and cursor positioning are manually handled.
- Certain clipboard operations (like copy, cut, paste) are blocked using Ctrl key combinations.

While this approach offers granular control over the input behavior, it’s unnecessarily complex for most use cases.

**Note**: This is just a PoC to validate the technical feasibility of overengineering a simple input field. It is not designed to be imported as a library into other projects. If you wish to adapt or use this concept, you’ll need to manually integrate or modify the code to suit your needs, as direct importation is not supported.

## Why Did I Build This?
- I wanted to showcase my ability to turn a one-liner into a small mess of Vanilla JS.
- I wanted to confirm something like this is possible at all.
