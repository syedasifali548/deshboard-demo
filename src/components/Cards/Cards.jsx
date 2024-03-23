import React from 'react'
import './cards.css'
import icons from '../../assets/images/icon-5.png'  
import Chart from '../../components/Charts/Chart'

const Cards = () => {
  const cardDataa=[
    {
      title: "People Entery Per Hour",
      numbers: "3657485",
      image :icons
    },
    {
      title: "People Exit Per Hour",
      numbers: "3657485",
      image :icons
    },
    {
      title: "Alaram Per Hour",
      numbers: "3657485",
      image :icons
    },
  ]
  return (
    <>
    <div className='card_container'>
    {
      cardDataa.map((data,index)=>(
        <div className="card_main" key={index}>
        <div className="white_card"></div>
        <div className="card_chart">
        <Chart/>
        </div>
        <div className="cardContent">
        <h6>{data.title}</h6>
        <h5>{data.numbers}</h5>
        </div>
        <img src={data.image} alt='image'/>
        </div>
      ))
    }
    
    
    </div>
    </>
  )
}

export default Cards