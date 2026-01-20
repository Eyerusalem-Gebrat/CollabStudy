import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("CollabStudyGroups")) || [];
    setGroups(storedGroups);
  }, []);

  const handleCreateGroup = () => {
    navigate("/CreateGroup");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h1>Dashboard</h1>
      <button onClick={handleCreateGroup}>Create New Group</button>

      {groups.length === 0 ? (
        <p>No groups yet. Create one!</p>
      ) : (
        <ul>
          {groups.map((group, index) => (
            <li key={index}>
              <h3>{group.name}</h3>
              <p>Owner: {group.owner}</p>
              <p>Members: {group.members.join(", ")}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
