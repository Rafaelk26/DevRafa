// Development
import { useState } from 'react'
import { ReactTyped } from "react-typed";

// Components
import { Button } from '../../Button'

// Icons
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

// CSS 
import './index.css'

// Photo
import photoDev from '../../../assets/Photo/Rafael.jpg'

export function Show() {

    const [showText, setShowText] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setShowText(true);
    };

    const handleMouseLeave = () => {
        setShowText(false);
    };

    return (
        <>
            <section className="w-full px-4 mt-2 flex flex-col gap-10
            sm:mt-6 sm:h-96 sm:justify-between sm:gap-1 sm:flex-row
            md:mt-6 md:h-96  md:max-w-7xl md:justify-between md:gap-2 md:flex-row">
                {/* Introdution Words */}
                <div className="w-full h-full
                md:max-w-xl">
                    <div className="w-full pt-12 flex flex-col mx-auto
                    md:w-full md:mx-0">
                        <ReactTyped 
                        className='w-full inter-regular text-lg text-white text-center
                        sm:text-start sm:text-xl
                        md:text-start md:text-xl'
                        strings={["Hello! I'm Rafael"]} 
                        typeSpeed={50}/>
                        <ReactTyped 
                        className='w-full readex-bold text-5xl text-white text-center
                        sm:text-start sm:text-6xl
                        md:text-start md:text-8xl'
                        strings={["Developer Front-end"]}
                        typeSpeed={200}
                        />
                    </div>
                    {/* Networks and Contact */}
                    <div className='w-full mt-6 flex flex-col items-center gap-4
                    sm:flex-row sm:items-center
                    md:flex-row md:items-center'>
                        <Button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        id='buttonWord'
                        name='Contact-me'
                        type='button'
                        />
                        {showText && (
                            <p className='text-white text-xl transition-all ease-in-out'>
                                Now!
                            </p>
                        )}
                    </div>
                    <div className='w-full mt-3 flex gap-3 justify-center
                    sm:justify-start
                    md:justify-start'>
                        <FaLinkedin
                        className='cursor-pointer'
                        to={'#'}
                        size={32}
                        fill='#fff'
                        title='LinkedIn'
                        />

                        <FaGithub
                        className='cursor-pointer'
                        to={'#'}
                        size={32}
                        fill='#fff'
                        title='GitHub'
                        />

                        <FaInstagram
                        className='cursor-pointer'
                        to={'#'}
                        size={32}
                        fill='#fff'
                        title='Instagram'
                        />
                    </div>
                </div>
                {/* Introdution Photo */}
                <div className="w-full flex justify-center
                md:w-max md:justify-end">
                    <img 
                    className="w-72 h-80 rounded-2xl object-cover
                    sm:w-80 sm:h-96 sm:rounded-2xl
                    md:w-80 md:h-96 md:rounded-3xl"
                    src={photoDev} 
                    alt="DevRafa" />
                </div>
            </section>
        </>
    )
}