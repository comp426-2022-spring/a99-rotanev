import React, {useState, useEffect} from 'react';
import AppControlsCounter from '../AppControls/AppControlsCounter';
import AppControlsDelete from '../AppControls/AppControlsDelete';
import AppControlsInputs from '../AppControls/AppControlsInputs';
import AppMealsList from '../AppMealsList/AppMealsList';
import AppModal from '../AppModal/AppModal';
import AppMealsFilter from '../AppMealsFilter/AppMealsFilter';
import "../../App.css";
import AppNavBarLogged from '../AppNavBar/AppNavBarLogged';

const App = () => {
 
  const[meals, setMeals] = useState([]);
  const[mealName, setMealName] = useState("");
  const[calories, setCalories] = useState(0);
  const[openModal, setOpenModal] = useState(false);
  const[selectedFilter, setSelectedFilter] = useState("");

  // Functions
  const addMealsHandler = () => {
    const oldMeals = meals ? [...meals] : [];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random()*1000),
    };

    const newMeals = oldMeals.concat(meal);

    if(calories <= 0 || mealName == "") {
      setOpenModal(true);
    } else {
      setMeals(newMeals);
      localStorage.setItem("meals",JSON.stringify(newMeals));
    }
    setMealName("")
    setCalories(0)
  };

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal)=>meal.id !== id);
    setMeals(newMeals);
    localStorage.setItem("meals",JSON.stringify(newMeals));
  }

  const deleteAllMeals = () => {
    setMeals([]);
    localStorage.clear();
  }

  const total = meals !== null ? meals
  .map((meal)=>meal.calories)
  .reduce((acc, value)=>acc+ +value, 0) : 0;

  useEffect(()=>{
    const oldState = [...meals];
    if(selectedFilter === "Ascending"){
      const ascendingMeals = oldState.sort((a, b)=>a.calories - b.calories);
      setMeals(ascendingMeals);
    }else if(selectedFilter === "Descending"){
      const descendingMeals = oldState.sort((a, b)=>b.calories - a.calories);
      setMeals(descendingMeals);
    }
  },[selectedFilter]);

  
  useEffect(()=>{
    const localStorageMeals = JSON.parse(localStorage.getItem("meals"));
    setMeals(localStorageMeals);
  }, [setMeals]);


  // Return
    return (
      <div className="App">
        {/* <AppBar /> */}
        {/* <AppNavBar /> */}
        <AppNavBarLogged />
        { openModal ? <AppModal setOpenModal={setOpenModal} /> : ""}
        <AppControlsCounter total={total} />
        <AppControlsDelete deleteAllMeals={deleteAllMeals}/>
        <AppControlsInputs addMealsHandler ={addMealsHandler} mealName={mealName} calories={calories}
        setMealName={setMealName}
        setCalories={setCalories}/>
  
        <div className='app__meals__container'>
          <AppMealsFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
          <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler}/>
        </div>
        
      </div>
    );
}

export default App;
