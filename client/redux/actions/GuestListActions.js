import actionsFunction from "./generated/GuestListActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import GuestListApi from "../../api/GuestListApi";
 
 actionsFunction.loadGuestListList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return GuestListApi
     .getGuestListList()
     .then(list => {
       dispatch(actionsFunction.loadGuestListSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
