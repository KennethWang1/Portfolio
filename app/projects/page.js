import React from 'react';
import Header from '@/app/_components/Header';

export default function Projects() {
    return(
        <>
            <Header/>
            <div>
                <h1 className="text-4xl m-10 text-center mb-3">Projects</h1>
                <div className="flex flex-col items-center justify-center w-screen">
                    <div className="flex flex-row items-center justify-center">
                        <ProjectDiv link = 'https://kennethwang.xyz/' title = 'Portfolio' content = 'This website! Made with React, NextJS, and Tailwind CSS.'/>
                        <ProjectDiv link = 'https://github.com/KennethWang1/Wildlife-Go' title='Wildlife Go' content='A web-based wildlife photography game to encourage going outside. Made with Typescript, Tailwind, NextJs, NodeJs, and Firebase DB.'/>
                        <ProjectDiv/>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <ProjectDiv/>
                        <ProjectDiv/>
                        <ProjectDiv/>
                    </div>
                </div>
            </div>
        </>
    );
}

function ProjectDiv({content, link, img = "https://placehold.co/800x500", title = "Placeholder"}) {
    return(
        <div className= 'items-left rounded-lg bg-dark w-80 h-99 m-10 p-2 pt-0 pb-0'>
            <div className="relative flex flex-row items-left p-0 m-0">
                <div className="bg-red-500 left-2 p-0 m-1 w-2 h-2 mt-2 ml-0 rounded-full" />
                <div className="bg-green-500 p-0 w-2 h-2 m-1 mt-2 ml-0 rounded-full" />
                <div className="bg-yellow-500 p-0 w-2 h-2 m-1 mt-2 ml-0 rounded-full" />
            </div>
            <img src={img} alt="Project Image" className='rounded-lg top-0'/>
            <div className='w-full h-40 bg-cyan-100 mt-4 mb-4 rounded-lg overflow-hidden'>
                <a href = {link} rel="noopener noreferrer" target="_blank" className='underline decoration-dark w-max text-center pl-2 text-background text-2xl overflow-hidden'>{title}</a>
                <p className='text-dark pl-2 pr-2'>
                    {content}
                </p>
            </div>
        </div>
    );
}