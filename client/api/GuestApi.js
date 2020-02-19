import GuestApiGenerated from "./generated/GuestApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class GuestApi extends GuestApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Guest List
  static getGuestList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/guests")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default GuestApi;