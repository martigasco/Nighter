import actionsFunction from "./generated/BookingActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import BookingApi from "../../api/BookingApi";
 
 actionsFunction.loadBookingList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return BookingApi
     .getBookingList()
     .then(list => {
       dispatch(actionsFunction.loadBookingSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
