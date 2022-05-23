import mysql from "mysql";

const connectDb = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Nqb01011998@",
  database: "blogs"

});

connectDb.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

export default connectDb;