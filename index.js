// index.js
const express = require('express');
const { prismaClient } = require('@prisma/client');

const app = express();
const prisma = new prismaClient();
const PORT =3000;

// Middleware - teaches Express to read JSON request bodies
app.use(express.json());

// (endpoints go here)
app.get('/api/agencies', async (request, respon) => {
    try {
        const agencies = await prisma.agency.findMany();
        response.json(agencies);

    } catch(error) {
        console.error(error);
        respon.status(500).json({error:"Failed to fetch agencies"});
        
    }
})
app.listen(PORT, () => {
    console.log(`Sunu Gox API running on http://localhost:${PORT}`);
})