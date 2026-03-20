// src/handlers/messageHandler.js
const schedule = require('../data/schedule.json');

module.exports = (client, msg) => {
    const text = msg.body.toLowerCase();

    // Reply to anyone who says "hi"
    if (text === 'hi') {
        msg.reply(`Hello 👋
1. Today's Classes
2. Help`);
    }

    // Reply for option 1
    else if (text === '1') {
        let reply = "📅 Today's Classes:\n";
        schedule.forEach(cls => {
            reply += `- ${cls.subject} at ${cls.time}\n`;
        });
        msg.reply(reply);
    }

    // Reply for option 2
    else if (text === '2') {
        msg.reply("Send '1' to see today's classes 📚");
    }

    // Default reply for anything else
    else {
        msg.reply("I only understand 'hi', '1', or '2'. Try one of these!");
    }
};