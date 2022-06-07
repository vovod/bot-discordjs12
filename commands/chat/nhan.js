module.exports = {
    name: 'nhan',
    category: 'chat',
    aliases: ['nhan', 'say'],
    description: 'Bắt bot nhắn tin, yêu cầu vai trò: MODERATOR!',
    usage: '!nhan [Câu muốn bot nhắn]',
    run: (client, message, args) => {
        if (message.member.roles.cache.has('892794151979089990')){
            if (message.deletable) message.delete()
			message.channel.send(args.join(' '))
        } 
        else {
            message.channel.send('Chưa đủ quyền đâu :D');
        }
    }
};