const { MessageEmbed, Message } = require('discord.js');
const { stripIndent } = require('common-tags');
module.exports = {
    name: 'giup',
    aliases: ['giup', 'help'],
    category: 'vovod',
    description: 'Help commands',
    usage: '!giup [Tên lệnh]',
    run: async (client, message, args) => {
        if (!args[0]) return getAll(client, message);
        return getCMD(client, message, args[0]);
    }
};

function getAll(client, message) {
    const embed = new MessageEmbed()
        .setColor('DarkMagenta')
        .setAuthor('Dùng cú pháp !(dấu chấm than) + tên lệnh để sử dụng lệnh\nSử dụng lệnh !giup + tên lệnh bạn muốn dùng để biết thêm chi tiết!')
    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `- \`${cmd.name}\``)
            .join("     ");
    }

    const info = client.categories
        .map(cat => stripIndent`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);
    return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()
    const cmd = client.commands.get(input.toLowerCase() || client.commands.get(client.aliases.get(input.toLowerCase())));
    let info = `Không tìm thấy lệnh **${input.toLowerCase()}**`;
 
    if (!cmd) return message.channel.send(embed.setColor('RED').setDescription(info));

    if (cmd.name) info = `**Tên lệnh**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Tên gọi khác**: ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`;
    if (cmd.description) info += `\n**Chi tiết Lệnh**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Cách sử dụng lệnh**: ${cmd.usage}`;
        embed.setFooter(`Cú pháp: <> = bắt buộc, [] = không bắt buộc`);
    }

    return message.channel.send(embed.setColor('GREEN').setDescription(info));
}