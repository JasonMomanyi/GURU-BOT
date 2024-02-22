const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    // QR code generated
});

client.on('ready', () => {
    console.log('Client is ready!');
    updateBio();
});

client.initialize();

async function updateBio() {
    const kenyaTime = new Date().toLocaleString('en-US', {
        timeZone: 'Africa/Nairobi'
    });
    const bio = `JASON MOMANYI𓅃c2024: ${kenyaTime}`;
    
    try {
        await client.updateProfile({ status: bio });
        console.log('Bio updated successfully:', bio);
    } catch (error) {
        console.error('Error updating bio:', error);
    } finally {
        // Disconnect client
        await client.destroy();
    }
}
