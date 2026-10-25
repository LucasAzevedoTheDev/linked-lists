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
list.prepend("mouse");
console.log(list.size());
console.dir(list, { depth: null });
