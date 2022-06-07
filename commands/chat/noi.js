const { getAudioUrl } = require ('google-tts-api');

module.exports = {
    name:'noi',
    aliases: ['noi', 'talk'],
    category: 'chat',
    description: 'Bắt Bot nói <vào Voice Channels để sử dụng>, yêu cầu vai trò: MODERATOR!',
    usage: '!noi <câu muốn bot nói>',
    run: async (client, message, args) => {
        if (message.member.roles.cache.has('892794151979089990')) {
            if (!args[0]) return message.channel.send('Vui lòng nhập gì đó để bot nói!');
            const string = args.join(' ');
            if (string.length > 200) return message.channel.send('Nhập ít chữ thôi!');
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) return message.reply('Phải vào Voice Channels để dùng lệnh này!');
            const audioURL = await getAudioUrl(string, {
                lang: 'vi',
                slow: false,
                host: 'https://translate.google.com',
                timeout: 2500,
            });
            try {
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play(audioURL);
                    dispatcher.on('finish', () => {
                        voiceChannel.leave();
                    });
                });
            }
            catch(e) {
                message.channel.send('Bot bị lỗi, thử lại sau!');
                console.error(e);
            };
        }
        else {
        message.channel.send('Chưa đủ quyền đâu :D');
        }
    },
};