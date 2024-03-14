import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';
function App() {
  const [car_approvelist, setcar_approvelist] = useState([]);
  const getCar_approve = () => {
    Axios.get('http://localhost:8081/signup').then((response) => {
      setcar_approvelist(response.data);
    });
  }
  useEffect(() => {
    getCar_approve(); // เรียกใช้ getCar_approve() เมื่อ App component ถูกโหลดครั้งแรก
  }, []);
  return (
    <div className="App container">
       {car_approvelist.map((val, key) => {
          return (
              <div  key={key}>
                <div className="btn btn-success">Total Car: {val.total}</div>
              </div> )
        })}
      </div>);
} export default App;
