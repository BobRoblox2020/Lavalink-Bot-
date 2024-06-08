const config = require("../config.json");
module.exports = async (client) => {
client.poru.init(client)
client.setMaxListeners(10)
console.table(`${client.user.username} is ready!`);
setInterval(() => {client.user.setPresence({ activities: [{ name: `${client.config.prefix}help` }], status: 'online' })}, 5000);
};
