import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "FarmMantra",
  logging: false,
});

function connectDB() {
  return sequelize.authenticate();
}

export { connectDB };
