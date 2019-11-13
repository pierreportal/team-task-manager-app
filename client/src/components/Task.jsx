import React, { Component } from 'react'
import axios from 'axios'
import Draggable, { DraggableCore } from 'react-draggable';



export default class Task extends Component {
  state = {
    id: this.props.task._id,
    title: this.props.task.title,
    description: this.props.task.description,
    position: this.props.task.position,
    createdBy: this.props.task.createdBy,
    user: this.props.user,
    done: this.props.task.done
    // position: [0, 0]
  }
  handleDelete = () => {
    axios.get(`/task/delete/${this.state.id}`).then(() => {
      this.props.updateTasks()
    }).catch(err => console.log(err))
  }
  handleDrag = e => {
    let pos = [(e.pageX - 100), (e.pageY - 100)]
    this.setState({
      position: pos
    }, () => console.log(this.state.position))
  }
  updatePosition = () => {
    axios.post(`/task/edit/${this.state.id}`, { position: this.state.position }).then(response => {
      //
    }).catch(err => console.log(err))
  }
  changeStatus = () => {
    this.setState({
      done: !this.state.done
    })
  }
  render() {

    return (
      <Draggable
        // axis="x"
        // handle=".handle"
        defaultPosition={{ x: this.state.position[0] || 0, y: this.state.position[1] || 0 }}
        position={{ x: this.state.position[0], y: this.state.position[1] }}
        // grid={[25, 25]}
        // scale={1}
        // onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.updatePosition}
      >
        <div className='task'>
          <div className='task-header'>
            <div className="team-ico-small" style={{ 'backgroundImage': `url(${this.state.createdBy.picture})` }}></div>
            <p>{this.state.title}</p>
            {this.state.done === true ? <span onClick={this.changeStatus} className="task-status-done">DONE</span> : <span onClick={this.changeStatus} className="task-status-todo">TO DO</span>}

            <button onClick={this.handleDelete}>x</button>
          </div>
          {this.state.done === true ? <div className='task-body-done'>
            <p>{this.state.description}</p>
          </div>
            :
            <div className='task-body-todo'>
              <p>{this.state.description}</p>
            </div>}


        </div>
      </Draggable>
    )
  }
}
