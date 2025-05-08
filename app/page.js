import TypewriterTitle from "./_components/TypewriterTitle.js";
import GitHubCalendar from "react-github-calendar";
import React from "react";
import WakatimeDiv from "./_components/WakatimeDiv.js";

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
        <div className="flex flex-row items-stretch justify-around w-full">
          <DivCreator content={
            <>
              Nice to meet you! My name is Kenneth, and I am a high school student at William Lyon Mackenzie. I am from Canada, and I currently live in Toronto. In my spare time, I enjoy working on various projects (which you can see on my GitHub). 
              <br/><br/>
              I am a self-taught programmer fluent in C++, Java, and JavaScript. I also use several frameworks and libraries, such as Node.js. Some other languages, frameworks, and libraries I am learning or have some knowledge of include SQL, React, Tailwind, NextJs, Python and Flask. 
              <br/><br/>
              Outside of programming, I am the captain of Team Drop Table, a top-five CyberPatriot team in Canada. I also play baseball for the Scarborough Stringers. 
            </>
            } className="basis-512" title="About Me"/>
        </div>
        <div className="flex flex-row items-stretch justify-around w-full">
          <DivCreator content={
            <GitHubCalendar
              username="KennethWang1"
              blockSize={12}
              blockMargin={4}
              color="#1f77b4"
              fontSize={12}
            />
          } className="basis-384" title = "GitHub Contributions"/>
          <DivCreator content={
            <WakatimeDiv/>
          } className="basis-128 text-3xl" title="Programming Time"/>
        </div>
        <div className="flex flex-row items-center justify-around w-full">
          <DivCreator content={
            <>
              By me a coffee <br/>
              Or a bubble tea! <br/>
            </>
          } className="basis-64" title="Support Me!"/>
        </div>
      </div>
    </div>
  );
}

function DivCreator({ content, className, title = "" }) {
  return (
    <div className={`flex flex-col bg-medium rounded-md m-2 h-auto flex-grow ${className}`}>
      <div className="flex flex-row items-left">
        <div className="bg-red-500 left-2 m-2 w-2 h-2 rounded-full" />
        <div className="bg-green-500 w-2 h-2 m-2 ml-0 rounded-full" />
        <div className="bg-yellow-500 w-2 h-2 m-2 ml-0 rounded-full" />
      </div>
      <div className={`flex flex-col m-1 mt-0 bg-light rounded flex-grow`}>
        <h1 className="text-background text-4xl m-1 ml-1">{title}</h1>
        <div className="flex w-full h-full m-1 mt-0 text-background text-xl flex-grow">
          {content}
        </div>
      </div>
    </div>
  );
}