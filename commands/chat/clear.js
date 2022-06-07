module.exports = {
    name: 'clear',
    category: 'chat',
    description: 'Xóa tin nhắn',
    usage: '!clear <Số tin nhắn muốn xóa>',
    run: (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel
          .send(
            "Bạn phải có quyền quản lý tin nhắn",
          );
      }
      const  input = args[0];

      if (isNaN(input)) {
        return message.channel
          .send('Nhập số lượng tin nhắn muốn xóa')
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      }

      if (Number(input) < 0) {
        return message.channel
          .send('Điền một con số cụ thể')
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      }

      // add an extra to delete the current message too
      const amount = Number(input) > 100
        ? 101
        : Number(input) + 1;

      message.channel.bulkDelete(amount, true)
      .then((_message) => {
        message.channel
          // do you want to include the current message here?
          // if not it should be ${_message.size - 1}
          .send(`Bot đã xóa \`${_message.size}\` tin nhắn! :broom:`)
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      });
      }
}