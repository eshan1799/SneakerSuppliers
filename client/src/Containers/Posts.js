import React from "react";
import { connect } from 'react-redux';
import { getPosts } from "../actions/Actions";
import { Post } from "../Components/index/index";
import { Button, Card, CardContent } from '@material-ui/core';

class Posts extends React.Component {

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

    render() {
        // this.props.getPosts();

        return (
            <section>
            <h1>Sneaker Suppliers</h1>
            <h2>Posts</h2>
            <section className="alignCentre">
                <Card>
                    <CardContent>
                        { this.props.allPosts  ? this.renderPosts(this.props.allPosts) : 'There are no posts' }
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
    getPosts: () => dispatch(getPosts())
})

const mSTP = state => ({
    allPosts: state.allPosts
})

export default connect(mSTP, mDTP)(Posts);