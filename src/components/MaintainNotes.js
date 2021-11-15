import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import GetNotes from './GetNotes';
import CreateNote from './CreateNote';
class MaintainNotes extends React.Component{
    render()
    {

        return(
           
            <div>
        
         
            <GetNotes />
            </div>
            
       
      );
    
    } 

}
    export default MaintainNotes;   

  