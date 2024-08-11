import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [nameVal, setname] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //        let val=res.json()
  //        console.log(res)
  //        setname(val)
  //     }
  //     )
  //     .catch((error) => { console.log("error") })


  // }, []);

  useEffect(() => {
    axios.get("https://jsonfakery.com/movies/random/3")
      .then((res) => {
        console.log(res)
        setname(res.data)

      })
      .catch((err) => { console.log("error") })
  }, [])

  return (
    < div>

      {/* <img src={nameVal[0].poster_path} alt='movie poster' width="200px" /> */}
      {nameVal.length?(nameVal.map((list) => {
        return <img src={list.poster_path} alt='movies image' width="200px"/>|| <p>{list.original_title}</p>
        })):(<p>value not found</p>)
      }
      {nameVal.length?(nameVal.map((list) => {
        return <p>{list.original_title}</p>
        })):(<p>value not found</p>)
      }


    </div>
  );
}

export default App;
