module.exports = {
    name: 'hi',
    category: 'chat',
    aliases: ['hi'],
    description: 'Chào bot',
    usage: '!hi',
    run: (client, message, args) => {
                message.channel.send(`༼ つ ◕_◕ ༽つ Xin chào ${message.author} , chào mừng đến với ${message.guild.name}!!! Sử dụng lệnh !giup để biết thêm chi tiết!`)
    }
}