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
                        <ProjectDiv link = 'https://github.com/KennethWang1/Portfolio' title = 'Portfolio' content = 'This website! Made with React, NextJS, and Tailwind CSS.' img = '/Portfolio Image.jpg'/>
                        <ProjectDiv link = 'https://github.com/KennethWang1/Wildlife-Go' title='Wildlife Go' content='A web-based wildlife photography game to encourage going outside. Made with Typescript, Tailwind, NextJs, NodeJs, and Firebase DB.' img = '/Wildlife-Go Image.jpg'/>
                        <ProjectDiv link = 'https://github.com/ohi-711/Rest' title = 'Rest' content = 'An AI music therepy site. Made with JavaScript, HTML, CSS, and Flask. The project also uses machine vision and OpenAI.' img = '/Rest Image.jpg'/>
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-center">
                        <ProjectDiv link = 'https://google.com' title = 'ResuMade' content = ''/>
                        <ProjectDiv link = 'https://google.com' title = '' content = ''/>
                        <ProjectDiv link = 'https://google.com' title = '' content = ''/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

function ProjectDiv({content, link, img = "https://placehold.co/800x500", title = "Placeholder"}) {
    return(
        <div className= 'items-left rounded-lg bg-blue-950 w-80 h-99 m-10 p-2 pt-0 pb-0 border-1 border-green-100/[0.9]'>
            <div className="relative flex flex-row items-left p-0 m-0">
                <div className="bg-red-500 left-2 p-0 m-1 w-2 h-2 mt-2 ml-0 rounded-full" />
                <div className="bg-green-500 p-0 w-2 h-2 m-1 mt-2 ml-0 rounded-full" />
                <div className="bg-yellow-500 p-0 w-2 h-2 m-1 mt-2 ml-0 rounded-full" />
            </div>
            <img src={img} alt="Project Image" className='rounded-lg top-0'/>
            <div className='w-full h-40 bg-transparent mt-4 mb-4 rounded-lg overflow-hidden flex flex-col items-center'>
                <a href = {link} rel="noopener noreferrer" target="_blank" className='text-green-50 relative w-fit underline decoration-green-50 text-center pl-2 text-2xl overflow-hidden'>{title}</a>
                <p className='text-green-50 pl-2 pr-2'>
                    {content}
                </p>
            </div>
        </div>
    );
}