import React, { useEffect, useState } from 'react';
import './Section2.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Section2() {
    let [Studies, setStudies] = useState([]);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1340 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1340, min: 991 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 991, min: 767 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        let getData = async () => {
            let response_obj = await fetch("https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws", {
                method: "GET"
            });
            let response = await response_obj.json();
            console.log(response);
            setStudies(response);
        }
        getData();
    }, [])
    
  return (
    <section className='Section2'>
        <div className='headingWrapper2'>
            <div className='Rectangle'></div>
            <p>Case Studies</p>
        </div>
        <Carousel responsive={responsive} className='studyWrapper'>
            {Studies.map((study) => {
                return(
                    <div className='Study' key={study.title} style={{backgroundImage: `url(${study.imageUrl})`, }}>
                        <div className='Rectangle'></div>
                        <h3>{study.title}</h3>
                        <p>{study.description}</p>
                    </div>
                )
            })}
        </Carousel>
    </section>
  )
}

export default Section2