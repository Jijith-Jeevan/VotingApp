import React from 'react';
import Navbar from '../Components/Navbar';
import Subjects from '../Components/Subjects';

class MainPage extends React.Component {
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
  setFlag = (id) => {
    let sub=this.state.subjectList;
    sub.map(x=>{
      if(x.id==id && x.flag==0){
        return(x.flag=1)
      }
      else if(x.id==id && x.flag==1){
        return(x.flag=0)
      }
      
    })
    localStorage.setItem("subjectList",JSON.stringify(sub));
    console.log(sub)
    console.log(id)
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="subPosition">
          <Subjects subjects={this.state.subjectList}
            setFlag={this.setFlag} />
        </div>
      </div>
    );
  }
}



export default MainPage;
