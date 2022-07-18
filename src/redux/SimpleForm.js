import React from "react";
import { reduxForm, Field } from "redux-form";
const SimpleForm = (props) => {
   const { handleSubmit } = props;
   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>First Name</label>
            <Field
               name="firstName"
               component="input"
               type="text"
               placeholder="First Name"
            />
         </div>

         <div>
            <label>Last Name</label>
            <Field
               name="lastName"
               component="input"
               type="text"
               placeholder="Last Name"
            />
         </div>

         <div>
            <button type="submit"> Submit</button>
         </div>
      </form>
   );
};

export default reduxForm({ form: "simple" })(SimpleForm);
