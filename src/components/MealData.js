import React from 'react'
import "../App.css"
const MealData = ({fetchData}) => {
  
    let nutrient=fetchData.nutrients;
    
 
  return (
    <div>
        <section className='nuetrients'>
            <h3 className='text-center text-info'>Macros</h3>
            <ul className='d-flex flex-row justify-content-around flex-wrap'>
                <li>calories : {nutrient.calories.toFixed(0)} </li>
                <li>carbohydrates : {nutrient.carbohydrates.toFixed(0)} </li>
                <li>protein : {nutrient.protein.toFixed(0)} </li>
                <li>fat : {nutrient.fat.toFixed(0)} </li>
            </ul>
        </section>
    
    </div>

  )
}

export default MealData
