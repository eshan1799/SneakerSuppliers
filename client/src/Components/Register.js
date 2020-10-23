import React from "react";
import { connect } from 'react-redux';
import { registerUser } from '../actions/Actions';
import { Button, Card, CardContent, TextField, CardActions, Typography, Link } from '@material-ui/core';

class Register extends React.Component {

    state = {
        details: {}
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.details.password === this.state.details.confirm) {
            this.props.signUp(this.state.details)
        } else {
            alert('Passwords don\'t match!')
            e.target.reset()
        }
    }
    
    handleInput = (e) => {
    let details = this.state.details;
    details[e.target.name] = e.target.value
    this.setState({ details })
    }

    render() {
        return (
            <>
                <section className='fullvh'>
                    <Card>
                        <CardContent>
                        <section className="alignCentre">
                            <h1>Register</h1>
                        </section>
                            <form onSubmit={ this.handleSubmit } autoComplete="off">
                                <TextField
                                    required
                                    autoFocus
                                    margin="dense"
                                    id="username"
                                    label="Username"
                                    name="username"
                                    type="text"
                                    fullWidth
                                    onChange={ this.handleInput }
                                />
                                <TextField
                                    required
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    fullWidth
                                    onChange={ this.handleInput }
                                />
                                <TextField
                                    required
                                    margin="dense"
                                    id="re-enter password"
                                    label="Re-enter Password"
                                    name="confirm"
                                    type="password"
                                    fullWidth
                                    onChange={ this.handleInput }
                                />
                                <div className="alignCentre">
                                    <CardActions>
                                        <Button variant="contained" size="large" type="submit">
                                            Register
                                        </Button>
                                    </CardActions>
                                    <Typography>
                                        <Link href="/login">
                                            Already a user?
                                        </Link>
                                    </Typography>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </section>
            </>
        )
    }
}

const mDTP = dispatch => ({
    signUp: (details) => dispatch(registerUser(details))
})

export default connect(null, mDTP)(Register)