import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='' />
        <h1><span>I&apos;m Alex Bennett,</span> frontend developer based in USA.</h1>
        <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Apple, Tesla and Microsoft</p>
         <div className='hero-action'>
            <div className='hero-connect'>
              <AnchorLink className='anchor-link' offset={50} href="#contact" > Connect with me</AnchorLink>
            </div>
            <div className='hero-resume'>  
                  My resume
            </div>
         </div>
    </div>
  )
}

export default Hero
