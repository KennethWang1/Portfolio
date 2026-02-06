import TypewriterTitle from "./_components/TypewriterTitle.js";
import GitHubCalendar from "react-github-calendar";
import React from "react";
import WakatimeDiv from "./_components/WakatimeDiv.js";
import Header from './_components/Header.js';
import Footer from "./_components/Footer.js";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="flex flex-col">
        <div className="flex w-full justify-center items-center" style={{ height: 'calc(100vh - 5rem)' }}>
          <TypewriterTitle
            text="Hello&#128075; I'm Kenneth!"
            className="relative text-foreground text-6xl h-10 w-200 text-center p-2.5 m-10 mt-0 align-middle"
          />
        </div>

        <div className="relative flex flex-col w-full px-4 md:px-8 max-w-300 overflow-x-hidden m-auto">
          <div className="flex flex-col md:flex-row md:items-stretch justify-around w-full gap-4 md:gap-2">
            <DivCreator content={
              <p>
                Nice to meet you! My name is Kenneth, and I am a Canadian high school student studying at William Lyon Mackenzie. In my spare time, I enjoy working on projects (which you can see in the projects page)! 
                <br/><br/>
                I am a self-taught programmer fluent in <b>C++</b>, <b>Java</b>, and <b>JavaScript</b>. I also use several frameworks and libraries, such as <b>Node.js</b>. Some other languages, frameworks, tools, and libraries I am learning or have some knowledge of include <b>SQL</b>, <b>docker</b>, <b>React</b>, <b>Tailwind</b>, <b>Next.js</b>, <b>Python</b>, <b>TensorFlow</b> and <b>Flask</b>. 
                <br/><br/>
                Recently, I've been focusing on web development and machine learning. I am learning to use better practices when creating web app. I am also learning machine learning concepts and how to properly implement them into projects.
              </p>
              } className="w-full md:basis-512" title="About Me" file = "aboutMe.md"/>
          </div>
          <div className="flex flex-col md:flex-row md:items-stretch justify-around w-full gap-4 md:gap-2">
            <DivCreator content={
              <GitHubCalendar
                username="KennethWang1"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                colorScheme="light"
                theme={{
                  light: ['#3a2f6b','#77f07f'],
                }}
              />
            } className="w-full md:basis-256 hidden md:block" title = "GitHub Contributions" file="contributions.log"/>
            <DivCreator content={
              <WakatimeDiv/>
            } className="w-full md:basis-128 text-3xl" title="Time Coding" file = "codingTime.js"/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

function DivCreator({ content, className, title = "", file = "" }) {
  return (
    <div className={`flex flex-col bg-[rgb(21,27,59)] rounded-md m-1 md:m-2 h-auto flex-grow min-w-0 max-w-full overflow-hidden ${className}`}>
      <div className="flex flex-row items-left">
        <div className="bg-red-500 b-0 left-2 m-4 w-2.5 h-2.5 mr-2 rounded-full" />
        <div className="bg-green-500 b-0 w-2.5 h-2.5 m-4 mr-2 ml-0 rounded-full" />
        <div className="bg-yellow-500 b-0 w-2.5 h-2.5 m-4 ml-0 rounded-full" />
        {file !== "" && (
          <span className="text-gray-400 text-align-center mt-auto mb-auto text-sm md:text-base">&gt; {file}</span>
        )}
      </div>
      <div className={`flex flex-col mt-0 rounded-xs flex-grow text-white bold-foreground overflow-hidden bg-[rgb(10,15,41)]`}>
        <h1 className="relative text-xl md:text-4xl m-3 break-words text-foreground hyphens-auto overflow-hidden z-20">{title}</h1>
        <div className="flex flex-col m-3 text-base text-white md:text-xl flex-grow overflow-hidden break-words hyphens-auto overflow-wrap-anywhere leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}