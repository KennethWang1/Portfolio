import TypewriterTitle from "./_components/TypewriterTitle.js";
import GitHubCalendar from "react-github-calendar";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full h-screen justify-center items-center">
        <TypewriterTitle
          text="Hello&#128075; I'm Kenneth!"
          className="relative text-foreground text-6xl left 2.5 m-3 align-middle"
        />
      </div>

      <div className="relative flex flex-col w-full min-h-screen">
        <div className="flex flex-row items-center justify-around w-full">
          <DivCreator content={
            <>
            Nice to meet you! My name is Kenneth, and I am a highschool student at William Lyon Mackenzie. I am from Canada, and I currently live in Toronto. <br/><br/>
            I am a self-taught programmer fluent in C++, Java, and JavaScript. I also use a number of frameworks and libraries such as NodeJs. Some other languages, frameworks, and libraries I am learning or have some knowledge of include React, Tailwind, NextJs, Python and Flask.
            </>
            } className="basis-256" title="About Me"/>
        </div>
        <div className="flex flex-row items-center justify-around w-full">
          <DivCreator content={
            <GitHubCalendar
              username="KennethWang1" // Replace with your GitHub username
              blockSize={11}
              blockMargin={3.66}
              color="#1f77b4"
              fontSize={12}
            />
          } className="basis-192" title = "GitHub Contributions"/>
          <DivCreator content="rawr" className="basis-64" />
        </div>
      </div>
    </div>
  );
}

function DivCreator({ content, className , title = "" }) {
  return (
    <div className= {`flex flex-col bg-medium rounded-md m-2 ${className}`}>
      <div className="flex flex-row items-left">
        <div className="bg-red-500 left-2 m-2 w-2 h-2 rounded-full"/>
        <div className="bg-green-500 w-2 h-2 m-2 ml-0 rounded-full"/>
        <div className="bg-yellow-500 w-2 h-2 m-2 ml-0 rounded-full"/>
      </div>
      <div className={`flex flex-col m-1 mt-0 bg-light rounded `}>
        <h1 className="text-background text-2xl m-1 ml-1 ">
          {title}
        </h1>
        <div className="flex w-full h-full m-1 mt-0 text-background">
          {content}
        </div>
      </div>
    </div>
  );
}