import { useEffect,useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
    const [employee,setEmployee]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/employee").then(({ data })=>{
            setEmployee(data);
        })
    },[])
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {employee.map((e)=>{
            // <div key={e.id} >
            //     <Link to={`/employee/${e.id}`} className="flex" >
            //     <div className="employee_card">
            //     <img className="employee_image" src={e.image} alt='' />
            //     <span className="employee_name" >{e.employee_name}</span>
            //     <span className="employee_title">{e.title}</span>
            //     </div> 
            //     </Link>

            // </div>
            <div className="employee_card">
                <img className="employee_image" src={e.image} alt='' />
                <span className="employee_name" >{e.employee_name}</span>
                <span className="employee_title">{e.title}</span>
            </div> 

        })};
      </div>
    );
  };
  //http://localhost:8080/employee