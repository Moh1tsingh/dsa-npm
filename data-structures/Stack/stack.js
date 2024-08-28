class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.stack.length === 0) throw "Stack is empty";
    return this.stack.pop();
  }

  top() {
    if (this.stack.length === 0) throw "Stack is empty";
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  show() {
    if (this.stack.length === 0) throw "Stack is empty";
    return this.stack;
  }
}

module.exports = Stack
