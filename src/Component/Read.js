import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://6418847d75be53f451e18b07.mockapi.io/crud-my")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  const handleClick = (id) => {
    axios
      .delete(`https://6418847d75be53f451e18b07.mockapi.io/crud-my/${id}`)
      .then(() => {
        getData();
      });
  };
  const setToLocalStorage= (id, name, email) =>{
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)



  }
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/edit">
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleClick(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
