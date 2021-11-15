import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Dashboardbody from './components/Dashboard.body';
import MaintainNotes from './components/MaintainNotes';
import UserActivity from './components/UserActivity.js';
import Feedback from './components/Feedback';
import Header from './components/Header';
import Fav from './components/Fav';
import PostQueries from './components/PostQueries';

function App() {
  return (
    <div className="App"> 
     <div style={{backgroundColor:'#FFFBDF' }}>
     <BrowserRouter>
          
            <Header />
           
            <Switch>
            <Route exact path ="/"  component={Dashboardbody} />
            <Route path ="/MaintainNotes" component={MaintainNotes} />
            <Route path="/PostQueries" component={PostQueries} />
            <Route path ="/Feedback"       component={Feedback}/>
            <Route path ="/UserActivity"       component={UserActivity}/>
            <Route path ="/Fav"       component={Fav}/>
            </Switch>
            
            
            </BrowserRouter>
            <div />
            <div />
            <div />
            <div />
            
           
            
            
           
            
            </div> 
            
    </div>
    
  );
}
export default App;

