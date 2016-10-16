import React, { Component } from 'react';
import CounterButton from './CounterButton';
import logo from './logo.svg';
import './App.css';

let count =100;

class App extends Component {
  constructor()
  {
      super();
        this.state={

          count:0,
          todolist: [{todo:'aaa'},{todo:'bbb'}],
          listfield:''


        };



  }

  getValueListField = (e) => {
      this.setState({listfield: e.target.value}, function(){

        console.log(this.state.listfield);
      });

    }
  //let vs var ..let hanya bisa dipakai di blocknya sendiri {} var scopenya lebih gede
  

  render() {
   
    let count = this.state.count;
    let inc = () => {
     // this.setState({count: count + 1});

    }

    let deleteTodoList = (index) => {
      let allTodoList = this.state.todolist;
      allTodoList.splice(index, 1);
      this.setState({
        todolist: allTodoList        
      })
    }

    let myTodoList = () => {

      // alert("haiiiii");
      let allTodoList = this.state.todolist;
      allTodoList.push({todo: this.state.listfield});
      this.setState({

        todolist: allTodoList, 
        listfield: ''
      })



      console.log(this.state.todolist);
    }


    return (
        <div>
            <input type="text" name="myTodo" value={this.state.listfield} onChange={this.getValueListField.bind(this)}/>
            <input type="button" value="submit" onClick={myTodoList} /><br/>  

            {
              this.state.todolist.map(function(record,index){
                return <div>
                    <span key={index}>{record.todo}</span>
                    &nbsp;<a href='#' onClick={deleteTodoList}>hapus</a>
                </div>;
              })
            }
        </div>
    );  
  }
}

export default App;
