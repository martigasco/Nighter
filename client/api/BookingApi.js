import BookingApiGenerated from "./generated/BookingApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class BookingApi extends BookingApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Booking List
  static getBookingList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/bookings")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default BookingApi;