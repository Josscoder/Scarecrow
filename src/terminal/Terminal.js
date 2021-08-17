const textFormat = require("../utils/TextFormat.js");
const dateTime = require("node-datetime");

class Console {
  start() {
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
        "Starting services..."
    );

    const stdin = process.openStdin();

    stdin.addListener("data", function (data) {
      switch (data.toString().trim()) {
        case "stop":
        case "kill":
          console.log(
            textFormat.DARK_AQUA +
              "[" +
              date +
              "]" +
              "[Scarecrow] " +
              textFormat.DARK_GRAY +
              "Services stopped correctly..."
          );
          process.exit(0);
          break;
      }
    });
  }
}

module.exports = Console;
