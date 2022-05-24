import React from "react"
import axios from "axios"

class Instructors extends React.Component {
    constructor() {
        super()
        this.state = {
            instructors: [],
        }
    }
    async componentDidMount() {
        try {
            const path = "http://localhost:5000/api";
            let { data } = await axios.get(`${path}/instructors`)
            this.setState({
                instructors: data
            })
        } catch (error) {
            console.log("error", error)
        }

    }

    render() {
        const { instructors } = this.state
        return (
            <div className="instructors-container">
                {instructors.length >= 1 ? 
                instructors.map(instructor => { 
                    return (
                        <div> 
                            <h2>{instructor.firstname}</h2>
                            <p>{instructor.lastname}</p>
                            <p>{instructor.department}</p>
                        </div>
                    ) 
                }): "There are no courses available! You are doomed for failure"}
            </div>
        )
    }

}
export default Instructors;