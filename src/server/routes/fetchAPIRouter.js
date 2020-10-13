const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/main", async (req, res) => {
  const data = req.body.data;
  const fetchResult = await fetch(
    `https://api.pons.com/v1/dictionary?q=${data}&l=depl`,
    {
      method: "GET",
      headers: {
        "X-Secret": "XXX",
      },
    }
  )
    .then((fetchResult) => fetchResult.json())
    .catch((err) => console.log(err));
  console.log(fetchResult);

  res.send(fetchResult);
});

module.exports = router;
