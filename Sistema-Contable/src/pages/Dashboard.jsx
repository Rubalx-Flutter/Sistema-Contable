
//rrd imports
import { useLoaderData } from "react-router-dom";

//helper functions
import { fetchData } from "../helpers"


//loader
export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

export const Dashboard = () => {
   const {userName} = useLoaderData();
    return (
        <div>Dashboard</div>
    )
}