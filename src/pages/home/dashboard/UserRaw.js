import React from "react";
import { icons } from "react-icons";
import swal from "sweetalert";

const UserRaw = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:8000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal({ title: "Successfully made an admin", icon: "success" });
        } else {
          swal({ title: `${data.message}`, icon: "error" });
        }
        refetch();
      });
  };
  return (
    <tbody>
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{user?.email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={makeAdmin} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-xs">Remove User</button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserRaw;
