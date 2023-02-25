import React from 'react'
import backgroundImage from '../assets/nnnoise.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

function Hero() {
  return (
    <div className="bg-repeat h-screen opacity-80" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="flex flex-wrap sm:flex-row flex-col justify-center sm:justify-between items-center h-screen">
            <div className="hidden sm:block flex flex-col bg-gradient-to-r from-mediumBlue to-hardBlue h-72 w-16 rounded-lg text-lightBlue text-4xl">
                    <a href="#" className='hidden sm:block hover:bg-mediumBlue rounded-lg p-4 '>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    
                    <a href="#" className='hidden sm:block hover:bg-mediumBlue rounded-lg p-4 '>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a href="#" className='hidden sm:block hover:bg-mediumBlue rounded-lg p-4 '>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>

                    <a href="#" className='hidden sm:block hover:bg-mediumBlue rounded-lg p-4 '>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
            </div>
            <div>
                <h1 className="font-ubuntu text-7xl font-light">Hola! Soy Juan Pablo</h1>
                <p className="font-ubuntu text-2xl font-medium">Desarrollador Web Full Stack</p>
            </div>
            <div className="mr-8">
                <a href="#" className="text-5xl">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </a>
                
            </div>
        </div>
        
        

    </div>
  )
}

export default Hero