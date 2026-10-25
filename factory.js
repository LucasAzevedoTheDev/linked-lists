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
  pop() {
    if (this.head === null) {
      return undefined;
    }
    const first = this.head;
    this.head = this.head.nextNode;
    return first;
  }
  contains(value) {
    let currentNode = this.head;
    if (currentNode.value === value) {
      return true;
    }
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  }
  findIndex(value) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index += 1;
    }
    return -1;
  }
  toString() {
    let string = "";
    let currentNode = this.head;

    if (this.head === null) {
      return string;
    }
    string = `( ${currentNode.value} ) -> `;
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return (string += "null");
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
