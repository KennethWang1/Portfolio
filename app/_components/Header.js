import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full h-20 bg-gradient-to-b from-background via-background to-transparent gradient-header flex flex-row justify-center items-top text-xl md:text-2xl underline z-10">
            <Link href="/" className="relative text-center w-40 mx-6 mt-3">Home</Link>
            <Link href="/projects" className="relative text-center w-40 mx-6 mt-3">Projects</Link>
            <a target="_blank" href="/resume" rel="noopener noreferrer" className="relative text-center w-40 mx-6 mt-3">Resume</a>
        </header>
    );
};