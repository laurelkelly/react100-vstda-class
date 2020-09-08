import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            desc1: '',
            sel1: '1'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.desc1 === '') return;
        this.props.addTask(this.state.desc1, this.state.sel1);
        this.setState({
            desc1: '',
            sel1: '1'
        });
    }

    render() {
        return (
            <form className='panel panel-default' onSubmit={this.handleSubmit}>
                <div className='panel-heading'>Add New Todo</div>
                <div className='panel-body'>
                    <div className='form-group'>
                        <label htmlFor='desc1'><strong>I want to...</strong></label>
                        <textarea 
                            className='create-todo-text form-control' 
                            name='desc1' 
                            type='text'
                            id='desc1' 
                            placeholder='Add an item'
                            value={this.state.desc1}
                            onChange={this.handleInputChange}
                        ></textarea>
                    </div>
        
                    <div className='form-group'>
                        <label htmlFor='sel1'><strong>How much of a priority is this?</strong></label>
                        <select 
                            className='create-todo-priority form-control' 
                            name='sel1' 
                            type='select'
                            id='sel1' 
                            value={this.state.sel1}
                            onChange={this.handleInputChange}
                        >
                                <option value='1'>Select a Priority</option>
                                <option value='2'>High Priority</option>
                                <option value='3'>Medium Priority</option>
                                <option className='success' value='4'>Low Priority</option>
                        </select>
                    </div>
                </div>
        
                <div className='panel-footer'>
                    <button className='create-todo btn btn-success btn-block'  type='submit'>Add</button>
                </div>
            </form>
        );
    }
}

export default InputForm;