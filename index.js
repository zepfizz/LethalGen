const { Client, RichEmbed } = require("discord.js");
const { config } = require("dotenv");
const { accounts } = require("./accounts.json");
const { accounts1 } = require("./accounts1.json");

const client = new Client({
    disableEveryone: true
})

usedCommandRecently = new Set();

config({
    path: __dirname + "/.env"
});

client.on("ready", () => {
    console.log("I'm reeeeeady!")

    client.user.setPresence({
        status: "streaming",
        game: {
            name: "Rewards",
            type: "STREAMING"
        }
    })
})

client.on("message", async message => {
    const prefix = "-";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "help") {
        const embed = new RichEmbed()
        .setTitle("Information:")
        .setColor(0xF1C40F)
        .setDescription("-nordvpn - Sends you NordVPN account!\n-minecraft - Sends you Minecraft account **SOON**")
        .setFooter(`by: zepfiz#0643`, message.author.bot.displayAvatarURL)
        .setThumbnail(message.member.user.displayAvatarURL)
        message.channel.send(embed);
    }

    if(message.content.startsWith(`${prefix}nordvpn`)) {
        if(message.channel.type == "text"){

            let result = Math.floor((Math.random() * accounts.length))

            message.author.send('Here is your account: \"' + accounts[result] + "\"\nCurrent NordVPN stock: **47**")
            .catch();
        }

    }

    if(message.content.startsWith(`${prefix}minecraft`)) {
        if(message.channel.type == "text") {
 
            let result = Math.floor((Math.random() * accounts1.length))
 
            message.author.send('Here is your account: \"' + accounts1[result] + "\"\nCurrent Minecraft stock: **3**")
            .catch()
        }
    }
    
})



client.login(process.env.TOKEN);