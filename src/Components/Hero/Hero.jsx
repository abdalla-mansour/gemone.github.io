import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = {type: 'spring', duration : 3}
    return (
    <div className='hero' id='home'>
        <motion.div
        initial={{opacity: 0, x:-100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 100}}
        transition={transition}
        className="blur hero-blur"></motion.div>
        <div className='left-h'>
            <Header />
            {/* the best ad */}
            <motion.div
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 100}}
            transition={transition}
            className="the-best-ad">
                <motion.div
                initial={{left: '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </motion.div>
            {/* Hero Heading */}
            <div className="hero-text">
                <motion.div
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={transition}
                >
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </motion.div>
                <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={transition}
                >
                    <span>Ideal body</span>
                </motion.div>
                <motion.div
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -100}}
                transition={transition}
                >
                    <span>
                        in here we will help you to shape and bulid your ideal body
                        and live up your life to fullest
                    </span>
                </motion.div>
            </div>
            {/* figures */}
            <motion.div
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 100}}
            transition={transition}
            className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+" />
                    </span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={978} start={800} delay='4' preFix="+" />
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={0} delay='4' preFix="+" />
                    </span>
                    <span>fitness programs</span>
                </div>
            </motion.div>
            {/* hero buttons */}
            <div className="hero-buttons">
                <motion.button
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={transition}
                className='btn'>Get Started</motion.button>
                <motion.button
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={transition}
                className='btn'>Learn More</motion.button>
            </div>
        </div>
        <div className='right-h'>
            <motion.button
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}
            className='btn'>Join Now</motion.button>
            <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart</span>
                <span><NumberCounter end={116} start={50} delay='4' />bpm</span>
            </motion.div>
            {/* hero images */}
            <motion.img
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={transition}
            src={hero_image} alt="" className='hero-image' />
            <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            src={hero_image_back} alt="" className='hero-image-back' />
            {/* calories */}
            <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span><NumberCounter end={220} start={100} delay='4' />kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
    )
}

export default Hero