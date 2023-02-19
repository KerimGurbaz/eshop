import { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => {
        setData(data);
        setLoading(false);
      })
    );
  }, []);

  return (
    <div>
      {loading && <p>LOADING...</p>}
      <h1>Users</h1>
      {data.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </div>
  );
};

export default User;
