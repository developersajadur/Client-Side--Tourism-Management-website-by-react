import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FiEye } from "react-icons/fi";


const MySpots = () => {
    const {user} = useContext(AuthContext)
    const [mySpots , setMySpots] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/my-spots/${user?.email}`)
        .then(res => res.json())
        .then(data => setMySpots(data))
    } ,[user])
    return (
        <div>
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Spot Name</th>
        <th>Spot Location</th>
        <th>Show, Edit, Delete</th>
      </tr>
    </thead>
            {
                mySpots.map((mySpot , index) => 
                    <tbody key={mySpot._id}>
                    <tr className="hover font-bold">
                      <th>{index + 1}</th>
                      <th>{mySpot.user_name}</th>
                      <td>{mySpot.tourists_spot_name}</td>
                      <td>{mySpot.country_Name}, {mySpot.location}</td>
                      <td>
                      <div className="flex gap-5">
            <button className="p-4 rounded-xl text-xl text-white bg-[#a4855d]"><FiEye /></button>
            <NavLink to={`/update-spots/${mySpot._id}`} className="p-4 rounded-xl text-xl text-white bg-[#ffa938]"> <FaPen /></NavLink>
            <button className="p-4 rounded-xl text-xl text-white bg-[#82561b]"><MdDelete /></button>
                     </div>
                      </td>
                    </tr>
                  </tbody>
                )
            }
  </table>
</div>
        </div>
    );
};

export default MySpots;