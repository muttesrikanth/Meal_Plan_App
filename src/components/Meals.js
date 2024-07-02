import React,{useContext} from 'react'
import { store } from '../App';
import '../App.css'
const Meals = () => {
    
const [fetchdata]=useContext(store);
const getCardClass=(index)=>{
if(index%2===0){
  return 'card bg-primary p-4  m-4 card_border'
}
else{
  return 'card bg-success p-4 m-4 align-right card_border'
}

}



console.log(fetchdata.meals)
  return (
    <div>
      {fetchdata.meals.map((data,index)=>{
        
        return( 
        <div className={getCardClass(index)}>
            <h4 className='text-warning' key={index}>{data.title}</h4>
            <img className='food_image' src={`https://spoonacular.com/recipeImages/${data.id}-556x370.jpg`} alt='noimage'/>
            <ul className='p-3 text-light'>
                <li>Preperation Time : {data.readyInMinutes}mins. </li>
                <li>Number of Servings : {data.servings}</li>
            </ul>
            <a href={data.sourceUrl}><button className='btn btn-danger'>Go to Recipes</button></a>
        </div> )

      })}
    </div>
  )
}

export default Meals
