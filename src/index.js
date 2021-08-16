const { Client, Intents, MessageEmbed } = require("discord.js");

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

    if (msg.content === 'ping2') {
        msg.reply('Legend donde te sentaste')
    }

    if (msg.content === 'author') {
        const embed = new MessageEmbed()
            .addField('Something One', 'Some content', true)
            .addField('Something Two', 'Some content Two', true)
            .addField('Something Three', 'Some content Three', false)
            .setAuthor('Josscoder', 'https://avatars.githubusercontent.com/u/49004785?v=4');
        msg.channel.send(embed);
    }
});

client.login('ODQyMDgwMjg5MzQwNTIyNTM2.YJwGYg.ekKCezoTdkY8TE58AgXoQKc6LF0');