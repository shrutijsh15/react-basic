import React, { Component } from 'react';
import _ from "lodash";

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTaskEditor: false,
            tasks: [],
            editableTaskId: 0
        }
    }

    displayTaskEditor = (flag = true) => {
        this.setState({showTaskEditor: flag});
    }

    addCard = () => {
        let tasks = [...this.state.tasks];
        tasks.push({id: (new Date().getTime())+1, title: this.textarea.value});
        this.setState({
            tasks: tasks
        });
        this.displayTaskEditor(false);
    }

    renderEditor = function(){
        return(
            <div>
                <textarea 
                    placeholder="Enter a title for this card" 
                    ref={node => this.textarea = node}
                />
                <div>
                    <button className="btn" onClick={this.addCard}>Add Card</button><span onClick={() => this.displayTaskEditor(false)}>X</span>
                </div>
            </div>
        )
    }

    setEditMode = (id) =>{
        this.setState({editableTaskId: id});
    }

    updateTask = (id) => {
        let tasks = this.state.tasks;
        let index = _.findIndex(tasks, {id: id});
        let task = tasks[index];
        task.title = this.textarea.value;
        tasks[index] = task;
        console.log(tasks, id)
        this.setState({
            tasks: tasks,
            editableTaskId: 0
        })
    }

    deleteTask = (id)=>{
        let tasks = this.state.tasks;
        tasks = _.filter(tasks, function(item){
            console.log(item.id)
            return item.id!=id;
        });
        this.setState({tasks: tasks});
    }

    updateValue = (ev) => {
        this.setState({value: ev.target.value});
    }

    renderTasks = () => {
        let tasks = this.state.tasks;
        let editableTaskId = this.state.editableTaskId;
        return(
            tasks.map(task => {
                return(              
                    <div className="tile" key={task.id}>      
                        {editableTaskId == task.id
                        ? <div>
                                <div className="floatL"><input type="textarea"  ref={node => this.textarea = node}/></div>
                                <div className="floatR">
                                    <span style={{"marginRight": "10px"}} onClick={() => this.updateTask(task.id)}>save</span>
                                </div>
                                <div style={{"clear": "both"}}/>
                            </div>
                        : <div>
                            <div className="floatL">{task.title}</div>
                            <div className="floatR">
                                <span style={{"marginRight": "10px"}} onClick={() => this.setEditMode(task.id)}>Edit</span>
                                <span onClick={() => this.deleteTask(task.id)}>X</span>
                            </div>
                            <div style={{"clear": "both"}}></div>
                        </div>}
                    </div>
                )
            })
        )
    }

    render(){
        let {showTaskEditor} = this.state;
        return(
            <div> 
               <div className="header">Dashboard</div>
               <div className="flex mT30">
                  <div className="flexItem">
                    <div className="bold">Things to do</div>
                    { this.renderTasks() }
                    { showTaskEditor ? this.renderEditor() : <div onClick={() => this.displayTaskEditor()}>+ Add another card</div>}
                  </div>
                  <div className="flexItem">
                    <div className="bold">Doing</div>
                  </div>
                  <div className="flexItem">
                    <div className="bold">Done</div>
                  </div>
               </div>
            </div>
        )
    }
}