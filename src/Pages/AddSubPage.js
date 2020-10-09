import Navbar from '../Components/Navbar';
import AddSubForm from '../Components/AddSubjectForm';
import React from 'react';
import {Redirect} from 'react-router-dom';

class AddSubPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      subname:'',
      subDecription:'',
    }
  }
  setSub=(e)=>{
    this.setState({subname:e.target.value})
    console.log(this.state.subname)
 }
 setDescription=(e)=>{
   this.setState({subDecription:e.target.value})
 }
 addSub=()=>{
  if(localStorage.getItem("subjectList")==null){
    localStorage.setItem("subjectList", '[]');
  }
  let old_list=JSON.parse(localStorage.getItem('subjectList'));
  //let lastId=old_list[old_list.length-1].id;
  let lastId=old_list.length;
  let sub={id:lastId+1,subName:this.state.subname,subDesc:this.state.subDecription,flag:0,count:0}
  old_list.push(sub);
  localStorage.setItem("subjectList", JSON.stringify(old_list));
  //localStorage.setItem("Description", desc);
  //console.log(localStorage.subjectList[5]);
 }

  render(){
  return (
      <div>
    <Navbar />
    <AddSubForm addSub={this.addSub}
                setSub={this.setSub}
                setDesc={this.setDescription}/>
    </div>
  );
}
}

export default AddSubPage;
