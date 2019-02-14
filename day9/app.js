
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

//INTERPOLATED
console.log('Hello I am a %s string!', '+');

// STYLED
console.log('%c I am some great text', 'font-size: 50px; background: orange;');

// WARING!
console.warn('OH NOOO');

// ERROR!
console.error('oh nooo!');

// INFO
console.info('crocodiles eat 3-4 people per year.');

// TESTING
console.assert(1 === 2, 'That is wrong!');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// CLEARING
console.clear();

// VIEWING DOM ELEMENTS
console.log(p);
console.dir(p);

// GROUPING TOGETHER
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// COUNTING 
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

// TIMING
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);