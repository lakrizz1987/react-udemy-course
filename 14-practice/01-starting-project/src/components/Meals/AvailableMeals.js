import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';



const AvailableMeals = () => {

  const [DUMMY_MEALS, SET_DUMMY_MEALS] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError,setHttpError] = useState(null);

  useEffect(() => {
    fetch('https://meals-71a53-default-rtdb.firebaseio.com/meal.json')
      .then(res => {
        if(!res.ok){
          throw new Error('Something was wrong!')
        }else{
          return res.json()
        }
      })
      .then(data => {
        Object.values(data)[0].forEach(element => {
          SET_DUMMY_MEALS(oldState => {
            return [...oldState, element]
          })
        });
        setIsLoading(false)
      })
      .catch(err => {
        setHttpError(err.message)
        setIsLoading(false)
      })

  }, [])

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <h2>Loading....</h2>
      </section>
    )
  }

  if(httpError){
    return(
      <section className={classes['error-http']}>
      <h2>{httpError}</h2>
    </section>
    )
  }


  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
