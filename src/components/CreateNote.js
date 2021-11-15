import React,{Component} from 'react'  
import axios from 'axios'; 
class CreateNote extends React.Component {  
  constructor(props){
    super(props);
    this.state={
      note:[],
      message:""
    }
  }
  
  FunctionSubmit=(e)=>{
    e.preventDefault()
    axios.post('https://localhost:44353/api/notes',this.state,{headers:{"Access-Control-Allow-Origin":"*"} })
    .then(response=>{
        console.log(response.data);
        this.setState({note:response.data});
    })
    .catch(error=>{
        console.log(error);
        
    })
    this.setState(
        { 
        message:"You have Successfully Created the Note"

    })
    document.getElementById("form").innerHTML=document.getElementById("result").innerHTML;
  }

    Function2=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
    }
  
  render(){
    const{Value}=this.state;
  return (  
    <div className="container m-3 p-3">  
      <div className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div className="card-body p-0">  
          <div className="row">  
            <div className="col-lg-12">  
              <div className="p-5">  
                <div className="text-center">  
                  <h1 className="h4 text-gray-200 mb-4">Create Note</h1>  
                </div>  
                <form onSubmit={this.FunctionSubmit} className="note" id="form">  
                  <div className="form-group row">  
                    <div className="col-sm-6 mb-3 mb-sm-0">

                      <textarea name="Value" onChange={this.Function2} value={Value} className="form-control" id="Value" placeholder="Enter Content" rows="10" cols="1000" />
                      <div name="dateTime" onChange={this.Function2} value={new Date().toLocaleString()}></div>
                     
                    </div>
                  <button type="submit" className="btn btn-success" 
                  onClick={this.FunctionSubmit}>  
                    SUBMIT 
                </button> 
                  <hr />  
                </div>  
                <hr />  
              </form>  
            </div>  
          </div>  
        </div>  
      </div> 
      <div id="result">{this.state.message}</div>
       
    </div>  
    </div>
  )  
}  
} 
export default CreateNote; 