import React from "react";
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getPosts, submitNewPost } from "../actions/Actions";
import { Post, NewPostForm } from "../Components/index/index";
import { Button, Card, CardContent, Dialog, DialogContent, TextField, DialogActions, Typography, Link } from '@material-ui/core';

class Posts extends React.Component {

    state = {
        refresh: false,
        isModalOpen: false,
        postInfo: {}
    }

    componentDidMount() {
        this.props.getPosts();
    }

    renderPosts = posts => {
        return posts.map((post, index) => {
                return  <div key={ index }>
                            <Post post={ post }/>
                        </div>
                }
        )
    }

    handleOpen = () => {
        this.setState({ isModalOpen: true })
    }

    handleClose = () => {
        this.setState({ isModalOpen: false })
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
            // window.location = "/posts"
            // this.setState({ refresh: true })
        }
    }

    render() {
        // this.props.getPosts();
        // if (this.state.refresh) {
        //     this.setState({ refresh: false })
        //     return <Redirect to="/posts" />
        // }
        return (
            <section>
            <h1>Sneaker Suppliers</h1>
            <h2>Posts</h2>
            <Button onClick= { this.handleOpen }>
                +
            </Button>
            <Dialog open={ this.state.isModalOpen }>
                <DialogContent>
                    {/* <NewPostForm /> */}
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
                                        <Button onClick={ this.handleClose }>
                                            X
                                        </Button>
                                    </DialogActions>
                                </div>
                            </form>
                </DialogContent>
            </Dialog>
            <section className="alignCentre">
                <Card>
                    <CardContent>
                        { this.props.allPosts  ? this.renderPosts(this.props.allPosts) : 'No posts' }
                    </CardContent>
                </Card>
            </section>
            <footer>
            <p>
                Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </p>
            </footer>
            </section>
        )
    }
}

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    submitNewPost: postInfo => dispatch(submitNewPost(postInfo))
})

const mSTP = state => ({
    allPosts: state.allPosts
})

export default withRouter(connect(mSTP, mDTP)(Posts));