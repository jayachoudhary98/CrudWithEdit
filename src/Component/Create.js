import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const history= useNavigate();

//     namee: "",
//     email: "",
//   });
//   function handleChange(e) {
//     setValue({...values, [e.target.name]: e.target.value});
//       console.log(values, "value");
//   }
//   const header= { "Access-control-Allow-origin": "*"}
const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("clicked");
      axios
      .post("https://6418847d75be53f451e18b07.mockapi.io/crud-my", {
        name: name,
        email: email,
     
      })

     .then(() => {
        history("/read");
     });
  }
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            // value={values.namee}
            // name="namee"

            className="form-control"
            id="exampleInputEmail1"
            onChange={e=> setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"

            className="form-control"
            // value={values.email}
            id="exampleInputPassword1"
            onChange={e=> setEmail(e.target.value)}

          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
