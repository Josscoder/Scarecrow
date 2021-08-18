const textFormat = require("../utils/TextFormat.js");
const dateTime = require("node-datetime");
const { token } = require("../resources/config.json");

class Terminal {
  start(client) {
    const now = dateTime.create();
    now.format("m/d/Y H:M:S");
    const date = new Date(now.now());

    console.log(
      textFormat.DARK_AQUA +
        "[" +
        date +
        "]" +
        "[Scarecrow] " +
        textFormat.DARK_GRAY +
        "Starting..."
    );

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

    const stdin = process.openStdin();

    stdin.addListener("data", function (data) {
      switch (data.toString().trim()) {
        case "stop":
        case "kill":
        case "end":
          console.log(
            textFormat.DARK_AQUA +
              "[" +
              date +
              "]" +
              "[Scarecrow] " +
              textFormat.DARK_GRAY +
              "Stopped successfully..."
          );
          process.exit(0);
          break;
      }
    });
  }
}

module.exports = Terminal;
