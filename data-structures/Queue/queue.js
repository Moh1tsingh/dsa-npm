const LinkedList = require("../Linked-List/LinkedList");

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  push(value) {
    this.queue.createNew(value);
  }

  pop() {
    if (this.queue.size() === 0) throw "Queue is empty";
    return this.queue.popFirst();
  }

  top() {
    if (this.queue.size() === 0) throw "Queue is empty";
    return this.queue.getFirst();
  }

  isEmpty() {
    return this.queue.size() === 0;
  }

  show() {
    if (this.queue.size() === 0) throw "Queue is empty";
    return this.queue.show();
  }
}

// const q = new Queue
// q.push(34)
// console.log(q.show())
// console.log(q.pop())
// console.log(q.show())

module.exports = Queue;
