const { checkSameRoom, noMucsicEmbed } = require('../../utils');

module.exports = {
    name: 'unpause',
    category: 'music',
    aliases: ['unpause', 'unp', 'resume'],
	  description: 'Tiếp tục phát nhạc',
    run: async (client, message, args) => {
        if (checkSameRoom(message)) return;
        if (!client.player.isPlaying(message)) return message.channel.send(noMucsicEmbed());
        await client.player.resume(message);
        await client.player.pause(message);
        await client.player.resume(message);
        await message.react('▶');
    }
};