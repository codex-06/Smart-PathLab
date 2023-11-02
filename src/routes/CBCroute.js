const express = require('express');
const router = express.Router();
const data = require('../public/cbcData.json');

router.post('/', (req, res) => {
  const requestBody = req.body;

  if (!requestBody || !requestBody.report) {
    return res.status(400).send('Invalid request body');
  }

  const { sex, age } = requestBody.info;
  const age_group = age < 18 ? '0-17' : age < 50 ? '18-49' : '50+';

  const resdata = {};

  for (const key in requestBody.report) {
    if (requestBody.report.hasOwnProperty(key) && data[key] && data[key]["What It Is"]) {
      const reference = data[key]["Reference Values"][sex][age_group];
      const paramvalue = requestBody.report[key];
      const paramobj = {
        description: data[key]["What It Is"],
      };

      if (paramvalue < reference["Lower Limit"]) {
        paramobj.result = "below limit";
        paramobj.effects = data[key]["Effects"]["Below Limit"];
        paramobj.causes = data[key]["Possible Causes"]["Below Limit"];
        paramobj.preventions = data[key]["Preventions"]["Below Limit"];
      } else if (paramvalue <= reference["Upper Limit"]) {
        paramobj.result = "ok";
      } else {
        paramobj.result = "above limit";
        paramobj.effects = data[key]["Effects"]["Above Limit"];
        paramobj.causes = data[key]["Possible Causes"]["Above Limit"];
        paramobj.preventions = data[key]["Preventions"]["Above Limit"];
      }

      resdata[key] = paramobj;
    }
  }

  res.send(resdata);
});

module.exports = router;
