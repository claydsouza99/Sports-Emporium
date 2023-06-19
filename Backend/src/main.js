import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";

const App = express();
App.use(cors());

async function adduser(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  const userinfo = db.collection("user");
  let inputDoc = {
    name: req.query.name,
    username: req.query.username,
    email: req.query.email,
    phoneno: req.query.phoneno,
    gender: req.query.gender,
    password: req.query.password,
  };

  await userinfo.insertOne(inputDoc);
  await client.close();
  res.json({ opr: "success" });
}

async function addcontactus(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  const userinfo = db.collection("contactus");
  let inputDoc = {
    name: req.query.name,
    email: req.query.email,
    message: req.query.message,
  };

  await userinfo.insertOne(inputDoc);
  await client.close();
  res.json({ opr: "success" });
}

async function alluserlist(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  const userinfo = db.collection("user");

  let list = await userinfo.find().toArray();

  await client.close();
  res.json(list);
}
async function loginByGet(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("project");
    const userinfo = db.collection("user");

    let query = { email: req.query.email, password: req.query.password };
    let userRef = await userinfo.findOne(query);

    await client.close();

    if (!userRef) {
      let errorMessage = `Authentication Failed:${req.query.email}`;
      throw new Error(errorMessage);
    }
    res.json(userRef);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

App.get("/adduser", adduser);
App.get("/alluserlist", alluserlist);
App.get("/login-by-get", loginByGet);
App.get("/addcontactus", addcontactus);

App.listen(4000);
