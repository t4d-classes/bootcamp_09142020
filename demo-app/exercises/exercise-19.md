# Exercise 19

1. Upgrade Car Tool to perform the append and delete car operations asynchronously.

// Here is the append car fetch call

fetch('http://localhost:3060/cars', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(car),
})

// Here is the delete car fetch call

fetch('http://localhost:3060/cars/2', {
  method: 'DELETE',
})

2. Ensure it works.

Bonus: Do the replace car as well.