import express, { json } from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello NLW 5!' });
});

app.post('/users/:id', (req, res) => {
    return res.json({ message: 'User was created successfully!'})
});

app.listen(3333, () => console.log('Server is running on port 3333...'));