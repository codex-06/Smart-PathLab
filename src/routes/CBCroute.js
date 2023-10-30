const express = require('express');
const router = express.Router();
const data = require('../public/cbcData.json');

router.post('/', (req, res) => {
  console.log(data["White Blood Cell (WBC)"]);

  const requestBody = req.body;

  if (!requestBody || ! requestBody.report) {
    // Handle invalid or missing request body
    res.status(400).send('Invalid request body');
    return;
  }
  let resdata = {};

  for (const key in requestBody.report) {
    if (requestBody.report.hasOwnProperty(key)) {
      const parameterValue = requestBody.report[key];
      resdata[key] = parameterValue; // Assign the parameter value to the corresponding key in resdata
    }
  }

  res.send(resdata);
});

module.exports = router;
