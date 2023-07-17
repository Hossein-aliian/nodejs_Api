const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.text());

app.post('/api/save-data', (req, res) => {
  const data = req.body;
  console.log(data);

fs.appendFile("C:/Users/mrali/OneDrive/Desktop/data.txt" , data  +' \n', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to save data');
    }
    
    res.send('Data saved successfully');
  });
});


app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}/api/save-data`)
);



// `user: ${data.user} && pass: ${data.pass}`