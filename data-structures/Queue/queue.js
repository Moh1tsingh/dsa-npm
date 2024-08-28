class Queue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);
  }

  pop() {
    if (this.queue.length === 0) throw "Queue is empty";
    return this.queue.shift();
  }

  top() {
    if (this.queue.length === 0) throw "Queue is empty";
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  show() {
    if (this.queue.length === 0) throw "Queue is empty";
    return this.queue;
  }
}

module.exports = Queue