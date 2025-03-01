const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const DB = require("./config/database");
const { Customer, Order, Service, Transaction } = require("./models/laundry");
const customer = require("./routes/customer/customerRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const service = require("./routes/service/serviceRoute");

dotenv.config();

const app = express();

try {
  DB.authenticate();
  console.log("Database connected");

  //   Customer.sync({ alter: true });
  //   Service.sync({ alter: true });
  //   Order.sync({ alter: true });
  //   Transaction.sync({ alter: true });
} catch (error) {
  console.log("Failed connect to database", error);
}

app.use(express.json());
app.use(cors());

app.use("/customer", customer);
app.use("/service", service);
app.use("/", (req, res) => {
  res.send("Hello World");
});
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
