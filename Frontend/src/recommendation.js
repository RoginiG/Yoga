import React, { useState } from 'react';
import axios from 'axios';

function Recommendation() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await axios.get(`http://localhost:5000/api/search?q=${query}`);
    setResults(res.data);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by pain (e.g., back pain)"
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2">Search</button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {results.map((pose, idx) => (
          <div key={idx} className="border p-4 shadow rounded">
            <img
              src={`http://localhost:5000/static/${pose.image}`}
              alt={pose.name}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-bold mt-2">{pose.name}</h3>
            <p>{pose.description}</p>
            <p className="text-sm text-gray-500">For: {pose.pain_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}




const styles = {
  page: {
    textAlign: "center",
    padding: "50px",
    minHeight: "100vh",
    backgroundImage: "url('/image.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#333",
  },
  input: { padding: "10px", width: "250px", fontSize: "16px", display: "block", margin: "10px auto", border: "2px solid #007bff", borderRadius: "5px" },
  button: { padding: "10px 20px", fontSize: "18px", borderRadius: "5px", backgroundColor: "#007bff", color: "white", border: "none", display: "block", margin: "10px auto", cursor: "pointer" },
  resultBox: { marginTop: "20px", padding: "20px", background: "rgba(0, 0, 0, 0.05)", borderRadius: "10px" },
};

export default Recommendation;