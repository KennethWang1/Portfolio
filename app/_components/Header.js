import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed w-full h-10 bg-background flex flex-row justify-center items-center text-2xl underline z-100">
            <Link href="/" className="relative mx-4">Home</Link>
            <Link href="/projects" className="relative mx-4">Projects</Link>
            <Link href="/resume" className="relative mx-4">Resume</Link>
        </header>
    );
};