import React from "react"
import axios from "axios"

class Courses extends React.Component {
    constructor() {
        super()
        this.state = {
            courses: [],
        }
    }
    async componentDidMount() {
        try {
            const path = "http://localhost:5000/api";
            let { data } = await axios.get(`${path}/courses`)
            this.setState({
                courses: data
            })
        } catch (error) {
            console.log("error", error)
        }

    }

    render() {
        const { courses } = this.state
        return (
            <div className="courses-container">
                {courses.length >= 1 ? 
                courses.map(course => { 
                    return (
                        <div> 
                            <h2>{course.title}</h2>
                            <p>{course.timeslot}</p>
                            <p>{course.location}</p>
                        </div>
                    ) 
                }): "There are no courses available! You are doomed for failure"}
            </div>
        )
    }

}
export default Courses;