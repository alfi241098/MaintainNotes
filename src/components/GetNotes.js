import React,{Component} from 'react';
import axios from 'axios';
import note1 from './Images/notepad.png';
import CreateNote from './CreateNote';
class GetNotes extends Component{
    constructor()
    {
        super();
        this.state = {note:[]}
    }

    componentDidMount() {  
        axios.get('https://localhost:44353/api/notes').then(response => {  
            //console.log(response.data);  
            this.setState({  
                note: response.data  
            });  
        });  
    }  
   
    
    render()
    {
        return(
            
            <div className="container mt-5">
            
              <div className="col-md-6">
              
              <div className="d-flex justify-content-center row">
              <img src={note1} style={{height:'40px',width:'80px' }}></img>
                    <h2 style={{color:'brown',textAlign:'center'}}>MY STICKY NOTES</h2>
                    
                </div>
                {this.state.note.map(note =>
                <>
                <center>
               
               <div style={{backgroundColor:'#FFF9B0',height:'150px' ,width:'200px',color:'#f58634'}}>{note.Value}</div>
                <br />
                <br />
               </center>    
              
               </>
                )}
                
            </div> 
              
            <CreateNote />
        </div>


);

}

}
export default GetNotes;