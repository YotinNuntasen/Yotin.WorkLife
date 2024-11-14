const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(express.json());
app.use(cors({
  origin: "*",
}))


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'allnew',
  port: '3306'
})

connection.connect((err) =>{
  if (err) {
    console.log('Error connecting to MySQL database = ', err)
    return;
  }
  console.log('MySQL successfully connected!');
})

app.post("/create", async (req, res) => {
  const {name_note, choiceSubject, choice_chapter, about_note, Time, 	dataFIle, choice_Time} = req.body;

  try{
    connection.query(
      "INSERT INTO data(name_note, choiceSubject, choice_chapter, about_note, Time, 	dataFIle, choice_Time) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name_note, choiceSubject, choice_chapter, about_note, Time, 	dataFIle, choice_Time],
      (err, results, fields) => {
        if (err) {
          console.log("Error while inserting a user into the database",err);
          return res.status(400).send();
        }
        return res.status(201).json({ message: "New user successfully created!"})
      }
    )
  }catch(err) {
    console.log(err);
    return res.status(500).send();
  }
})

app.get("/read", async (rea, res) => {
  try {
    connection.query("SELECT * FROM data", (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      res.status(200).json(results)
    })
  } catch(err) {
    console.log(err);
    return res.status(500).send();
  }
})

app.get("/read/single/:name_note", async (rea, res) => {
  const name_note = req.params.name_note;

  try {
    connection.query("SELECT * FROM data WHERE name_note = ?",[name_note], (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      res.status(200).json(results)
    })
  } catch(err) {
    console.log(err);
    return res.status(500).send();
  }
})

app.delete("/delete/:name_note", async (req, res) => {
  const name_note = req.params.name_note;

  try{
    connection.query("DELETE FROM data WHERE name_note = ? ",[name_note], (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      if (results.affectedPows === 0) {
        return res.status(404).json({ message: "No data with that name_note!"});
      }
      return res.status(200).json({ message: "Data deleted successfully!"});
    })
  } catch(err) {
    console.log(err);
    return res.status(500).send();
  }
})

app.listen(3005, () => console.log('Server is running on port 3005'))