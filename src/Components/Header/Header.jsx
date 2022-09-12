import React, {useState} from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)
    const transition = {type: 'spring', duration : 3}
    return (
        <div className='header'>
            <motion.img
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={Logo} alt="" className='logo' />
            {menuOpened === false && mobile === true ? (
                <div 
                style={{
                    backgroundColor: "var(-appColor)",
                    padding: '0.5rem',
                    borderRadius: '5px',
                    }}
                    onClick = {() => setMenuOpened(true)}
                    >
                    <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/>
                </div>
            ) : (
                <motion.ul
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -100}}
                transition={transition}
                className='header-menu'>
                    <li><Link
                    onClick={() => setMenuOpened(false)}
                    activeClass="active"
                    to='home'
                    spy={true}
                    smooth={true}
                    >HOME</Link></li>
                    <li><Link
                    onClick={() => setMenuOpened(false)}
                    to='programs'
                    spy={true}
                    smooth={true}
                    >PROGRAMS</Link></li>
                    <li><Link
                    onClick={() => setMenuOpened(false)}
                    to='reasons'
                    spy={true}
                    smooth={true}
                    >WHY US</Link></li>
                    <li><Link
                    onClick={() => setMenuOpened(false)}
                    to='plans'
                    spy={true}
                    smooth={true}
                    >PLANS</Link></li>
                    <li><Link
                    onClick={() => setMenuOpened(false)}
                    to='testimonials'
                    spy={true}
                    smooth={true}
                    >TESTIMONIALS</Link></li>
                </motion.ul>
            )}
        </div>
    )
}

export default Header