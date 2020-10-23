import React from "react";
import { Button, Card, CardContent, TextField, CardActions, Typography, Link } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/Actions';

class Login extends React.Component {

    state = {
        details: {},
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.logOn(this.state.details)
    }

    handleInput = e => {
        let details = this.state.details;
        details[e.target.name] = e.target.value
        this.setState({ details })
    }

    render() {
        if (localStorage.getItem("user")) {
            <Redirect to='/posts' />
        }
        
        return (
            <>
                <section className='fullvh'>
                    <Card>
                        <CardContent>
                            <section className="alignCentre">
                                <h1>Login</h1>
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
                                    <div className="alignCentre">
                                        <CardActions>
                                            <Button variant="contained" size="large" type="submit">
                                                Login
                                            </Button>
                                        </CardActions>
                                        <Typography>
                                            <Link href="/register">
                                                Not registered yet?
                                            </Link>
                                        </Typography>
                                    </div>
                                </form>
                            </section>
                        </CardContent>
                    </Card>
                </section>
            </>
        )
    }
}

const mDTP = dispatch => ({
    logOn: details => dispatch(login(details))
})

export default connect(null, mDTP)(Login);