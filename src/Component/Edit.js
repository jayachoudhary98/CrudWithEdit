import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Edit = () => {
    const navigate= useNavigate();

    const [id, setId] = useState(0)

    const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  useEffect(()=>{
    
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));  
}, []);

const handleEdit= (e)=>{
    e.preventDefault();
    axios
    .put(`https://6418847d75be53f451e18b07.mockapi.io/crud-my/${id}`, {
      name: name,
      email: email,
   
    })

   .then(() => {
      navigate("/read");
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
          value={name}
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
          value={email}
          id="exampleInputPassword1"
          onChange={e=> setEmail(e.target.value)}

        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleEdit} >
        Edit
      </button>
    </form>
  </>
  )
}

export default Edit