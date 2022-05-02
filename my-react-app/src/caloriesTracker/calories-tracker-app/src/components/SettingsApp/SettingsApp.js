import React, {useState, useEffect} from 'react';
import AppControlsCounter from '../AppControls/AppControlsCounter';
import AppControlsDelete from '../AppControls/AppControlsDelete';
import AppControlsInputs from '../AppControls/AppControlsInputs';
import AppMealsList from '../AppMealsList/AppMealsList';
import AppModal from '../AppModal/AppModal';
import AppMealsFilter from '../AppMealsFilter/AppMealsFilter';
import "../../App.css";
import AppNavBarLogged from '../AppNavBar/AppNavBarLogged';
import AppSettings from '../AppSettings/AppSettings';

const SettingsApp = () => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");

  const[meals, setMeals] = useState([]);
  const[mealName, setMealName] = useState("");
  const[calories, setCalories] = useState(0);
  const[openModal, setOpenModal] = useState(false);
  const[selectedFilter, setSelectedFilter] = useState("");

  // Functions

  const verifyHandler = () =>{
    console.log(email)
  };
/*
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
*/

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
            <AppNavBarLogged />
            <AppSettings verifyHandler={verifyHandler} email={email} password={password}
            setEmail={setEmail}
            setPassword={setPassword}/>
        </div>
    );

}

export default SettingsApp;
