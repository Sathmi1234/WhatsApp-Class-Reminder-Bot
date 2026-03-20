// src/scheduler.js
const scheduleData = require('./data/schedule.json');

function startScheduler(client) {
    // Keep track of users who interacted
    const users = new Set();

    // Listen for incoming messages to add users
    client.on('message', (msg) => {
        users.add(msg.from); // add sender to set
    });

    // Check every minute for reminders
    setInterval(() => {
        const now = new Date();
        const currentTime = now.getHours().toString().padStart(2, '0') + ":" +
                            now.getMinutes().toString().padStart(2, '0');

        scheduleData.forEach(cls => {
            if (cls.time === currentTime) {
                // Send reminder to all users in the set
                users.forEach(user => {
                    client.sendMessage(user, `⏰ Reminder: ${cls.subject} class is starting now!`);
                });
            }
        });
    }, 60000);
}

module.exports = { startScheduler };