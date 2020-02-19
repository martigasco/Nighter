import actionsFunction from "./generated/GuestActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import GuestApi from "../../api/GuestApi";
 
 actionsFunction.loadGuestList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return GuestApi
     .getGuestList()
     .then(list => {
       dispatch(actionsFunction.loadGuestSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
