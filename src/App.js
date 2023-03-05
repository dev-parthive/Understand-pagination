import { useEffect } from "react";
import Login from "./Login";

function App() {
  useEffect( () => {
    fetch('http://localhost:5000/users', {
      method: "GET",
      headers: {
        "content-type" : "application/json", 
        "Authorization": `${localStorage.getItem('token')}`
      }

    })
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
