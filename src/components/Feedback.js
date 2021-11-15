import React,{Component} from 'react';



class Feedback extends Component{  
    render()
    {
        
        return(
           <div>
               <div>
                   <div></div>
               </div>
               <h3 style={{color:"brown"}}>Feedbacks</h3> 
               <table class="table">
                <thead class="table-dark">
               
                      
                           <tr></tr>
                           <tr></tr>
                           <tr>
                           <th colSpan>Username</th>
                           <th colspan>Feedback</th>
                           <th colSpan>Score</th>
                          </tr>
                          </thead>
                       
                   

               </table>
            
            
              
           </div>
        );
    };
}

export default Feedback;
