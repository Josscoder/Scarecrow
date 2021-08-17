const terminal = require("./terminal/Terminal");

const { Client, Intents, MessageEmbed } = require("discord.js");
const { token } = require("../resources/config.json");
const libquery = require("libquery");

const textFormat = require("./utils/TextFormat.js");
const dateTime = require("node-datetime");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

new terminal().start();

const now = dateTime.create();
now.format("m/d/Y H:M:S");
const date = new Date(now.now());

client
  .login(token)
  .then(() =>
    console.log(
      textFormat.DARK_AQUA +
        "[" +
        date +
        "]" +
        "[Scarecrow] " +
        textFormat.DARK_GREEN +
        "The BOT was successfully authenticated!"
    )
  );

client.on("ready", () => {
  console.log(
    textFormat.DARK_AQUA +
      "[" +
      date +
      "]" +
      "[Scarecrow] " +
      textFormat.DARK_GREEN +
      "This BOT has been enabled!"
  );

  client.user.setStatus("online");
  client.user.setActivity("UbblyClub Staff", { type: "WATCHING" });
});

client.on("messageCreate", async (msg) => {
  if (
    msg.content === "Hola" ||
    msg.content === "Hi" ||
    msg.content === "Olá" ||
    msg.content === "Ola"
  ) {
    msg.react("👋").then();

    return;
  }

  if (msg.content === "!author") {
    const authorEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Who is my author?")
      .setDescription("My Author is Josscoder")
      .setThumbnail("https://avatars.githubusercontent.com/u/49004785?v=4");

    msg.channel.send({ embeds: [authorEmbed] });
  }
});

module.exports = {
  name: "status",
  description: "Gives you information about our server.",
  run: async (client, message, args) => {
    try {
      await libquery.query("play.ubbly.club", 19132).then((data) => {
        let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setThumbnail(
            "https://cdn.discordapp.com/icons/746778901761753108/d0badb148ea6b4d156f18209a469c3c3.png?size=1024"
          )
          .setTitle("UbblyClub Status")
          .setDescription(`🌐 **Website**: [Store](https://store.ubbly.club/)`)
          .addField("Type", `${data.online || "Unknown"}`, true)
          .addField("Player Count", `${data.version}/${data.software}`, true)
          .addField("Version", `${data.max || "Unknown"}`, true)
          .addField(
            "Players",
            `${
              data.players.length < 50
                ? data.players.join(", ")
                : data.players.length > 50
                ? trimArray(data.players)
                : "No Players"
            }`
          )
          .setFooter(`play.ubbly.club`)
          .setTimestamp();
        message.channel.send(embed);
      });
    } catch (e) {
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setTitle(`❌ ERROR | An error occurred`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
      );
    }
  },
};

function trimArray(array, maxLength = 50) {
  if (array.length > maxLength) {
    const length = array.length - maxLength;

    array = array.slice(0, maxLength);
    array.push(` and **${length}** more...`);
  }

  return array;
}
