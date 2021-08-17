const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const { token } = require("../resources/config.json");

const terminal = require("./terminal/Terminal");
const messageCreateEvent = require("./event/MessageCreateEvent.js");

new terminal().start(client, token);
new messageCreateEvent().register(client);
