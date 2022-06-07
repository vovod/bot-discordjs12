const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'anh',
    category: 'vovod',
    aliases: ['anh', 'avatar'],
	description: 'Xem avatar và tải',
    usage: '!anh [@tên người cần xem avatar]',
    run: (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
			const URL = member.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })
			const avatarEmbed = new MessageEmbed()
				.setImage(URL)
				.setURL(URL)
				.setTitle('Link ảnh (～￣▽￣)～')
			message.channel.send(avatarEmbed)
		}
}