class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove extra spaces
    const sanitizedExpression = expression.replace(/\s+/g, '');

    // Check for invalid characters (allow only numbers, +, -, *, /, parentheses, and .)
    if (/[^0-9+\-*/().]/.test(sanitizedExpression)) {
      throw new Error("Invalid characters in expression");
    }

    try {
      // Use Function constructor to safely evaluate expression
      this.result = new Function(`return ${sanitizedExpression}`)();
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
