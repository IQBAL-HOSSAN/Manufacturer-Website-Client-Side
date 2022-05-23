import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  console.log(admin);
  useEffect(() => {
    const email = user?.email;
    console.log(user, email, admin);
    if (user) {
      fetch(`http://localhost:8000/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const admin = data.admin;
          setAdmin(admin);
          console.log(data);
        });
    }
  }, [user]);

  return [admin];
};

export default useAdmin;
