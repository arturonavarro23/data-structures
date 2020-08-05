
export class LinkedNode<T> {
  public value: T;
  public next: LinkedNode<T> | null;

  constructor(value: T, next: LinkedNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  public head: LinkedNode<T> | null = null;
  constructor() {}

  size() : number {
    let node = this.head;
    let total = 0;
    while(node) {
      total++;
      node = node.next;
    }

    return total;
  }

  firstNode() : LinkedNode<T> | null {
    return this.head;
  }

  lastNode() : LinkedNode<T> | null {
    let node = this.head;

    while (node?.next) {
      node = node.next;
    }

    return node;
  }

  insertFirst(node: T) {
    this.head = new LinkedNode<T>(node, this.head);
  }

  insertLast(node: T) {
    const newNode = new LinkedNode<T>(node);
    const lastNode = this.lastNode();
    if (!lastNode) {
      this.head = newNode;
    } else {
      lastNode.next = newNode;
    }
  }

  removeFirst() {
    this.head = this.head?.next || null;
  }

  removeLast() {
    let node = this.head;

    if (!node || !node.next) {
      this.head = null;
      return;
    }

    while(node?.next) {
      if (!node.next.next) {
        node.next = null;
      }
      node = node.next;
    }
  }

  clear() {
    return this.head = null;
  }

  private getNodeAt(index: number): LinkedNode<T> | null {
    let node = this.head;
    if (!node || index > (this.size() - 1)) return null;

    for (let i = 0; i < index; i++) {
        if (!node.next) return node;
        node = node.next;
    }
    return node;
  }

  getAt(index: number): T | null {
    const node = this.getNodeAt(index);
    return node?.value || null;
  }

  insertAt(index: number, node: T) {
    if (index > this.size() - 1) {
      console.log('there\'s any node at that position');
      return;
    }

    if(index === 0) {
      this.insertFirst(node);
      return;
    }

    const newNextNode = this.getNodeAt(index);
    const prevNode = this.getNodeAt(index - 1);
    if (prevNode) {
      prevNode.next = new LinkedNode<T>(node, newNextNode);
    }
  }

  removeAt(index: number) {
    if (index > this.size() - 1) {
      console.log('there\'s any node at that position');
      return;
    }

    if(index === 0) {
      this.removeFirst();
      return;
    }

    if(index === (this.size() - 1)) {
      this.removeLast();
      return;
    }

    const newNextNode = this.getNodeAt(index + 1);
    const prevNode = this.getNodeAt(index - 1);
    if (prevNode && newNextNode) {
      prevNode.next = newNextNode;
    }
  }

  allElements(): T[] {
    let node = this.head;
    const arr: T[] = [];

    while (node) {
        if (node.value) arr.push(node.value);
        node = node.next;
    }
    return arr;
  }
}

export default LinkedList;
