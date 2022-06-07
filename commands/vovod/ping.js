module.exports = {
    name: 'ping',
    category: 'vovod',
    aliases: ['p'],
    description: 'Xem độ trễ của bot!',
    usage: '!ping',
    run: (client, message, args) => {
        message.channel.send(`Ping của bạn là: \`${client.ws.ping}\` ms`)
    }
}