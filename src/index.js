const { startBot } = require('./bot');
const { startScheduler } = require('./scheduler');

startBot().then(client => {
    startScheduler(client);
});