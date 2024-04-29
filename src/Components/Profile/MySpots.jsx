import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import Swal from "sweetalert2";

const MySpots = () => {
    const { user } = useContext(AuthContext);
    const [mySpots, setMySpots] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/my-spots/${user?.email}`)
        .then(res => res.json())
        .then(result => setMySpots(result));
    }, [user]);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/spots/${id}` , {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setMySpots(mySpots.filter(spot => spot._id !== id));
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting spot:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting the spot.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Spot Name</th>
                            <th>Spot Location</th>
                            <th>Show, Edit, Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mySpots.map((mySpot, index) => (
                            <tr key={mySpot._id} className="hover font-bold">
                                <th>{index + 1}</th>
                                <th>{mySpot.user_name}</th>
                                <td>{mySpot.tourists_spot_name}</td>
                                <td>{mySpot.country_Name}, {mySpot.location}</td>
                                <td>
                                    <div className="flex gap-5">
                                        <Link to={`/spot-details/${mySpot._id}`} className="p-4 rounded-xl text-xl text-white bg-[#a4855d]"><FiEye /></Link>
                                        <NavLink to={`/update-spots/${mySpot._id}`} className="p-4 rounded-xl text-xl text-white bg-[#ffa938]"> <FaPen /></NavLink>
                                        <button onClick={() => handleDelete(mySpot._id)} className="p-4 rounded-xl text-xl text-white bg-[#82561b]"><MdDelete /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySpots;
