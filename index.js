const { addDomainIPAddress, domain } = require("./controller/DomainController");
const {
  addUser,
  users,
  removeUserIDIsNull,
} = require("./controller/UserController");

const server = require("http").createServer();
const options = {
  cors: true,
  origin: "*",
};
const io = require("socket.io")(server, options);

io.on("connection", (socket) => {
  socket.on("addUser", ({ userId, domain }) => {
    addUser(userId, domain, socket.id);
    removeUserIDIsNull();
    io.emit("getUsers", users);
  });

  socket.on("addDomainIp", ({ domainName, ipAddress }) => {
    addDomainIPAddress(domainName, ipAddress, socket.id);
    io.emit("getDomains", domain);
  });
});

const port = process.env.PORT || 5001;

server.listen(port);
