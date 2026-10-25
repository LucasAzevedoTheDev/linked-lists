class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }
  size() {
    let counter = 0;
    if (this.head === null) {
      return counter;
    }
    let currentNode = this.head;
    counter = 1;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      counter += 1;
    }
    return counter;
  }
  firstNode() {
    if (this.head === null) {
      return undefined;
    }
    return this.head.nextNode;
  }
  tail() {
    if (this.head === null) {
      return undefined;
    }
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  at(index) {
    if (this.head === null) {
      return undefined;
    }

    let currentNode = this.head;
    if (index === 0) {
      return currentNode;
    }

    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.nextNode;
      counter += 1;
      if (currentNode === null) {
        return undefined;
      }
    }
    return currentNode;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("bird");
list.prepend("horse");
// console.log(list.firstNode());
// console.log(list.size());
// console.log(list.tail());
console.log(list.at(2));
// console.dir(list, { depth: null });
