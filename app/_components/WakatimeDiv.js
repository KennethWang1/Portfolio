"use client"

import React, { useEffect, useState } from 'react';

const acceptedLanguages = ["JavaScript", "Python", "C++", "CSS"];

const languageColors = {
    "JavaScript": "#fbbf24", // Yellow
    "Python": "#3b82f6",     // Blue
    "C++": "#f43f5e",        // Pink/Red
    "CSS": "#8b5cf6",        // Purple
    "Other": "#9ca3af"       // Gray
};

export default function WakatimeDiv() {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://hackatime.hackclub.com/api/v1/users/ICantCode_/stats")
        .then((response) => response.json())
        .then((data) => {
            let processedData = [];
            let otherHours = 0;

            if (data?.data?.languages) {
                data.data.languages.forEach((lang) => {
                    if (acceptedLanguages.includes(lang.name)) {
                        processedData.push({
                            name: lang.name,
                            hours: lang.hours,
                            text: lang.text,
                            color: languageColors[lang.name] || languageColors["Other"]
                        });
                    } else {
                        otherHours += lang.hours;
                    }
                });

                if (otherHours > 0) {
                    const h = Math.floor(otherHours);
                    const m = Math.round((otherHours - h) * 60);
                    processedData.push({
                        name: "Other",
                        hours: otherHours,
                        text: `${h}h ${m}m`,
                        color: languageColors["Other"]
                    });
                }
                
                processedData.sort((a, b) => b.hours - a.hours);
                
                const totalHours = processedData.reduce((acc, curr) => acc + curr.hours, 0);
                processedData = processedData.map(item => ({
                    ...item,
                    percent: totalHours ? (item.hours / totalHours) * 100 : 0
                }));
            }

            setChartData(processedData);
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
        });
    }, []);

    if (loading || !chartData) {
        return <h3>Loading...</h3>;
    }

    return (
        <>
        <div className="flex items-center justify-center w-full text-white flex-col gap-4">
            <div className="flex h-4 w-full max-w-full overflow-hidden rounded-full bg-gray-700">
                {chartData.map((item, index) => (
                    <div
                        key={index}
                        style={{ 
                            width: `${item.percent}%`,
                            backgroundColor: item.color 
                        }}
                        title={`${item.name}: ${item.text}`}
                    />
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
                {chartData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: item.color }} 
                        />
                        <span>{item.name} - {item.text}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="text-gray-400 text-center text-xs mt-2">
            *competitive programming time is not included in this chart
        </div>
        </>
    );
}