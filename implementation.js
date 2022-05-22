let users = [];

//Send message to all connected clients
const notifyChat = (message) => {
  users.forEach((user) => {
    user.write(message);
  });
};

module.exports = {
  //Receive message from client joining
  join: (call, callback) => {
    users.push(call);
    notifyChat({ user: "Server", text: "new user joined ..." });
  },

  //Receive message from client
  send: (call, callback) => {
    notifyChat(call.request);
  },
};
