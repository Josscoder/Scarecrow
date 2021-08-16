const { Client, Intents, MessageEmbed } = require("discord.js");
const { token } = require("../resources/config.json");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(token)
    .then(() => console.log('The BOT was successfully authenticated!'));

client.on('ready', () => {
    console.log('This BOT has been enabled!');
    client.user.setStatus('online');
    client.user.setActivity('UbblyClub Staff', { type: 'WATCHING' });
});

client.on('messageCreate', msg => {
    if (msg.content === '!author') {
        const authorEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Who is my author?')
            .setDescription('My Author is Josscoder')
            .setThumbnail('https://avatars.githubusercontent.com/u/49004785?v=4');

        msg.channel.send({ embeds: [authorEmbed] })

        return
    }

    if (msg.content === 'Hola' || msg.content === "Hi") {
        msg.react('👋').then();
    }
});