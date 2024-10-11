import React from "react";

const News = () => {
  const newsArticles = [
    {
      title: "AI Revolution Continues",
      content: "OpenAI releases GPT-4 Turbo, a faster and more efficient version of its popular language model."
    },
    {
      title: "Cybersecurity Alert",
      content: "Major vulnerabilities found in popular IoT devices, urging companies to patch systems immediately."
    },
    {
      title: "Meta Announces New VR Headset",
      content: "Meta unveils its latest VR headset with improved resolution and immersive features."
    },
    {
      title: "Quantum Computing Breakthrough",
      content: "Researchers achieve a new milestone in quantum computing that could revolutionize data encryption."
    }
  ];

  return (
    <div>
      <h1>Latest IT News</h1>
      {newsArticles.map((article, index) => (
        <div key={index} className="news-item">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
