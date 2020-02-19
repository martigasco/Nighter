import GuestModelGenerated from "./generated/GuestModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = GuestModelGenerated.init();
  
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
      return await GuestModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...GuestModelGenerated,
  ...customModel
};
