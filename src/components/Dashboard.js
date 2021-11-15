import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Dashboardbody from './Dashboard.body';


class Dashboard extends Component{
    render(){
        return(<div><Header />
        <Dashboardbody />
    <Footer />
 
    </div>)
    }
}
export default Dashboard;