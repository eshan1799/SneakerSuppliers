import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core';

class LandingPage extends React.Component {
    render() {
        return (
            <section class='fullvh'>
                <h1 id='homepageLogo'>Sneaker Suppliers</h1>
                <div>
                    <Button variant="contained" size="large" href='/login'>
                        Login
                    </Button>
                    <Button variant="contained" size="large" href='register'>
                        Register
                    </Button>
                </div>
            </section>
        )
    }
}

export default LandingPage;