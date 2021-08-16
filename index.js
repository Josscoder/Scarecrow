const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
    console.log('This bot has been enabled!');

    client.user.setStatus('online');
});

client.on('message', msg => {
    console.log(msg.content)

    if (msg.content === 'ping') {
        msg.reply('Maxi, ire por ti en la noche AJAJAJAJAJA')
    }
});

client.login('ODQyMDgwMjg5MzQwNTIyNTM2.YJwGYg.ekKCezoTdkY8TE58AgXoQKc6LF0');