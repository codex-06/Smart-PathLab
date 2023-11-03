const express = require('express');

const app =express();



app.use(express.json());
// Import route files
const CBCRouter = require('./routes/CBCroute');

// Use the imported route files as middleware
app.use('/cbc', CBCRouter);


app.use(cors());

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
