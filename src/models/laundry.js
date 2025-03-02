const { DataTypes } = require("sequelize");
const DB = require("../config/database");

const Customer = DB.define(
  "customer",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = DB.define(
  "service",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_per_kilo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = DB.define(
  "order",
  {
    no_order: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "in progress", "done"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = DB.define(
  "transaction",
  {
    transaction_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.ENUM("cash", "transfer", "qris"),
      allowNull: false,
    },
    total_payment: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    payment_status: {
      type: DataTypes.ENUM("paid", "not paid"),
      allowNull: false,
      defaultValue: "not paid",
    },
  },
  {
    timestamps: true,
  }
);

Customer.hasMany(Order, { foreignKey: "customer_id" });
Order.belongsTo(Customer, { foreignKey: "customer_id" });

Service.hasMany(Order, { foreignKey: "service_id" });
Order.belongsTo(Service, { foreignKey: "service_id" });

Order.hasOne(Transaction);
Transaction.belongsTo(Order);

module.exports = { Customer, Service, Order, Transaction };
