const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
let randomstring = require("randomstring");

//Middleware
app.use(cors());
app.use(express.json());

//Routes
//Create a user

async function fnGetUserExists(email) {
  try {
    const res = await pool.query("SELECT user_id FROM users WHERE email = $1", [
      email,
    ]);
    //console.log("res.rows[0]");
    //console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }
}

async function fnGetUniqID(user_id) {
  try {
    const res = await pool.query(
      "SELECT user_id FROM users WHERE user_id = $1",
      [user_id]
    );
    console.log("res.rows[0]");
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }
}

async function fnCreateUniqID() {
  let sChr;
  let iNum;
  let userID;
  let userArr;

  do {
    sChr = randomstring.generate({
      length: 3,
      readable: true,
      charset: "alphabetic",
      capitalization: "uppercase",
    });
    iNum = randomstring.generate({
      length: 4,
      charset: "numeric",
    });
    console.log("USERID To Check: " + sChr + iNum.toString());

    // sChr = "QKR";
    // iNum = "3014";

    //console.log(fnGetUniqID(sChr + iNum.toString()));

    userArr = await fnGetUniqID(sChr + iNum.toString());
    console.log("Array returned:");
    console.log(userArr);
  } while (userArr.length !== 0);

  console.log("Confirmed-USERID: " + sChr + iNum.toString());
  return sChr + iNum.toString();
}

app.post("/api/addusers", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      country,
      country_code,
      phone_number,
      dob,
      is_org,
      org_name,
    } = req.body;

    console.log("Start");
    console.log(req.body);

    const GetUserExists = await fnGetUserExists(email);

    if (GetUserExists.length === 0) {
      const sUniqID = await fnCreateUniqID();

      console.log("Adding this: " + sUniqID);

      const newUser = await pool.query(
        "INSERT INTO users VALUES('" +
          sUniqID +
          "','" +
          first_name +
          "','" +
          last_name +
          "','" +
          email +
          "','" +
          password +
          "','" +
          country +
          "','" +
          country_code +
          "','" +
          phone_number +
          "','" +
          dob +
          "'," +
          is_org +
          ",'" +
          org_name +
          "') RETURNING *"
      );
      res.json(newUser.rows);
    } else {
      res.json([{ result: "User already exists" }]);
    }
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
