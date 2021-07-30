import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import '../App.css'

export default function ImageSlider() {

    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    if (length < 0) {
        return null
    }

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    function previousSlide() {
        setCurrent(current <= 0 ? length - 1 : current - 1)
    }

    // console.log(current)

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {
                SliderData.map((img, idx) => {
                    return (
                        <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
                            {idx === current && <img src={img.image} alt="Image" className="image" />}
                        </div>
                    )
                })
            }
        </section>
    )
}


