const os = require("os");

//Shows user information
const user = os.userInfo();
console.log(user);

//Shows how long the system has been running in seconds except 100 seconds per minute
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
