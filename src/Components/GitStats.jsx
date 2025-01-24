import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import GitCalendar from "./GitCalender";

const GitStats = () => {
  const [gitData, setGitData] = useState(null);

  useEffect(() => {
    const fetchGitStats = async () => {
      const response = await fetch("https://api.github.com/users/saini-nikhil"); // Replace with your GitHub username
      const data = await response.json();
      setGitData(data);
    };

    fetchGitStats();
  }, []);

  return (
    <div id="GitStats" className="py-16  text-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">My GitHub Stats</h2>

        {gitData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-500">Followers</h3>
              <p className="text-2xl">{gitData.followers}</p>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-500">Repositories</h3>
              <p className="text-2xl">{gitData.public_repos}</p>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-500">Gists</h3>
              <p className="text-2xl">{gitData.public_gists}</p>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-500">Following</h3>
              <p className="text-2xl">{gitData.following}</p>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl shadow-lg col-span-2 sm:col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold text-blue-500">Bio</h3>
              <p className="text-lg">{gitData.bio || "No bio available"}</p>
            </div>

            <div className="flex justify-center mt-6">
              <a 
                href={gitData.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 border-2 border-gray-400 rounded-full text-gray-200 hover:bg-blue-500 hover:border-blue-500 flex items-center gap-2"
              >
                <FaGithub size={20} /> View GitHub Profile
              </a>
            </div>
           
          </div>
        ) : (
          <p>Loading GitHub stats...</p>
        )}
      </div>
      <GitCalendar />
    </div>
  );
};

export default GitStats;
