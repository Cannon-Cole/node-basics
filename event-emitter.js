const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//Order matters. Listen then emit.
//You can listen for the same thing multiple times
customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with id: ${id}`);
});
customEmitter.emit("response");
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});
customEmitter.emit("response", "cole", 3);
