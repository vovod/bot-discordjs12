const { checkSameRoom } = require('../../utils');

module.exports = {
    name: 'play',
    category: 'music',
    aliases: ['phat'],
	description: 'Phát nhạc',
    usage: '!play <Tên bài muốn nghe>',
    run: async (client, message, args) => {
        if (checkSameRoom(message)) return;
        await client.player.play(message, args.join(' '), true);
    }
};