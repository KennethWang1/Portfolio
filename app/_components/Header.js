import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className=" w-full h-10 bg-background flex flex-row justify-center items-center text-2xl underline z-10">
            <Link href="/" className="relative text-center w-40 mx-6">Home</Link>
            <Link href="/projects" className="relative text-center w-40 mx-6">Projects</Link>
            <a target="_blank" href="/resume" rel="noopener noreferrer" className="relative text-center w-40 mx-6">Resume</a>
        </header>
    );
};