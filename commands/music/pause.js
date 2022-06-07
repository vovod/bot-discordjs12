const { checkSameRoom, noMucsicEmbed } = require('../../utils');

module.exports = {
    name: 'pause',
    category: 'music',
    aliases: ['pause'],
	description: 'Tạm dừng phát nhạc',
    run: async (client, message, args) => {
        if (checkSameRoom(message)) return;
        if (!client.player.isPlaying(message)) return message.channel.send(noMucsicEmbed());
        await client.player.pause(message);
        await message.react('⏸');
    }
};