const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/getNearbyHospitals', async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        const apiKey = 'UqpNflYascziqEPKQM4j~aMJ7qzoGWqu2v8JzbR30-Q~AlTGApZuoUjVA6l9pblKrnWG9TGdfkB-ZT6RXE8VKTOEXuLHL0BEyrmxFzSwABBO';

        const url = `https://dev.virtualearth.net/REST/v1/LocalSearch/?query=hospitals&userLocation=${latitude},${longitude}&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
