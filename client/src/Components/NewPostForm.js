import React from 'react';
import { connect } from 'react-redux';
import { getPosts, submitNewPost } from "../actions/Actions";
import { TextField, DialogActions, Button } from '@material-ui/core';

class newPostForm extends React.Component {

    state = {
        postInfo: {}
    }

    handleInput = (e) => {
        let postInfo = this.state.postInfo;
        postInfo[e.target.name] = e.target.value
        this.setState({ postInfo })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.postInfo['discount_price'] > this.state.postInfo['retail_price']) {
            alert('Discount price can\'t be more than the retail price!')
        } else {
            this.props.submitNewPost(this.state.postInfo)
            this.setState({ isModalOpen: false })
        }
    }

    render() {
        return (
            <>
                <section className="alignCentre">
                    <h2>New Post</h2>
                </section>
                <form onSubmit={ this.handleSubmit }>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="brand"
                        label="Brand"
                        name="brand"
                        type="text"
                        fullWidth
                        onChange={ this.handleInput }
                    />
                    <TextField
                        required
                        margin="dense"
                        id="sneaker"
                        label="Sneaker"
                        name="sneaker"
                        type="text"
                        fullWidth
                        onChange={ this.handleInput }
                    />
                    <TextField
                        required
                        margin="dense"
                        id="colourway"
                        label="Colourway"
                        name="colourway"
                        type="text"
                        fullWidth
                        onChange={ this.handleInput }
                    />
                    <TextField
                        required
                        margin="dense"
                        id="store"
                        label="Store"
                        name="store"
                        type="text"
                        fullWidth
                        onChange={ this.handleInput }
                    />
                    <TextField
                        required
                        margin="dense"
                        id="deal_url"
                        label="Deal URL"
                        name="deal_url"
                        type="text"
                        fullWidth
                        onChange={ this.handleInput }
                    />
                    <TextField
                        required
                        margin="dense"
                        id="retail_price"
                        label="Retail Price"
                        name="retail_price"
                        type="number"
                        fullWidth
                        onChange={ this.handleInput }
                    />
                    <TextField
                        required
                        margin="dense"
                        id="discount_price"
                        label="Discount Price"
                        name="discount_price"
                        type="number"
                        fullWidth
                        onChange={ this.handleInput }
                    />
                    <TextField
                        required
                        margin="dense"
                        id="picture_url"
                        label="Picture URL"
                        name="picture_url"
                        type="text"
                        fullWidth
                        onChange={ this.handleInput }
                    />
                    <TextField
                        required
                        margin="dense"
                        id="description"
                        label="Description"
                        name="description"
                        type="text"
                        fullWidth
                        onChange={ this.handleInput }
                    />
                    <div className="alignCentre">
                        <DialogActions>
                            <Button variant="contained" size="large" type="submit">
                                Submit
                            </Button>
                            </DialogActions>
                    </div>
                </form>
                {/* <div className="alignCentre">
                            <Button onClick={ this.handleClose }>
                                X
                            </Button>
                    </div> */}
            </>
        )
    }
}

const mDTP = dispatch => ({
    submitNewPost: postInfo => dispatch(submitNewPost(postInfo))
})

export default connect(null, mDTP)(newPostForm);