import React from 'react';
import Navbar from '../Components/Navbar';
import VoteList from '../Components/VoteList';

class VotePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      subjectList: []
    }
  }
  componentDidMount() {
    let list = (localStorage.getItem('subjectList'))
    if (list) {
      this.setState({ subjectList: JSON.parse(list) })
    }
  }
  setCount = (id) => {
    let sub=this.state.subjectList;
    sub.map(x=>{
      if(x.id==id){
        return(x.count=x.count+1)
       
      }
      })
    localStorage.setItem("subjectList",JSON.stringify(sub));
    console.log(sub)
    console.log(id)
  }
  render(){
    return (
      <div>
        <div className="container">
    <Navbar />
    <VoteList subjectList={this.state.subjectList}
              setCount={this.setCount}/>
    </div>
    
    </div>
  )
  }
  
}


export default VotePage;