// const array = ['foo', 'baz', 'bar']

// let result

// result = array.every(item => item.length === 3)

// result

function doSomethingWithPerson(person) {
  person.firstName
}

function doSomethingWithCar(car) {
  car.brand
}

function doSomethingWithEmployee(employee) {
  car.firstName
  car.salary
}

doSomethingWithPerson({ firstName: 'Alex', salary: 4200 })

doSomethingWithEmployee({ firstName: 'Alex' })

doSomethingWithPerson({ firstName: 'Alex' }) // person
doSomethingWithPerson({ firstName: 'Alex', salary: 4200 }) // employee
doSomethingWithPerson({ brand: 'Ferrari' }) // car
doSomethingWithPerson({ url: 'http://google.com' }) // site
doSomethingWithPerson({ x: 42 }) // money
doSomethingWithPerson({ isGood: false }) // vibe

const persons = [{ firstName: 'Alex' }] ///  person
const employes = [{ firstName: 'Alex', salary: 4200 }] ///  employee
