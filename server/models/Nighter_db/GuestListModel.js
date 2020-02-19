import GuestListModelGenerated from "./generated/GuestListModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = GuestListModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await GuestListModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...GuestListModelGenerated,
  ...customModel
};
