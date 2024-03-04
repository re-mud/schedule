import React, { useEffect, useState } from 'react';
import './Background.css';



function Background() {
    const [bgColor, setBgColor] = useState({"r": 0, "g": 0, "b": 255});

    let rgb = {"r": 0, "g": 0, "b": 255}

    useEffect(() => {
        const interval = setInterval(() => {
            if      (rgb.r < 255 && rgb.b > 0 && rgb.g == 0) {rgb.r++;rgb.b--;}
            else if (rgb.g < 255 && rgb.r > 0)               {rgb.r--;rgb.g++;}
            else                                             {rgb.g--;rgb.b++;}

            setBgColor({"r": rgb.r, "g": rgb.g, "b": rgb.b});
        }, 500);
      
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="background" style={{'--bg-color-1': `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`, '--bg-color-2': `rgb(${bgColor.b}, ${bgColor.r}, ${bgColor.g})`}}>
          <div className="background__bg background__bg--1"></div>
          <div className="background__bg background__bg--2"></div>
          <div className="background__bg background__bg--3"></div>
        </div>
    )
}

export default Background;
