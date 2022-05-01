import './App.css';
import React, {useState, useEffect} from 'react';
import AppBar from './components/AppBar/AppBar';
import AppNavBar from './components/AppNavBar/AppNavBar';
import AppControlsCounter from './components/AppControls/AppControlsCounter';
import AppControlsDelete from './components/AppControls/AppControlsDelete';
import AppControlsInputs from './components/AppControls/AppControlsInputs';
import AppMealsList from './components/AppMealsList/AppMealsList';
import AppModal from './components/AppModal/AppModal';
import AppMealsFilter from './components/AppMealsFilter/AppMealsFilter';
import AppSignUp from './components/AppSignUp/AppSignUp';
import AppLogIn from './components/AppLogIn/AppLogIn';

const App = () => {
  const [currentPage, setCurrentPage] = useState("signup");

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const[meals, setMeals] = useState([]);
  const[mealName, setMealName] = useState("");
  const[calories, setCalories] = useState(0);
  const[openModal, setOpenModal] = useState(false);
  const[selectedFilter, setSelectedFilter] = useState("");

  // Functions
  function renderSwitch(page){
    switch(page){
      case "login":
        return (
          <div className="App">
            <AppBar />
            <AppNavBar 
              setCurrentPage={setCurrentPage}
            />
            <AppSignUp
              signUp={signUp}
              firstname={firstname} setFirstName={setFirstName} 
              lastname={lastname} setLastName={setLastName} 
              email={email} setEmail={setEmail}
              birthday={birthday} setBirthday={setBirthday} 
              password={password} setPassword={setPassword} 
              confirmpassword={confirmpassword} setConfirmPassword={setConfirmPassword}
              setCurrentPage={setCurrentPage}
            />
          </div>
        );
 
      case "signup":
        return (
          <div className="App">
            <AppBar />
            <AppNavBar 
              setCurrentPage={setCurrentPage}
            />
            <AppLogIn />
          </div>
        );
       
      case "caloriecounter":
        return (
          <div className="App">
            <AppBar />
            <AppNavBar 
              setCurrentPage={setCurrentPage}
            />
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
  }

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

  const signUp = (setCurrentPage) =>{
    if(password==confirmpassword){
      setCurrentPage("login");
    }
    console.log("email went through")

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

  return renderSwitch(currentPage)
}

export default App;