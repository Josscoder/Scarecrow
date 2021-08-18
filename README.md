# Scarecrow

A Discord bot, written in js, helps with many essential tasks.

If you encounter any bugs, have suggestions or questions, [create an issue](https://github.com/Josscoder/Scarecrow/issues/new).

## Requirements

- [Nodejs 16.6.1+](https://nodejs.org/download/release/v16.6.1/)

## Setup

1) clone this repository in your device:
```sh
$ git clone https://github.com/Josscoder/Scarecrow.git
```
2) go to the repository folder and download the modules:
```sh
$ npm install discord.js
```
and after
```sh
$ npm i minecraft-server-util
```
3) ready, it's time to run our bot:
```sh
$ npm start
```
4) Remember to place the token of your BOT in the configuration that is in the following path "Scarecrow/src/resources/config.json"

## Terminal Commands

- end
- kill
- stop

These previous commands are used to turn off the bot.

## Discord BOT Commands

- !author (This command serves to show more about the creator, that is, about me)

- !status (This command is used to verify the status of the minecraft bedrock server that you are going to configure in the next section)

## Configure Minecraft Bedrock Server to show

1) Open the file "mcstatusconfig.json" is in the following path: "/Scarecrow/src/resources/mcstatusconfig.json"
2) Now follow the following indications
```sh
{
  "name": "UbblyClub", # Here you put the name of the server
  "store": "https://store.ubbly.club/", # Here you put the store link of the server
  "twitter": "https://twitter.com/UbblyClub", # Here you put the twitter link of the server
  "discord": "discord.gg/ubblyclub", # Here you put the discord link of the server
  "ip": "play.ubbly.club", # Here you put the ip of the server
  "port": 19132, # Here you put the port of the server
  "thumbnail": "", # This is optional, here you put the server image or another one you want
  "color": "#34EB89" # This is the color that will be in the embed, in the following link you can select a color
  }
```

https://htmlcolors.com/google-color-picker
