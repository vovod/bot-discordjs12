const { MessageEmbed } = require('discord.js');
const { noMucsicEmbed } = require('../../utils');
module.exports = {
    name: 'nowplaying',
    category: 'music',
    aliases: ['now', 'np'],
	description: 'Xem bài hát đang phát',
    run: async (client, message, args) => {
        if (!client.player.isPlaying(message)) return message.channel.send(noMucsicEmbed());
        const track = await client.player.nowPlaying(message);
        const progressBar = await client.player.createProgressBar(message);
        const timeCode = await client.player.getTimeCode(message);
        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`🎵 | Đang phát:\n \`${track.title}\` của \`${track.author}\`\n\n${progressBar} [${timeCode.current} / ${timeCode.end}]`);
        message.channel.send(embed);
    }
};