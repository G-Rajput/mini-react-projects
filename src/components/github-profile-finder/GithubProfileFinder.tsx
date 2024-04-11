import React, { useEffect, useState } from "react";
import User from "./User";
import "./styles.css";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("g-rajput");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
    console.log(data);
  }
  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! please wait</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Seach</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
