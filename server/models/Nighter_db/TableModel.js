import TableModelGenerated from "./generated/TableModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TableModelGenerated.init();
  
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
      return await TableModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TableModelGenerated,
  ...customModel
};
