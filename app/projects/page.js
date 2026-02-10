import React from 'react';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';

export default function Projects() {
    return(
        <>
            <Header/>
            <div className='m-0'>
                <h1 className="text-4xl m-10 text-center mb-3">Projects</h1>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-row flex-wrap items-center justify-center">
                        <ProjectDiv link = 'https://github.com/KennethWang1/Portfolio' title = 'Portfolio' content = 'This website! My personal portfolio to showcase my projects.' img = '/Portfolio Image.jpg' tools = {[
                            {"tool":"React", "color":"bg-blue-500"},
                            {"tool":"JavaScript", "color":"bg-yellow-300"},
                            {"tool":"Tailwind", "color":"bg-sky-300"}
                        ]}/>
                        <ProjectDiv link = 'https://github.com/KennethWang1/Wildlife-Go' title='Wildlife Go' content='A web-based wildlife photography game to encourage going outside.' img = '/Wildlife-Go Image.jpg' tools = {[
                            {"tool":"JavaScript", "color":"bg-yellow-300"},
                            {"tool":"Tailwind", "color":"bg-sky-500"},
                            {"tool":"Next.Js", "color":"bg-white"},
                            {"tool":"Node.Js", "color":"bg-green-400"},
                            {"tool":"Firebase DB", "color":"bg-red-300"},
                        ]}/>
                        <ProjectDiv link = 'https://github.com/ohi-711/Rest' title = 'Rest' content = 'An AI music therepy site. It implements machine vision to detect your mood and uses music to improve it.' img = '/Rest Image.jpg' tools = {[
                            {"tools":"Python", "color":"bg-blue-500"},
                            {"tool":"JavaScript", "color":"bg-yellow-300"},
                            {"tool":"Flask", "color":"bg-sky-400"},
                            {"tool":"OpenAI", "color":"bg-gray-300"}
                        ]}/>
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-center">
                        <ProjectDiv link = 'https://github.com/KennethWang1/Stock-AI' title = 'Stock AI' content = 'A neural network-based stock trading algorithm. At the end of the trading day, it gets all relvent stock data as well as news data and trains based on that.' img = './stock-ai.png' tools = {[
                            {"tool":"Python", "color":"bg-blue-500"},
                            {"tool":"Flask", "color":"bg-sky-400"},
                            {"tool":"TensorFlow", "color":"bg-orange-500"}
                        ]}/>
                        <ProjectDiv link = 'https://github.com/KennethWang1/Disease-Heatmap' title = 'Disease Heatmap' content = 'A anonymous crowd-sourced disease tracking app. It uses self-reported data to track what diseases people are getting in the area.' img = 'disease heatmap.jpg' tools={[
                            {"tool":"React Native", "color":"bg-blue-500"},
                            {"tool":"Node.js", "color":"bg-green-500"},
                            {"tool":"MongoDB", "color":"bg-green-700"},
                        ]}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

function ProjectDiv({content, link, img = "https://placehold.co/800x500", title = "Placeholder", tools = []}) {
    return(
        <div className= 'flex flex-col items-left rounded-lg bg-[rgb(21,27,59)] w-90 h-109 m-7.5 p-0 border-0'>
            <div className="relative flex flex-row items-left p-0 m-0">
                <div className="bg-red-500 b-0 left-2 m-4 w-2.5 h-2.5 mr-2 rounded-full mt-2 mb-2" />
                <div className="bg-green-500 b-0 w-2.5 h-2.5 m-4 mr-2 ml-0 rounded-full mt-2 mb-2" />
                <div className="bg-yellow-500 b-0 w-2.5 h-2.5 m-4 ml-0 rounded-full mt-2 mb-2" />
            </div>
            <div className='flex h-full bg-[rgb(10,15,41)] m-0 flex-col items-center p-2 pb-0 rounded-b-lg'>
                <img src={img} alt="Project Image" className='rounded-lg w-full h-48 object-cover overflow-hidden'/>
                <div className='w-full h-40 mt-4 mb-4 rounded-lg overflow-hidden flex flex-col items-center px-2'>
                    <a href = {link} rel="noopener noreferrer" target="_blank" className='text-foreground relative w-fit underline decoration-foreground text-center pl-2 text-2xl overflow-hidden'>{title}</a>
                    <p className='text-white pl-2 pr-2'>
                        {content}
                    </p>
                    <div className='flex flex-row overflow-x-auto overflow-y-hidden w-full h-min bg-transparent mt-auto scrollbar-transparent-track pb-2'>
                        {tools.map((tool, index) => (
                            <div key={index} className={`rounded-full text-center whitespace-nowrap w-fit h-min p-0 pl-2 pr-2 text-sm text-gray-900 mr-2 ${tool.color}`}>{tool.tool}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}