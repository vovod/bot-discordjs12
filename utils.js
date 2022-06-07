const checkSameRoom = (message) => {
    if (!message.member.voice.channel) return message.reply('Vào Voice Channels để sử dụng lệnh này!');
    if (!message.guild.me.voice.channelID || message.guild.me.voice.channelID == message.member.voice.channelID) return;
    return message.reply('Bạn phải cùng phòng với Bot mới nghe nhạc được chứ :D');
}

const { MessageEmbed } = require('discord.js');
const noMucsicEmbed = () => new MessageEmbed().setColor('RED').setDescription('🛑 | Bạn đang không nghe nhạc!');

 module.exports = {
     checkSameRoom,
     noMucsicEmbed,
 }