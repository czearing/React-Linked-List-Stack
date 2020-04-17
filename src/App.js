import React from "react";
import "./styles.css";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    console.log(this.top);
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPoint = this.top;
      this.top = newNode;
      this.top.next = holdingPoint;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      console.log("no value");
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPoint = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push("hello world");
myStack.push("hello");
myStack.push("hello");
myStack.push("hello world");
myStack.push("hello world");
myStack.peek();
myStack.pop();
console.log(myStack);
export default function App() {
  return <div className="App" />;
}
