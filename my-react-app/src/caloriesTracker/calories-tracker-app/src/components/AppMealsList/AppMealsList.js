import React from 'react'

const AppMealsList = ({meals}) => {
    return (
        <div className='app__meals__container__wrapper'>
            {meals.map((meal,index)=>(
                <div key={index} className="app__meals__container__wrapper__inner">
                    <div>{`${meal.mealName} : ${meal.calories}`}</div>
                    <div>
                        <button classname="btn__delete__meal">Delete</button>
                    </div>
                </div>

            ))}


        </div>
    )
}

export default AppMealsList