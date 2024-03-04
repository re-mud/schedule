import React, { useEffect, useState } from 'react';
import './Background.css';



function Background() {
    const maxValue = 120;
    const contrast = 60; // must <255-maxValue
    const [bgColor, setBgColor] = useState({"r": 0, "g": maxValue, "b": maxValue});
    let rgb = {"r": 0, "g": maxValue, "b": maxValue}

    useEffect(() => {
        const interval = setInterval(() => {
            if      (rgb.b == maxValue && rgb.r < maxValue) {rgb.r++;rgb.g--;}
            else if (rgb.r == maxValue && rgb.g < maxValue) {rgb.g++;rgb.b--;}
            else                                            {rgb.b++;rgb.r--;}

            setBgColor({"r": rgb.r, "g": rgb.g, "b": rgb.b});
        }, 1000);
      
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="background" style={{
                '--bg-color-1': `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`, 
                '--bg-color-2': `rgb(${bgColor.r+contrast}, ${bgColor.g+contrast}, ${bgColor.b+contrast})`
        }}>
          <div className="background__bg background__bg--1"></div>
          <div className="background__bg background__bg--2"></div>
          <div className="background__bg background__bg--3"></div>
        </div>
    )
}

export default Background;
