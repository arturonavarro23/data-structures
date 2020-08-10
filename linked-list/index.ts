import LinkedList from './LinkedList.ts';

type Car = {
  brand: string;
  color: string;
  model: string;
}

console.log('Linked list example');

const list = new LinkedList<Car>();

list.insertFirst({
  brand: 'Mazda',
  color: 'black',
  model: 'Mazda 3',
});

list.insertLast({
  brand: 'Mazda',
  color: 'silver',
  model: 'Mazda 2',
});

list.insertLast({
  brand: 'Chevrolet',
  color: 'orange',
  model: 'Chevy Monza',
});

list.removeFirst();
list.removeLast();

list.insertLast({
  brand: 'Nissan',
  color: 'silver',
  model: 'Aprio',
});

list.insertAt(0, {
  brand: 'Ford',
  color: 'yellow',
  model: 'Mustang',
})

list.insertAt(1, {
  brand: 'Ford',
  color: 'white',
  model: 'Eco Sport',
});


list.insertAt(3, {
  brand: 'Ferrari',
  color: 'red',
  model: 'Tributo',
});

console.log(list.allElements());

list.removeAt(3);

console.log(list.allElements());

list.removeAt(3);

console.log(list.allElements());

list.removeAt(0);

console.log(list.allElements());
