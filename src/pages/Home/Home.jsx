import React from 'react'
import HyperLinks from '../../components/Hyperlinks/Hyperlinks'
import './HomeStyle.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-page'>
                <section className='img-sec'>
                    <img src='./hero.png' alt='a boy on a computer' />
                </section>
                <section className='text-sec'>
                    <span className='hdr-text'>Take control of your earnings effortlessly. With our intuitive platform, track your daily entries, crunch the numbers, and unlock insights with ease. Welcome to Ma3ashi App, tailored for you.</span>
                    <a className='start-btn' href='/signup'>Start Now!</a><br />
                    <span className='bottom-text'>already a member? <HyperLinks linkText={'Login instead'} linkHref={"/signin"} />  </span>
                </section>
            </div>

        </div>
    )
}

export default Home