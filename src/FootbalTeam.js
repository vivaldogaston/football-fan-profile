import React from 'react'
import {Component} from 'react'

function FootballTeam(props){
    const teams=[
        {id:1,name:"Real Madrid",keeper:"Cortouis",right:"Carvajal", left:"Marcelo",midfielder:"Modric",striker:"Benzema"},
        {id:2,name:"Manchester United",keeper:"De Gea",right:"Lindelof", left:"Maguire",midfielder:"Pogba",striker:"Rashford"},
        {id:3,name:"Sporting CP",keeper:"Adán",right:"Nuno Mendes", left:"João Pereira",midfielder:"João Palhinha",striker:"Cabral"},
    ]
    const x=teams.filter(team=>team.id===props.team);
 return(
     <>

        {
            
            x.map((team,index)=>(
                <div id="team" key={`${team.name}-${index}`}>
                    <h1 style={{textAlign:"center"}}>{team.name}</h1>
                    <label>Keeper: {team.keeper}</label>
                    <label>Right Back: {team.right}</label>
                    <label>Left Back: {team.left}</label>
                    <label>Midfielder: {team.midfielder}</label>
                    <label>Striker: {team.striker}</label>
                </div>
            ))
        }
        
     
     </>
 )
}
export default FootballTeam;
