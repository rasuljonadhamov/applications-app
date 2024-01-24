import React, { useState } from "react";

const App = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      title: "Application 1",
      desc: "Description for Application 1",
      user: {
        name: "John Doe",
        job: "Software Engineer",
        image: "https://picsum.photos/200/300",
      },
      section: "new",
    },
    {
      id: 2,
      title: "Application 2",
      desc: "Description for Application 2",
      user: {
        name: "Jane Doe",
        job: "Product Manager",
        image: "https://picsum.photos/200/300",
      },
      section: "current",
    },
    ,
    {
      id: 3,
      title: "Graphic Designer - Ongoing Project",
      desc: "Create stunning visuals for our website and marketing materials.",
      user: {
        name: "Maria Garcia",
        job: "Creative Director",
        image: "https://picsum.photos/200/300",
      },
      section: "current",
    },
    {
      id: 4,
      title: "Data Analyst - Urgent Need",
      desc: "Analyze large datasets and draw insights to optimize business decisions.",
      user: {
        name: "Michael Hernandez",
        job: "Head of Data Analytics",
        image: "https://picsum.photos/200/300",
      },
      section: "closed",
    },
    {
      id: 5,
      title: "Account Manager - Top Performer",
      desc: "Experienced sales professional needed to secure new high-value clients.",
      user: {
        name: "Emily Jones",
        job: "Sales Director",
        image: "https://picsum.photos/200/300",
      },
      section: "archive",
    },
    {
      id: 6,
      title: "Sales Representative - Bilingual Advantage",
      desc: "Connect with Spanish-speaking clients and close deals.",
      user: {
        name: "Carlos Rodriguez",
        job: "Sales Manager",
        image: "https://picsum.photos/200/300",
      },
      section: "new",
    },
    {
      id: 7,
      title: "Project Manager - Agile Expert",
      desc: "Lead the development team and deliver projects on time and within budget.",
      user: {
        name: "Sarah Williams",
        job: "Project Management Director",
        image: "https://picsum.photos/200/300",
      },
      section: "current",
    },
    {
      id: 8,
      title: "Content Writer - SEO Specialist",
      desc: "Create engaging and optimized content to drive website traffic.",
      user: {
        name: "Andrew Miller",
        job: "Content Marketing Manager",
        image: "https://picsum.photos/200/300",
      },
      section: "closed",
    },
    {
      id: 9,
      title: "Customer Service Representative - Tech Support",
      desc: "Provide excellent customer service and resolve technical issues.",
      user: {
        name: "Katherine Brown",
        job: "Customer Service Manager",
        image: "https://picsum.photos/200/300",
      },
      section: "archive",
    },
    {
      id: 10,
      title: "Software Developer Intern - Mobile App",
      desc: "Gain valuable experience and contribute to a growing mobile app project.",
      user: {
        name: "Daniel Chen",
        job: "Software Development Lead",
        image: "https://picsum.photos/200/300",
      },
      section: "new",
    },
    {
      id: 11,
      title: "Mechanical Engineer - Design & Build",
      desc: "Design and develop innovative mechanical systems for a variety of projects.",
      user: {
        name: "Elizabeth Taylor",
        job: "Engineering Director",
        image: "https://picsum.photos/200/300",
      },
      section: "current",
    },
    {
      id: 12,
      title: "Data Scientist - AI & Machine Learning",
      desc: "Apply your expertise in AI and machine learning to solve complex problems.",
      user: {
        name: "Matthew Johnson",
        job: "Head of Data Science",
        image: "https://picsum.photos/200/300",
      },
      section: "closed",
    },
    {
      id: 13,
      title: "Product Manager - Shape the Future",
      desc: "Own the product roadmap and drive success for our next big innovation.",
      user: {
        name: "Victoria Garcia",
        job: "Product Director",
        image: "https://picsum.photos/200/300",
      },
      section: "archive",
    },
    {
      id: 14,
      title: "Financial Analyst - Investment Insights",
      desc: "Analyze financial data and provide market insights to inform investment decisions.",
      user: {
        name: "Joseph Garcia",
        job: "Chief Investment Officer",
        image: "https://picsum.photos/200/300",
      },
      section: "new",
    },
    {
      id: 15,
      title: "Human Resources Manager - Build Culture",
      desc: "Develop and implement strategies to attract, develop, and retain top talent.",
      user: {
        name: "Jennifer Lopez",
        job: "Head of Human Resources",
        image: "https://picsum.photos/200/300",
      },
    },
  ]);

  const newApplication = {
    id: 3,
    title: "New Graphic Designer Application",
    desc: "Ongoing project with flexible hours",
    user: {
      name: "John Smith",
      job: "Graphic Designer",
      image: "https://picsum.photos/200/300",
    },
    section: "new",
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("applicationId", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (section) => (e) => {
    e.preventDefault();
    const applicationId = e.dataTransfer.getData("applicationId");

    const updatedApplications = applications.map((app) => {
      if (app.id.toString() === applicationId) {
        return { ...app, section };
      }
      return app;
    });

    setApplications(updatedApplications);
  };

  return (
    <div className="flex">
      <div
        className="w-1/4 p-4 border border-gray-300 mr-4"
        onDragOver={handleDragOver}
        onDrop={handleDrop("new")}
      >
        <h2 className="text-xl font-bold mb-4">New Applications</h2>
        {applications
          .filter((app) => app.section === "new")
          .map((app) => (
            <div
              key={app.id}
              className="bg-white rounded p-4 mb-4 shadow-md"
              draggable
              onDragStart={(e) => handleDragStart(e, app.id)}
            >
              <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
              <p className="text-gray-700 mb-2">{app.desc}</p>
              <div className="flex items-center">
                <img
                  src={app.user.image}
                  alt={app.user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-800 font-semibold">{app.user.name}</p>
                  <p className="text-gray-600">{app.user.job}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div
        className="w-1/4 p-4 border border-gray-300 mr-4"
        onDragOver={handleDragOver}
        onDrop={handleDrop("current")}
      >
        <h2 className="text-xl font-bold mb-4">Current Applications</h2>
        {applications
          .filter((app) => app.section === "current")
          .map((app) => (
            <div
              key={app.id}
              className="bg-white rounded p-4 mb-4 shadow-md"
              draggable
              onDragStart={(e) => handleDragStart(e, app.id)}
            >
              <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
              <p className="text-gray-700 mb-2">{app.desc}</p>
              <div className="flex items-center">
                <img
                  src={app.user.image}
                  alt={app.user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-800 font-semibold">{app.user.name}</p>
                  <p className="text-gray-600">{app.user.job}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Closed Applications Section */}
      <div
        className="w-1/4 p-4 border border-gray-300 mr-4"
        onDragOver={handleDragOver}
        onDrop={handleDrop("closed")}
      >
        <h2 className="text-xl font-bold mb-4">Closed Applications</h2>
        {applications
          .filter((app) => app.section === "closed")
          .map((app) => (
            <div
              key={app.id}
              className="bg-white rounded p-4 mb-4 shadow-md"
              draggable
              onDragStart={(e) => handleDragStart(e, app.id)}
            >
              <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
              <p className="text-gray-700 mb-2">{app.desc}</p>
              <div className="flex items-center">
                <img
                  src={app.user.image}
                  alt={app.user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-800 font-semibold">{app.user.name}</p>
                  <p className="text-gray-600">{app.user.job}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Archive Applications Section */}
      <div
        className="w-1/4 p-4 border border-gray-300"
        onDragOver={handleDragOver}
        onDrop={handleDrop("archive")}
      >
        <h2 className="text-xl font-bold mb-4">Archive Applications</h2>
        {applications
          .filter((app) => app.section === "archive")
          .map((app) => (
            <div
              key={app.id}
              className="bg-white rounded p-4 mb-4 shadow-md"
              draggable
              onDragStart={(e) => handleDragStart(e, app.id)}
            >
              <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
              <p className="text-gray-700 mb-2">{app.desc}</p>
              <div className="flex items-center">
                <img
                  src={app.user.image}
                  alt={app.user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-800 font-semibold">{app.user.name}</p>
                  <p className="text-gray-600">{app.user.job}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
