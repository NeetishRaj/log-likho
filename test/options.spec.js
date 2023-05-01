const create_logger = require('../index');

console.log = create_logger({
  logs_folder: `${process.cwd()}/logger`,
  mode: "a",
})

console.log(`testing log in new folder with append mode ${Date.now()}`);
console.log(`Process ID is : ${process.pid}`);
