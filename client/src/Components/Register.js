import React from "react";
import { Button, Card, CardContent, TextField, CardActions } from '@material-ui/core';

class Register extends React.Component {
    render() {
        return (
            <>
                <section className='fullvh'>
                    <Card>
                        <CardContent>
                        <section className="alignCentre">
                            <h1>Register</h1>
                        </section>
                            <form>
                                <TextField
                                    required
                                    autoFocus
                                    margin="dense"
                                    id="username"
                                    label="Username"
                                    name="username"
                                    type="text"
                                    fullWidth
                                    onChange={ this.handleChange }
                                />
                                <TextField
                                    required
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    fullWidth
                                    onChange={ this.handleChange }
                                />
                                <TextField
                                    required
                                    margin="dense"
                                    id="re-enter password"
                                    label="Re-enter Password"
                                    name="re-enter password"
                                    type="password"
                                    fullWidth
                                />
                                <div className="alignCentre">
                                    <CardActions>
                                        <Button variant="contained" size="large" type="submit">
                                            Login
                                        </Button>
                                    </CardActions>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </section>
            </>
        )
    }
}

export default Register;