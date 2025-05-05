"use client"

import React from 'react';
import { useState } from 'react';

export default function WakatimeDiv() {
    const [time,setTime] = useState("loading...");

    fetch('https://wakatime.com/share/@KWang/eaabf7e4-4bfc-4282-9225-c901e12f8812.json')
        .then(response => response.json())
        .then(data => {
            const hours = data.data.grand_total.human_readable_total_including_other_language;
            setTime(hours);
        })
        .catch(error => {
            setTime("Error loading data");
            console.error('Error fetching Wakatime data:', error)
        });

    return (
        <>
        {time}
        </>
    );
}