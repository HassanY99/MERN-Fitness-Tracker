import React, { PureComponent } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExcercise extends PureComponent {

    constructor(props) {
        super(props);
        
        this.onchangeUsername = this.onchangeUsername.bind(this);
        this.onchangeDescription = this.onchangeDescription.bind(this);
        this.onchangeDuration = this.onchangeDuration.bind(this);
        this.onchangeDate = this.onchangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }


    onchangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onchangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onchangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onchangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const excercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(excercise)

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Excercise Log</h3>
                {/* 1. Username */}
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <select  ref='userInput'  required className='form-control' value={this.state.username} onChange={this.onchangeUsername}>
                            {
                                this.state.users.map((user) => {
                                    return <option key={user} value={user}> {user}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                {/* 2. Description */}

                <div className='form-group'>
                        <label>Description: </label>
                        <input type="text" required className='form-control' value={this.state.description} onChange={this.onchangeDescription} />
                    </div>

                {/* 3. Duration */}

                <div className='form-group'>
                        <label>Duration (in minutes): </label>
                        <input type="text" required className='form-control' value={this.state.duration} onChange={this.onchangeDuration} />
                    </div>

                {/* 4. Data */}

                <div className='form-group'>
                        <label>Date: </label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onchangeDate} />
                        </div>
                    </div>

                    <div className='form-group'>
                        <input type="submit" className='btn btn-primary' value='Create Excercise Log' />
                    </div>

                </form>
            </div>
        )
    }
}
