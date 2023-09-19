import React, {useEffect} from 'react'
import './main.css'

// IMPORT PICTURES
import img1 from '../../Assets/pexels-dominika-roseclay-1252500.jpg'
import img2 from '../../Assets/pexels-david-bartus-586687.jpg'
import img3 from '../../Assets/pexels-porapak-apichodilok-346885.jpg'
import img4 from '../../Assets/pexels-leah-kelley-3935702.jpg'
import img5 from '../../Assets/pexels-till-daling-12112880.jpg'
import img6 from '../../Assets/pexels-michael-block-3225531.jpg'
import img7 from '../../Assets/pexels-jeremy-bishop-8241135.jpg'
import img8 from '../../Assets/pexels-josh-hild-2422259.jpg'

// IMPORT ICONS
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

// IMPORT AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

// POST THE ARRAY NAMED DATA
const Data=[
  {
    id:1,
    imgSrc: img1,
    desTitle : 'Bore Bore',
    location :'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'lorem Ipsum in liber tempor inc tempor ullamcorper lore mauris vel aug dui sed magna aliqu sapien sed magna aliquet aug duis sed magna aliquet.'
  },

  {
    id:2,
    imgSrc: img2,
    desTitle : 'Bore Bore',
    location :'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'lorem Ipsum in liber tempor inc tempor ullamcorper lore mauris vel aug dui sed magna aliqu sapien sed magna aliquet aug duis sed magna aliquet.'
  },

  {
    id:3,
    imgSrc: img3,
    desTitle : 'Bore Bore',
    location :'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'lorem Ipsum in liber tempor inc tempor ullamcorper lore mauris vel aug dui sed magna aliqu sapien sed magna aliquet aug duis sed magna aliquet.'
  },

  {
    id:4,
    imgSrc: img4,
    desTitle : 'Bore Bore',
    location :'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'lorem Ipsum in liber tempor inc tempor ullamcorper lore mauris vel aug dui sed magna aliqu sapien sed magna aliquet aug duis sed magna aliquet.'
  },
  
  {
    id:5,
    imgSrc: img5,
    desTitle : 'Bore Bore',
    location :'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'lorem Ipsum in liber tempor inc tempor ullamcorper lore mauris vel aug dui sed magna aliqu sapien sed magna aliquet aug duis sed magna aliquet.'
  },
  
  {
    id:6,
    imgSrc: img6,
    desTitle : 'Bore Bore',
    location :'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'lorem Ipsum in liber tempor inc tempor ullamcorper lore mauris vel aug dui sed magna aliqu sapien sed magna aliquet aug duis sed magna aliquet.'
  },

  {
    id:7,
    imgSrc: img7,
    desTitle : 'Bore Bore',
    location :'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'lorem Ipsum in liber tempor inc tempor ullamcorper lore mauris vel aug dui sed magna aliqu sapien sed magna aliquet aug duis sed magna aliquet.'
  },
  
  {
    id:8,
    imgSrc: img8,
    desTitle : 'Bore Bore',
    location :'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'lorem Ipsum in liber tempor inc tempor ullamcorper lore mauris vel aug dui sed magna aliqu sapien sed magna aliquet aug duis sed magna aliquet.'
  },
]


const Main = () => {
  // LETS CREATE A REACT HOOK TO ADD A SCROLL ANIMATIONS
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, desTitle, location, grade, fees, 
            description}) => {
              return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={desTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{desTitle}</h4>

                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className='name'>{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                  </div>
                </div>
              )
          })
        }
      </div>

    </section>
  )
}

export default Main
