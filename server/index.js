const express = require("express");
const connection  = require("./db/db");
const urlRoute = require("./routes/url");
const URL = require("./model/url");
const cors = require("cors")
const os = require('os');

// Get network interfaces
const networkInterfaces = os.networkInterfaces();

// Extract IPv4 address
const ipv4Address = networkInterfaces['Wifi']?.address; // Change 'Ethernet' to your network interface name

console.log(`Current IP Address: ${ipv4Address}`);

const app = express();
const PORT = 8000;
connection()

app.use(cors())
app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  console.log(entry);
  res.redirect(entry.redirectURL);
    
  } catch (error) {
    console.log('error redirecting', error)
    res.status(400).json({error: error});
  }
  
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
