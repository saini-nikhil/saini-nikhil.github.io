import React, { useState, useEffect } from "react";
import { Users, GitBranch, Code } from "lucide-react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/saini-nikhil"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const userData = await response.json();
        setUserData(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 text-white">
        Loading...
      </div>
    );
  if (error)
    return <div className="text-red-500 p-4 bg-gray-900">Error: {error}</div>;

  return (
    <div id="GitStats" className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-6">GitHub Stats</h1>
        {/* Profile Card */}
        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg p-6 shadow-lg">
          <img
            src={userData?.avatar_url}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-700"
          />
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h2 className="text-2xl font-bold">
              {userData?.name || userData?.login}
            </h2>
            <p className="text-gray-400 text-sm">{userData?.bio}</p>
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              <span className="text-gray-400 flex items-center">
                <Users className="h-4 w-4 mr-1" /> {userData?.followers}{" "}
                Followers
              </span>
              <span className="text-gray-400 flex items-center">
                <GitBranch className="h-4 w-4 mr-1" /> {userData?.public_repos}{" "}
                Repos
              </span>
            </div>
          </div>
        </div>

        {/* GitHub Stats & Most Used Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub Stats */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">GitHub Stats</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=saini-nikhil&show_icons=true&theme=radical`}
              className="w-full rounded-lg"
              alt="GitHub Stats"
            />
          </div>

          {/* Most Used Languages */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Code className="h-5 w-5 mr-2" />
              Most Used Languages
            </h3>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=saini-nikhil&layout=compact&theme=radical"
              className="w-full rounded-lg"
              alt="Top Languages"
            />
          </div>
        </div>

        {/* GitHub Contribution Calendar */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Contribution Activity</h3>
          <GitHubCalendar
            username="saini-nikhil"
            theme={{
              dark: ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
            }}
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
