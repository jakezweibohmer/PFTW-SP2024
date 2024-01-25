const jakesCar = {
    color: 'black',
    pistons: 8
};
console.log(jakesCar);

// mutate: add data (properties)
jakesCar.fuelInjection = true;
console.log(jakesCar);
jakesCar['4-wheel-drive'] = true;

// display single item with dot
console.log('jakes car is', jakesCar.color);

// display single item with array notation
console.log('is it 4 wheel drive?', jakesCar ['4-wheel-drive']);

// using toString (works with arrays too)
console.log(jakesCar.toString());
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());

// mutate: remove property
delete jakesCar.pistons;
console.log('jakes car without pistons', jakesCar);

// merge two objects
const basicJuke = {
    wheels: 4,
    color: 'red',
    doors: 4,
    make: 'Nissan'
};
const newJuke = Object.assign({}, basicJuke, jakesCar);
console.log('new juke', newJuke);

// object in arrays
const cars = [
    {make: 'Nissan ', model: 'Rouge ', color: 'orange ' },
    {make: 'Nissan ', model: 'Altima ', color: 'red ' },
    {make: 'Dodge ', model: 'Viper ', color: 'blue ' },
    {make: 'Volkswagon ', model: 'Beatle ', color: 'pink ' },
    {make: 'Ram ', model: '1500 ', color: 'black ' },
    {make: 'Chevy ', model: 'Blazer ', color: 'silver ' }
];
console.log('index 1 of cars color', cars[0].color);
const randomIdx = Math.round(Math.random() * cars.length - 1);
console.log('My car is a ' + cars [randomIdx].make + '' + cars [randomIdx].model + 'and it is the color ' + cars[randomIdx].color);
