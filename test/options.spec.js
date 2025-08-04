const simple_logger = require("../index");

console.log = simple_logger({
  logs_folder: `${process.cwd()}/simple-logs`,
  mode: "a",
});

console.log(`testing log in new folder with append mode ${Date.now()}`);
console.log(`Process ID is : ${process.pid}`);
