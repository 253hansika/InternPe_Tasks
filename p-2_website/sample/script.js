console.log('start');

// function count() {
//   let count = 0;
//   document.getElementById('btn').addEventListener('click', function cb() {
//     console.log('clicked', ++count);
//   });
// }

setTimeout(function xyz() {
  console.log('inside set time out');
}, 3000);

fetch('https://www.netflix.com/in/').then(function netflix() {
  console.log('netflix works  ');
});

console.log('end');
