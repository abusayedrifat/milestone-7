import { useState } from "react"

export default function Team() {

        const [team, setTeam] = useState(11)

        const handleAdd = () =>{
            const newTeam = team +1;
            setTeam(newTeam)
        }
        const handleReduce = () =>{
            setTeam(team - 1)
        }

    const teamStyle = {
        border:'2px solid purple',
        padding:'20px',
        margin:'20px',
        borderRadius:'12px'

    }
    return(
        <div style={teamStyle}>
            <h3>Players : {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Remove</button>
        </div>
    )
}