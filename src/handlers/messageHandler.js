const schedule = require('../data/schedule.json');

module.exports = (client, msg) => {
    const text = msg.body.toLowerCase();

    if (text === 'hi') {
        msg.reply(`Hello 👋
1. Today's Classes
2. Help`);
    }

    else if (text === '1') {
        let reply = "📅 Today's Classes:\n";
        schedule.forEach(cls => {
            reply += `- ${cls.subject} at ${cls.time}\n`;
        });
        msg.reply(reply);
    }

    else if (text === '2') {
        msg.reply("Send '1' to see today's classes 📚");
    }
};