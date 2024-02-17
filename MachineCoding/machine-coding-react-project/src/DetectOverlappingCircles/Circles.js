import React, { useEffect, useState } from 'react'
import './Circles.css';

const RADIUS = 100;

const Circles = () => {
    const [circles, setCircles] = useState([]);

    const detectOverlap = (c1, c2) => {
        return !(c1.bottom < c2.top || c1.top > c2.bottom || c1.right < c2.left || c1.left > c2.right);
    }


    const constructCircle = (e) => {
        const { clientX, clientY } = e;

        const currCircleObj = {
            left: clientX - RADIUS,
            right: clientX + RADIUS,
            top: clientY - RADIUS,
            bottom: clientY + RADIUS,
            bg: 'green'
        }

        setCircles((prev) => {
            for (let i = 0; i < prev.length; i++) {
                // if the current circle is colliding with any existing
                // update the background color of the current
                if (detectOverlap(prev[i], currCircleObj)) {
                    currCircleObj.bg = 'red'
                    break;
                }
            }
            return [...prev, currCircleObj];
        })

    }

    useEffect(() => {
        document.addEventListener("click", constructCircle);
        return () => {
            document.removeEventListener("click", constructCircle);
        };
    }, []);

    return (
        <div className='main-container'>
            {circles && circles?.length && circles.map(circle => <div key={circle.left + circle.right} style={{ position: 'absolute', borderRadius: '50%', width: '200px', height: '200px', opacity: '0.5', left: circle.left, top: circle.top, backgroundColor: circle.bg }}></div>)}
        </div>
    )
}

export default Circles