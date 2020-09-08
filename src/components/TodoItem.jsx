import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            desc2: this.props.name,
            sel2: this.props.priority,
            isUpdating: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.TodoItemColor = this.TodoItemColor.bind(this);
        this.FormColor = this.FormColor.bind(this);
        this.completedStrikethrough = this.completedStrikethrough.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.desc2 === '') return;
        this.props.updateTask(this.props.id, this.state.desc2, this.state.sel2);
        this.setState({ isUpdating: false });
    }

    handleDelete() {
        this.props.deleteTask(this.props.id);
    }

    TodoItemColor(priority) {
        if (priority == 1) {
            return 'list-group-item-default'
        } else if (priority == 2) {
            return 'list-group-item-danger'
        } else if (priority == 3) {
            return 'list-group-item-warning'
        } else if (priority == 4) {
            return 'list-group-item-success'
        }
    }

    FormColor(priority) {
        if (priority == 1) {
            return 'list-group-item-default clearfix'
        } else if (priority == 2) {
            return 'list-group-item-danger clearfix'
        } else if (priority == 3) {
            return 'list-group-item-warning clearfix'
        } else if (priority == 4) {
            return 'list-group-item-success clearfix'
        }
    }

    completedStrikethrough (completed) {
        if (completed) {
            return "line-through";
        } else {
            "none"
        }
    }

    render() {
        const updatingTemplate = (
            <form 
                className={this.FormColor(this.state.sel2)} 
                onSubmit={this.handleSubmit} 
                id='update-form' 
                key={this.props.id}
            >
                <div className='form-group'>
                    <label htmlFor={this.props.id}><strong>Description</strong></label>
                    <textarea 
                        className='update-todo-text form-control' 
                        name='desc2'
                        type='text' 
                        value={this.state.desc2}
                        onChange={this.handleInputChange}
                    ></textarea>
                </div>
    
                <div className='form-group'>
                    <label htmlFor={this.props.id}><strong>Priority</strong></label>
                    <select 
                        className='update-todo-priority form-control' 
                        name='sel2' 
                        type='select'
                        value={this.state.sel2}
                        onChange={this.handleInputChange}
                    >
                        <option value='1'>Select a Priority</option>
                        <option value='2'>High Priority</option>
                        <option value='3'>Medium Priority</option>
                        <option value='4'>Low Priority</option>
                    </select>
                </div>
    
                <div>
                    <button className='update-todo btn btn-success pull-right' type='submit'>Save</button>
                </div>
            </form>
        );
    
        const viewTemplate = (
            <div className={this.TodoItemColor(this.props.priority)} id='view-template'>
                <label className='checkbox-inline list-group-item-text' htmlFor={this.props.id}>
                    <input 
                        id={this.props.id} 
                        key={this.props.id} 
                        type='checkbox' 
                        value='1' 
                        defaultChecked={this.props.completed}
                        onChange={() => this.props.toggleTaskCompleted(this.props.id)}
                    /><strong 
                        className='check-label'
                        style={{ textDecoration: this.completedStrikethrough(this.props.completed) }}
                    >
                        {this.props.name}
                    </strong>
                </label>
                
                <a 
                    className='delete-todo pull-right' 
                    href='#'
                    onClick={this.handleDelete}
                >
                    <span className="glyphicon glyphicon-trash text-danger"></span>
                </a>
    
                <a 
                    className='edit-todo pull-right' 
                    href='#'
                    onClick={() => this.setState({isUpdating: true})}
                >
                    <span className="glyphicon glyphicon-edit"></span>
                </a>
            </div>
        );

        return (
            <li className='todo list-group-item'>
                {this.state.isUpdating ? updatingTemplate : viewTemplate}
            </li>
        );
    }
}

export default TodoItem;