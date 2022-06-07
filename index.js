const { Client, MessageEmbed, Util, Collection } = require('discord.js');
const client = new Client;
const { token } = require('./config.json');
const command = require('./handlers/command');
const { readdirSync } = require('fs');
const { Player } = require('discord-player');
const player = new Player(client, {
	ytdlDownloadOptions: { filter: "audioonly" },
});

//const levels = require('./levels')
//const mongo = require('./mongo');
//const messageCount = require('./message-counter');
//const keepAlive = require('./server.js');

client.player = player
//const welcome = require('./welcome');
const console = require('console');
client.on('ready', async () => {
	console.log(`Malphite on duty ${client.user.tag} !`);
	client.user.setPresence({
		activity: {
			name: "Malphite",
				},
		status: 'online'
			}
		)
	
	//welcome(client)

	//messageCount(client)

	//levels(client)

	/*await mongo().then((mongoose) => {
		try {
			console.log('Da dang nhap mongo')
		} finally {
			mongoose.connection.close()
		}
	})
	}
)*/

client.player.on('trackStart', (message, track) => message.channel.send(`🎶 Đang phát bài \`${track.title}\`...`));
client.player.on('trackAdd', (message, queue, track) => message.channel.send(`✅ Đã thêm \`${track.title}\` vào danh sách chờ!`));
client.player.on('playlistAdd', (message, queue, playlist) => message.channel.send(`📃Đã thêm \`${playlist.tracks.length}\` bài vào danh sách!`));

client.commands = new Collection();
client.aliases = new Collection();
client.categories = readdirSync("./commands/");

["command"].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
	message.member.roles.cache.has
	if (message.author.bot) return;
	const prefix = '!'
	if (!message.content.startsWith(prefix)) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
	if (cmd.length === 0) return;
	let command = client.commands.get(cmd);
	if (!command) command = client.commands.get(client.aliases.get(cmd));
	if (command) {
		if (command.category === 'music' && !message.member.voice.channel) return message.channel.send('Vào Voice Channels để sử dụng lệnh này!');
		command.run(client, message, args);
	}
})

//keepAlive();

client.login('YOUR TOKEN HERE');