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
 *  TO CUSTOMIZE FUNCTIONS IN TableActionsGenerated.js PLEASE EDIT ../TableActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import TableApi from "../../../api/TableApi";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_TABLE };
  },

  //CRUD METHODS

  // Create table
  createTable: function(table) {
    return function(dispatch) {
      return TableApi
        .createTable(table)
        .then(table => {
          dispatch(actionsFunction.createTableSuccess(table));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createTableSuccess: function(table) {
    return { type: types.CREATE_TABLE_SUCCESS, payload: table };
  },

  // Load  list
  loadTableList: function() {
    return function(dispatch) {
      return TableApi
        .getTableList()
        .then(list => {
          dispatch(actionsFunction.loadTableListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadTableListSuccess: function(list) {
    return { type: types.LIST_TABLE_SUCCESS, payload: list };
  },


};

export default actionsFunction;
