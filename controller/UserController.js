let users = [];

const addUser = (userId, domain, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, domain, socketId });
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

const removeUserIDIsNull = () => {
  users = users.filter((user) => user.userId !== null);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  removeUserIDIsNull,
  users,
};
