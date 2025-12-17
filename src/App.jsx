import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const portfolioItems = [
    {
      title: "Project 1",
      description: "This is a sample project description. It showcases my skills in React and web development. You can edit this text later with your own content.",
      link: null
    },
    {
      title: "Project 2",
      description: "Another example of my work. This project demonstrates technical expertise in building minimal and efficient applications. Customize as needed.",
      link: null
    },
    {
      title: "Portfolio PDF",
      description: "Download or view my detailed portfolio document. It contains comprehensive information about my background and projects. Feel free to update this description.",
      link: "/Portfolio.pdf"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
