import { useEffect,useState } from "react"
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

//componets
import WorkoutDetalis from '../compunets/WorkoutDetalis'
import WorkoutFrom from '../compunets/workoutFrom'




const Home =()=>{
    const[workouts,setworkouts] =useState(null)
    // const {workouts,dispatch}=useWorkoutsContext()

  
    useEffect(()=>{
        const fetchWorkuots =async ()=> {
            const response =await fetch('/api/workouts')
            const json =await response.json()

            if(response.ok)
            {
                
             setworkouts(json)
            }
        }
        fetchWorkuots()
    },[workouts])

    return(
        <div className="home">
           <div className="workouts">
            {workouts && workouts.map((workout)=>(
             
             <WorkoutDetalis key={workout._id} workout={workout}/>
            ))}
           </div>

           <WorkoutFrom/>

        </div>
    )
}

export default Home