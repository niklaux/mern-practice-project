class HttpError extends Error {
  constructor(message, errorCode) {
    super();
        this.message = message; // Add a message property
        this.code = errorCode; // Add a "code" property
  }
}

module.exports = HttpError;

// Classes are a template for creating objects. They encapsulate data with code to work on that data.
// classes are essentially the blueprint for JS objects.
// The 'super' keyword is used to call the constructor of its parent class to access the parent's properties and methods.

// The "pseudocode" for the built-in Error class defined by JavaScript itself
// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = "Error"; // (different names for different built-in error classes)
//     this.stack = <call stack>; // non-standard, but most environments support it
//   }
// }
