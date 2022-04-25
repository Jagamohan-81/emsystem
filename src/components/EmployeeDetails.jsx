export const EmployeeDetails = () => {
    return (
      <div className="user_details">
        <img className="user_image" src="http://dummyimage.com/167x137.png/ff4444/ffffff" />
        <h4 className="user_name">Jerrilee Albiston</h4>
        <span className="user_salary">$1000</span>
        <span className="tasks">
          <li className="task">working on service</li>
          <li className="task">in a meeting </li>
        </span>
        Status: <b className="status"></b>
        Title: <b className="title"></b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    );
  };