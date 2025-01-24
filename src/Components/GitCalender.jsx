import React, { useEffect } from "react";

const GitCalendar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof GitHubCalendar === "function") {
        GitHubCalendar(".calendar", "torvalds", { responsive: true }); // Replace with your username
      } else {
        console.error("GitHubCalendar is not defined. Script may not have loaded properly.");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="GitCalendar" className="py-16  text-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
          My GitHub Contributions
        </h2>
        <p className="text-gray-400 mb-6">
          A visual representation of my GitHub activity.
        </p>
        <div className="calendar mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
          Loading the data just for you...
        </div>
        
      </div>
    </div>
  );
};

export default GitCalendar;
