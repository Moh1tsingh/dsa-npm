const ListNode = require("./Node");

class LinkedList {
  //To create a linked list of nodes
  constructor(head = null) {
    if (!head) this.head = head;
    else {
      this.head = new ListNode(head);
    }
  }
  createNew(val) {
    if (!this.head) {
      this.head = new ListNode(val);
      return this.head
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new ListNode(val);
      return node.next
    }
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    return this.head.data;
  }
  getLast() {
    let node = this.head;
    if (!node) return node;
    while (node.next) {
      node = node.next;
    }
    return node.data;
  }
  clear() {
    this.head = null;
  }
  show() {
    let res = [];
    let node = this.head;
    while (node) {
      res.push(node.data);
      node = node.next;
    }
    return res;
  }
}

// let list = new LinkedList(69)
// list.createNew(23)
// list.createNew(25)
// list.createNew(27)
// list.createNew(29)
// console.log((list.getFirst()))

module.exports = LinkedList;
