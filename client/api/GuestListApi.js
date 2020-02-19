import GuestListApiGenerated from "./generated/GuestListApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class GuestListApi extends GuestListApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get GuestList List
  static getGuestListList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/guestlists")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default GuestListApi;