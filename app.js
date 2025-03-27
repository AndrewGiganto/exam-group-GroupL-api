const express = require('express');
const app = express();
const examRoutes = require('./routes/exams'); // Ensure this matches the correct filename

app.use(express.json());

// Corrected variable name
app.use("/exams", examRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Group <your_group> API" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));