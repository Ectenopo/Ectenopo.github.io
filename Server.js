const express = require('express');
const fetch = require('node-fetch'); // Make sure to install node-fetch if using v2
const app = express();

app.get('/api/stream', async (req, res) => {
    const streamUrl = 'http://relay.broadcastify.com/your_stream_id.mp3'; // Replace with the actual URL

    try {
        const response = await fetch(streamUrl);
        
        // Set CORS headers so the browser accepts the response
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'audio/mpeg');

        // Pipe the audio stream directly to the frontend
        response.body.pipe(res);
    } catch (error) {
        res.status(500).send('Error fetching stream');
    }
});
