import Queue from "./Queue.ts";

const q = new Queue<number>();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.displayElements();