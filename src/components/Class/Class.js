import React, { useEffect, useState } from "react";
import "./Class.css";

function Class(props){

    const[classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/rest/v0/courses/"

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url + props.name)
            const data = await response.json();
            console.log(data)
            setClassInfo(data);
        }
        fetchData();
    }, [props.name]);
    let info;
    if(classInfo.id){
        info = <div className="information">
            <p className="title"> {classInfo.title} </p>
            <p className="department">{classInfo.department_name}</p>
            <p className="description">{classInfo.description}</p>
        </div>
    } else if(classInfo.error) {
        info = <p>Class Not Found</p>
    } else {
        info = <p>loading...</p>
    }

    return(
        <div className="class">
            {props.name}
            <div>
                {info}
            </div>
        </div>
    )
}

export default Class;