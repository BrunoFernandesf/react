import Instructions from "./components/recipe-page/Instructions.jsx"
import Ingredients from "./components/recipe-page/Ingredients.jsx"
import Intro from "./components/recipe-page/Intro.jsx"
import Preparation from "./components/recipe-page/Preparation.jsx"
import Nutrition from "./components/recipe-page/Nutrition.jsx"

function App() {

  return (
    <>
        <Intro></Intro>
        <Preparation></Preparation>
        <Ingredients></Ingredients>
        <Instructions></Instructions>
        <Nutrition></Nutrition>
    </>
  )
}

export default App
