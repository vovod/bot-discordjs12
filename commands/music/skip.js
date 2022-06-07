const { checkSameRoom, noMucsicEmbed } = require('../../utils');

module.exports = {
    name: 'skip',
    category: 'music',
    aliases: ['skip'],
	  description: 'Chuyển sang bài khác, yêu cầu vai trò: MODERATOR!',
    run: async (client, message, args) => {
    if (message.member.roles.cache.has('892794151979089990')) {
        if (checkSameRoom(message)) return;
        if (!client.player.isPlaying(message)) return message.channel.send(noMucsicEmbed());
        await client.player.skip(message);
        await message.react('⏭');
        }
    else {
        message.channel.send('Chưa đủ quyền đâu :D');
        }
    }
};