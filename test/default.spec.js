console.log = require('../index')();

console.log('testing 1');

setTimeout(() => {
  console.log('log after 3 seconds');
}, 1000);

console.log(`Process ID is : ${process.pid}`);

try {
  const a = 8;
  a = 89;
} catch (error) {
  console.log("Logging error", error);
}


let i = 0
const interval = setInterval(() => {
  console.log(`quick logs ${++i}`);

  if(i > 320) {
    clearInterval(interval);
  }
}, 10);