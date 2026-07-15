import { useState } from 'react'
import Explore from '../../Components/ExploreMenu/Explore'
import Header from '../../Components/Header/Header'
import './Home.css'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
const[category,setCategory]=useState("All");

  return (
    <div>
<Header/>
<Explore category={category}setCategory={setCategory}/>
<FoodDisplay category={category}/>
<AppDownload/>
    </div>
  )
}

export default Home