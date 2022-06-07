const { checkSameRoom, noMucsicEmbed } = require('../../utils');

module.exports = {
    name: 'stop',
    category: 'music',
    aliases: ['stop', 'huy'],
	  description: 'Tắt toàn bộ nhạc, yêu cầu vai trò: MODERATOR!',
    run: async (client, message, args) => {
    if (message.member.roles.cache.has('892794151979089990'))  {
        if (!client.player.isPlaying(message)) return message.channel.send(noMucsicEmbed());
        if (checkSameRoom(message)) return;
        await message.member.voice.channel.leave();
        await message.react('🛑');
    }
    else {
        message.channel.send('Chưa đủ quyền đâu :D');
    }
    }
};