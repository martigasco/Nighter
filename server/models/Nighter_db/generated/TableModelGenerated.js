/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE TableModelGenerated.js PLEASE EDIT ../TableModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Nighter_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Table
      */
    const tableSchema = new mongoose.Schema({
      description: {
        type: "String"
      },
      name: {
        type: "String"
      },
      position: {
        type: "Number"
      },
      // RELATIONS
      
      
      // EXTERNAL RELATIONS
      /*
      table: {
        type: Schema.ObjectId,
        ref: "Booking"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Table", tableSchema));

    return tableSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * TableModel.create
  *   @description CRUD ACTION create
  *   @param Table obj Object to insert
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * TableModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Table
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  


};

export default generatedModel;
