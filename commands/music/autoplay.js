const { noMucsicEmbed } = require('../../utils');

module.exports = {
    name: 'autoplay',
    category: 'music',
    aliases: ['autoplay', 'autop'],
	description: 'Tự chuyển bài tiếp theo khi đang nghe nhạc trên Youtube',
    run: async (client, message, args) => {
        const queue = await client.player.getQueue(message);
        if (!queue) return message.channel.send(noMucsicEmbed());

        await client.player.setAutoPlay(message, !queue.autoPlay);

        message.channel.send(`✅ Đã ${queue.autoPlay ? "Bật" : "Tắt"} tính năng này!`);
    },
};
