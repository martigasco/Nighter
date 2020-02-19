// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import BookingModel from "../models/Nighter_db/BookingModel";
import GuestModel from "../models/Nighter_db/GuestModel";
import GuestListModel from "../models/Nighter_db/GuestListModel";
import ProductModel from "../models/Nighter_db/ProductModel";
import TableModel from "../models/Nighter_db/TableModel";
import UserModel from "../models/Nighter_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.Nighter_db_dbUrl);

    // Start Init Models

		BookingModel.init();
		GuestModel.init();
		GuestListModel.init();
		ProductModel.init();
		TableModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_Nighter_db = await mongoose.connect(
        "mongodb://" + properties.Nighter_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Nighter_db;
  }
}

export default new Database();
