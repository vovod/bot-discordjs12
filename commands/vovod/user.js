const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'user',
    category: 'vovod',
	description: 'Xem Thông tin thành viên',
    aliases: ['info', 'userinfo'],
    run: async (client, message, args) => {
        const presence = message.author.presence.activities.length ?message.author.presence.activities.filter(x=>x.type === "PLAYING") : null;
        const { guild } = message
        const member = guild.members.cache.get(message.author.id)

            const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Thông tin thành viên')
            .setURL('https://discord.js.org/')
            .setAuthor(`${message.author.tag}`)
            .setThumbnail(message.author.avatarURL())
            .addFields(
                { name: 'Vai trò lớn nhất', value: `${member.roles.hoist}` },
                { name: '👀Trạng thái', value: `${message.author.presence.status}`, inline: true },
                { name: '🎮Hoạt động', value: `${presence && presence.length ? presence[0].name : 'None'}`, inline: true },
            )
            .setTimestamp()
            .setFooter('Wish you have a good time here!');
        
            message.channel.send(embed);
        }
}