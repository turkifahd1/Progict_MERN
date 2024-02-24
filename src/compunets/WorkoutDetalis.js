const WorkoutDetalis = ({ workout }) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>الحموله (kg):</strong>{workout.load}</p>
            <p><strong>مندوبي:(Reps):</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>

        </div>
    )
}

export default WorkoutDetalis