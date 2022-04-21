import './App.css';
import React, {useState, useEffect} from 'react';
import AppBar from './components/AppBar/AppBar';
import AppControlsCounter from './components/AppControls/AppControlsCounter';
import AppControlsDelete from './components/AppControls/AppControlsDelete';
import AppControlsInputs from './components/AppControls/AppControlsInputs';
import AppMealsList from './components/AppMealsList/AppMealsList';

const App = () => {
  const[meals, setMeals] = useState([]);
  const[mealName, setMealName] = useState("");
  const[calories, setCalories] = useState(0);
  const[openModal, setOpenModal] = useState(false);

  const addMealsHandler = () => {
    const oldMeals = [...meals];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random()*1000),
    };

    const newMeals = oldMeals.concat(meal);
    if(calories <= 0 || mealName == "") {
      alert("must not be empty");
    } else {
      setMeals(newMeals)
    }
    setMealName("")
    setCalories(0)
  };

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal)=>meal.id !== id);
    setMeals(newMeals);
  }

  return (
    <div className="App">
      <AppBar />
      <AppControlsCounter />
      <AppControlsDelete />
      <AppControlsInputs addMealsHandler ={addMealsHandler} mealName={mealName} calories={calories}
      setMealName={setMealName}
      setCalories={setCalories}/>

      <div className='app__meals__container'>
        <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler}/>
      </div>
      
    </div>
  );
}

export default App;
