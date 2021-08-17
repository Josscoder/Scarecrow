const { MessageEmbed } = require("discord.js");
const util = require("minecraft-server-util");

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
            .setThumbnail(
              "https://avatars.githubusercontent.com/u/49004785?v=4"
            );
          channel.send({ embeds: [authorEmbed] });

          break;
        case "!status":
          if (channel.name !== "commands" && message.author !== client.user) {
            message.reply("You can't use that command here ⚠️");

            return;
          }

          try {
            util
              .statusBedrock("play.ubbly.club")
              .then((response) => {
                const statusEmbed = new MessageEmbed()
                  .setColor("#279AF1")
                  .setThumbnail(
                    "https://cdn.discordapp.com/icons/746778901761753108/d0badb148ea6b4d156f18209a469c3c3.png?size=1024"
                  )
                  .setTitle("UbblyClub Status")
                  .setDescription(
                    "**Store:** https://store.ubbly.club/" +
                      "\n" +
                      "**Twitter:** https://twitter.com/ubblyclub/" +
                      "\n" +
                      "**Discord:** discord.gg/ubblyclub"
                  )
                  .addField(
                    "Player Count",
                    `${response.onlinePlayers}/${response.maxPlayers}`,
                    true
                  )
                  .addField("Version", `${response.version || "Unknown"}`, true)
                  .setFooter(`play.ubbly.club`)
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
