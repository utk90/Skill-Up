import React, { useEffect, useState } from 'react'
import LetterStrip from './LetterStrip';
import './Letter.css'

const Content = () => {
    const [countries, setCountries] = useState([]);
    const [currentActive, setCurrentActive] = useState('A');

    function parseNonJSONData(data) {
        // Split the data into lines and parse each line
        const lines = data.split('\n');
        const parsedData = lines.map(line => {
            const [name, code] = line.split(',');
            const countryName = name.includes("name") && name.substring(10).replaceAll("'", "");
            return { countryName, code };
        });
        return parsedData;
    }

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json')
            .then(async (raw) => {
                return raw.text();
            })
            .then(data => {
                // const countryArr = data.split("},");
                const parsedData = parseNonJSONData(data);
                setCountries(parsedData);
                console.log(parsedData);
            });
    }, []);

    useEffect(() => {
        if (countries && countries.length) {
            const observer = new IntersectionObserver(function (enteries) {
                enteries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setCurrentActive(entry.target.innerHTML.charAt(0));
                    }
                })
            }, { threshold: 1, rootMargin: '0px', root: null });
            const elements = document.querySelectorAll('.country');
            elements.forEach(element => observer.observe(element));
        }
    }, [countries]);

    return (
        <div className='main-container'>
            <div>{countries && countries?.map(({ countryName, code }, index) => (countryName && <div className='country' key={code + index}>{countryName}</div>))}</div>
            <div className='letter-container'><LetterStrip letterInView={currentActive} /></div>
        </div>
    )
}

export default Content