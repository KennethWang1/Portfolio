"use client";
import React, { useState, useEffect } from "react";

const TypewriterTitle = ({ text, className = "" }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (index < text.length) {
            let time;
            if(index == 7){
                time = 500;
            }else if(index == 6){
                time = 0;
            }else{
                time = 100;
            }
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, time); // Adjust typing speed here
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    useEffect(() => {
        const cursorBlink = setInterval(() => {
        setShowCursor((prev) => !prev);
        }, 500); // Cursor blink speed
        return () => clearInterval(cursorBlink);
    }, []);

    return (
        <span className={`typewriter ${className}`}>
        {displayedText}
        <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>
            |
        </span>
        </span>
    );
};

export default TypewriterTitle;