import React, { PureComponent } from 'react'
import { Container, Card, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

class Student extends PureComponent {
    constructor() {
        super()
        this.state = {
            students: [
                {
                    id: 1,
                    name: 'Jane Smith',
                    attendance: 'Bad',
                    isRegistered: false,
                    department: 'Law',
                    date: new Date()
                },
                {
                    id: 2,
                    name: 'John Smith',
                    attendance: 'Moderate',
                    isRegistered: true,
                    department: 'Engineering',
                    date: new Date()
                },
                {
                    id: 3,
                    name: 'Allen Mart',
                    attendance: 'Good',
                    isRegistered: true,
                    department: 'Medcine',
                    date: new Date()
                },
                {
                    id: 4,
                    name: 'Blue Florin',
                    attendance: 'Moderate',
                    isRegistered: false,
                    department: 'Education',
                    date: new Date()
                },
                {
                    id: 5,
                    
                    name: 'Alex Sam',
                    attendance: 'Bad',
                    isRegistered: false,
                    department: 'Social Science',
                    date: new Date()
                },
                {
                    id: 6,
                    name: 'Mark Taylor',
                    attendance: 'Good',
                    isRegistered: true,
                    department: 'Law',
                    date: new Date()
                },
                {
                    id: 7,
                    name: 'Ben Otwell',
                    attendance: 'Bad',
                    isRegistered: true,
                    department: 'Medcine',
                    date: new Date()
                },
            ]
        }
        // this.registeration = this.registeration.bind(this)
    }
    // registeration() {
    //     const { isRegistered  } = this.state.students
        
    //     if(isRegistered == false) {
    //         return 'Not Registered Student'
    //     } else {
    //         return 'Registered Student'
    //     }
    // }
    render() {
        
        const { students } = this.state
        return (
            <>
                <Container>
                    <div className="row">
                        
                        { students.map(({ id, name, attendance, department, isRegistered }) => (
                            <div key={id} className="col-md-4 mt-3">
                                

                                <div className="shadow card card-body">
                                    <Button 
                                        color="danger"
                                        style={{ 
                                        marginLeft: 'auto',
                                        }} 
                                        className="btn-danger rounded-circle"
                                        onClick={() => {
                                            this.setState(state => ({
                                                students: state.students.filter(student => student.id !== id)
                                            }))
                                        }}
                                    >&times;</Button>
                                    <p style={{ fontSize: '1rem' }} className="lead">NAME: {name}</p>
                                    <p style={{ fontSize: '1rem' }} className="lead">Attendance: {attendance}</p>
                                    <p style={{ fontSize: '1rem' }} className="lead">Department: {department}</p>
                                    <p style={{ fontSize: '1rem' }} className="lead">Reg Status: {isRegistered == false ? 'Not Registered Student' : 'Registered Student'}</p>
                                </div>
                            </div>
                        )) }
                       
                      
                    </div>
                </Container>
                <Button
                    className="btn-danger rounded-circle fixed-bottom"
                    color="danger"
                    onClick={() => {
                        const name = prompt('Enter Student');
                        const isRegistered = false;
                        const attendance = prompt('Enter Student');
                        const department = prompt('Enter Student');
                        if(name || isRegistered || attendance || department) {
                            this.setState(state => ({
                                students: [...state.students, { id: 8, name, isRegistered, attendance, department }]
                            }))
                        }
                    }}

                    style={{
                        fontSize: '1.2rem'
                    }}
                >
                    +
                </Button>
            </>
        )
    }
}

export default Student

