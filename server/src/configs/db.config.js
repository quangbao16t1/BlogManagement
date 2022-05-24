const dbConfig = {
  HOST: "localhost",
  // PORT: 3306,
  USER: "root",
  PASSWORD: "Nqb01011998@",
  DB: "blogs",
  dialect: "mysql",
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
}

export default dbConfig;
