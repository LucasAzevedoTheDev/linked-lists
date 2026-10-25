# Linked Lists

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat&logo=nodedotjs&logoColor=white)

A singly linked list built from scratch with JavaScript classes and run with Node.js. This project is part of [The Odin Project's](https://www.theodinproject.com/) JavaScript curriculum, focused on one of the most fundamental data structures: a chain of nodes where each one points to the next.

## Features

- **`Node` Class:** Holds a `value` and a `nextNode` reference, both `null` by default.
- **`append(value)` / `prepend(value)`:** Add a new node to the end or the start of the list.
- **`size()`:** Returns the total number of nodes in the list.
- **`firstNode()` / `tail()`:** Return the value of the first or last node, or `undefined` on an empty list.
- **`at(index)`:** Returns the value of the node at a given index, or `undefined` if that index doesn't exist.
- **`pop()`:** Removes the head node and returns its value.
- **`contains(value)` / `findIndex(value)`:** Check whether a value is in the list, or return the index of its first match (`-1` if it isn't there).
- **`toString()`:** Prints the list as `( dog ) -> ( cat ) -> ( parrot ) -> null`, or an empty string for an empty list.
- **ES Modules:** The `LinkedList` class lives in its own module and is imported into `main.js` for testing.

## Key Learnings

- **Nodes Hold Other Nodes:** Understanding that `nextNode` doesn't store a value or a position, it stores the whole next `Node` object, and that this reference is what links the chain together.
- **The List Only Knows Its Head:** The `LinkedList` itself stores a single property, the first node, and reaches every other node by following the links from there.
- **Walking the List:** Using a `currentNode` variable that starts at the head and moves forward with `currentNode = currentNode.nextNode` on each pass of a `while` loop.
- **Two Kinds of Walks:** Stopping *on* the last node (`currentNode.nextNode !== null`) when a method needs to stand on it, like `append`, versus visiting every node until falling off the end (`currentNode !== null`) when a method needs to check all of them, like `findIndex` and `toString`.
- **Order Inside the Loop:** Reading a node's value *before* moving to the next one, so the loop never tries to read `.value` from `null`.
- **Empty-List Edge Cases:** Tracing `Cannot read properties of null` errors back to methods that assumed the list had at least one node.

## How to Run Locally

```bash
git clone https://github.com/LucasAzevedoTheDev/linked-lists.git
cd linked-lists
node main.js
```

---
Developed by [Lucas Azevedo](https://github.com/LucasAzevedoTheDev)
