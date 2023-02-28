const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require(`./connectDB`);
const { ObjectId } = require(`mongodb`);
const app = express();
app.use(express.json());

const port = 8000;

app.listen(port, () => {
	console.log("listining on port 8000");
});

app.use(cors());

let db;

connectToDb((err) => {
	if (!err) {
		app.listen(port, () => {
			console.log(`server is runing on port: ${port}`);
		});
		db = getDb();
	} else {
		console.log(err);
	}
});

app.post(`/Clinet-info`, (req, res) => {
	const data = req.body;

	db.collection(`Clinet-info`)
		.insertOne(data)
		.then((result) => {
			res.status(201).json(result);
			console.log(`A new post request`);
		})
		.catch((e) => {
			res.status(500).json({ err: `${e}` });
		});
});
