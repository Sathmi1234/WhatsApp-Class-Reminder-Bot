const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const handleMessage = require('./handlers/messageHandler');

async function startBot() {

    const client = new Client({
        authStrategy: new LocalAuth(),

        puppeteer: {
            executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        }
    });

    // 📌 QR Code generation
    client.on('qr', (qr) => {
        console.log('📱 Scan this QR code with WhatsApp:\n');
        qrcode.generate(qr, { small: true });
    });

    // ✅ When bot is ready
    client.on('ready', () => {
        console.log('✅ Bot is ready!');
    });

    // ❌ Error handling
    client.on('auth_failure', (msg) => {
        console.error('❌ Authentication failed:', msg);
    });

    client.on('disconnected', (reason) => {
        console.log('⚠️ Client was logged out:', reason);
    });

    // 💬 Message listener
    client.on('message', (msg) => {
        handleMessage(client, msg);
    });

    // 🚀 Start client
    await client.initialize();

    return client;
}

module.exports = { startBot };