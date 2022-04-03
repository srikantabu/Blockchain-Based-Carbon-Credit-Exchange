const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "#10Messi",
  host: "localhost",
  port: 5432,
  database: "bbccx",
});

module.exports = pool;
