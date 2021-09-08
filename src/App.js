import profile from './user (8).png';
import './App.css';
import User from './User';
import FootballTeam from './FootbalTeam';
import { useState } from 'react';
function App() {
  const [team,setTeam]=useState(1);
  const [textbox,setTextBox]=useState("");
  const selectTeam=()=>{
    if(textbox==="real madrid")
      setTeam(1)
    else if(textbox==="manchester united")
      setTeam(2)
    else if(textbox==="sporting cp")
      setTeam(3)
    else
      alert("We don't have this team, check your input");
  }
  return (
    <div className="App">
      <h1>User Profile</h1>
      <div id="profile">
        <User img={profile}/>
        <FootballTeam team={team}/>
      </div>
      <div style={{marginBottom:"20px"}}>
        <input type="search" value={textbox} onChange={(event)=>setTextBox(event.target.value.toLocaleLowerCase())} id="textbox" placeholder="Select a team"></input>
        <button className="button" onClick={()=>selectTeam()}>Select</button>
      </div>
      <button className="button" onClick={()=>setTeam(1)}>Real Madrid</button>
      <button className="button" onClick={()=>setTeam(2)}>Manchester United</button>
      <button className="button" onClick={()=>setTeam(3)}>Sporting CP</button>
    </div>
  );
} 

export default App;
