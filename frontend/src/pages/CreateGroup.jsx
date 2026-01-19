import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateGroup.css";

const CreateGroup = () => {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [members, setMembers] = useState([]);
  const [message, setMessage] = useState("");

  const loggedInUser = JSON.parse(localStorage.getItem("CollabStudyUser"))?.username || "owner";

  // Add member to the list
  const handleAddMember = () => {
    if (!memberEmail) return;
    if (!memberEmail.endsWith("@aau.edu.et")) {
      setMessage("Member email must be a valid aau.edu.et address.");
      return;
    }
    if (members.includes(memberEmail)) {
      setMessage("Member already added.");
      return;
    }
    setMembers([...members, memberEmail]);
    setMemberEmail("");
    setMessage(""); // clear message
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!groupName) {
      setMessage("Group name is required.");
      return;
    }

    // Owner is automatically added
    const allMembers = [loggedInUser, ...members];

    const newGroup = {
      name: groupName,
      description: description,
      owner: loggedInUser,
      members: allMembers,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    const existingGroups = JSON.parse(localStorage.getItem("CollabStudyGroups")) || [];
    existingGroups.push(newGroup);
    localStorage.setItem("CollabStudyGroups", JSON.stringify(existingGroups));

    setMessage("Group created successfully!");
    setGroupName("");
    setDescription("");
    setMembers([]);
    setMemberEmail("");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="create-group-container" style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h2>Create New Group</h2>
      {message && <p className="form-message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label htmlFor="groupName">Group Name *</label>
          <input
            type="text"
            id="groupName"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div className="field-group">
          <label htmlFor="description">Description (optional)</label>
          <textarea
            id="description"
            placeholder="Add a short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="field-group">
          <label htmlFor="memberEmail">Add Members by Email</label>
          <input
            type="email"
            id="memberEmail"
            placeholder="student@aau.edu.et"
            value={memberEmail}
            onChange={(e) => setMemberEmail(e.target.value)}
          />
          <button type="button" onClick={handleAddMember} style={{ marginTop: "5px" }}>
            Add Member
          </button>
          {members.length > 0 && (
            <ul>
              {members.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;



