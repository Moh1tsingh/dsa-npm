const LinkedList = require('../Linked-List/LinkedList')

class Stack {
  constructor() {
    this.stack = new LinkedList()
  }

  push(value) {
    this.stack.createNew(value);
  }

  pop() {
    if (this.stack.size === 0) throw "Stack is empty";
    return this.stack.popLast();
  }

  top() {
    if (this.stack.size() === 0) throw "Stack is empty";
    return this.stack.getLast();
  }

  isEmpty() {
    return this.stack.size() === 0;
  }

  show() {
    if (this.stack.size() === 0) throw "Stack is empty";
    return this.stack.show();
  }
}

// const stk = new Stack()
// stk.push(29)
// console.log(stk.show())
// console.log(stk.pop())
// console.log(stk.show())

module.exports = Stack
