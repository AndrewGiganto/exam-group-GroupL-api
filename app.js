const express = require('express');
const app = express();
const examsRoutes = require('./routes/exams');

app.use(express.json()); // Middleware to parse JSON
app.use('/exams', examsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
