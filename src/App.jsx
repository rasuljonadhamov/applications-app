import React, { useState } from "react";
import Application from "./components/Application";

const data = [
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
];

const App = () => {
  const [applications, setApplications] = useState(data);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("applicationId", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (section) => (e) => {
    e.preventDefault();
    const applicationId = e.dataTransfer.getData("applicationId");

    const updatedApplications = applications.map((app) =>
      app.id.toString() === applicationId ? { ...app, section } : app
    );

    setApplications(updatedApplications);
  };

  const renderApplications = (section) =>
    applications
      .filter((app) => app.section === section)
      .map((app) => (
        <Application
          key={app.id}
          id={app.id}
          title={app.title}
          desc={app.desc}
          user={app.user}
          onDragStart={(e) => handleDragStart(e, app.id)}
        />
      ));

  return (
    <div className="px-10 border-t-[44px] border-[#2EA97D] bg[#F0F0F0]">
      <div className="h-6"></div>
      <h1 className="text-2xl mb-5 pt-5">Applications {data.length}</h1>
      <div className="flex">
        {["new", "current", "closed", "archive"].map((section) => (
          <div
            key={section}
            className={`w-1/4 p-4 border ${
              section === "archive" ? "mb-3" : "mr-4"
            } border-t-[40px] border-[#F2FAF6]`}
            onDragOver={handleDragOver}
            onDrop={handleDrop(section)}
          >
            <h2 className="text-sm font-medium mb-4 -mt-[2.75rem]">
              {`${section.charAt(0).toUpperCase()}${section.slice(
                1
              )} Applications ${renderApplications(section).length}`}
            </h2>
            {renderApplications(section)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
