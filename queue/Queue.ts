import Node from "../node/Node.ts";

export class QNode<T> extends Node<T> {
  constructor(value: T, next: QNode<T> | null = null) {
    super(value, next);
  }
}

export default class Queue<T> {
  private front: QNode<T> | null;
  private rear: QNode<T> | null;

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value: T) {
    const temp = new QNode(value);
    if (this.rear === null) {
      this.front = this.rear = temp;
      return;
    }

    console.log(this.rear);
    this.rear.next = temp;
    this.rear = temp;
  }

  dequeue() {
    if (this.front === null) return;

    this.front = this.front.next;

    if (this.front === null) this.rear = null;
  }

  displayElements() {
    let curentElement = this.front;
    const arr: T[] = [];

    while (curentElement) {
      if (curentElement.value) {
        arr.push(curentElement.value);
      }
      curentElement = curentElement.next;
    }

    if (arr.length < 1) {
      console.log("Queue is empty");
    } else {
      console.log(arr.join("->"));
    }
  }
}
