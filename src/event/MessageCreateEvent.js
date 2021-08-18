const { MessageEmbed } = require("discord.js");
const util = require("minecraft-server-util");
const {
  name,
  store,
  twitter,
  discord,
  ip,
  port,
  thumbnail,
  color,
} = require("../resources/mcstatusconfig.json");

class MessageCreateEvent {
  register(client) {
    client.on("messageCreate", async (message) => {
      const channel = message.channel;

      switch (message.content) {
        case "Hola":
        case "Hi":
        case "Ola":
        case "Olá":
          message.react("👋").then();
          break;
        case "!author":
          if (channel.name !== "commands" && message.author !== client.user) {
            message.reply("You can't use that command here ⚠️");

            return;
          }

          const authorEmbed = new MessageEmbed()
            .setColor("#34EB89")
            .setTitle("My Author is Josscoder")
            .setDescription(
              "**Github:** https://github.com/Josscoder" +
                "\n" +
                "**Twitter:** https://twitter.com/Josscoder/" +
                "\n" +
                "**Discord:** Josscoder#9867"
            )
            .setThumbnail("https://avatars.githubusercontent.com/u/49004785")
            .setFooter("All rights reserved Jose Luciano Mejia Arias ©");
          channel.send({ embeds: [authorEmbed] });

          break;
        case "!status":
          if (channel.name !== "commands" && message.author !== client.user) {
            message.reply("You can't use that command here ⚠️");

            return;
          }

          try {
            util
              .statusBedrock(ip, { port: port })
              .then((response) => {
                const statusEmbed = new MessageEmbed()
                  .setColor(color)
                  .setThumbnail(thumbnail)
                  .setTitle(name + " Status")
                  .setDescription(
                    "**Store:** " +
                      store +
                      "\n" +
                      "**Twitter:** " +
                      twitter +
                      "\n" +
                      "**Discord:** " +
                      discord
                  )
                  .addField(
                    "Player Count",
                    `${response.onlinePlayers}/${response.maxPlayers}`,
                    true
                  )
                  .addField("Version", `${response.version || "Unknown"}`, true)
                  .setFooter(ip)
                  .setTimestamp();
                channel.send({ embeds: [statusEmbed] });
              })
              .catch((error) => {
                channel.send({
                  embeds: [
                    new MessageEmbed()
                      .setColor("RED")
                      .setTitle("🛑    The BOT was Crashed")
                      .setDescription(`\`\`\`${error.stack}\`\`\``),
                  ],
                });
              });
          } catch (e) {
            console.log(e);
          }

          break;
      }
    });
  }
}

module.exports = MessageCreateEvent;
