import React from "react";
import { connect } from 'react-redux';
import { getPosts } from "../actions/Actions";
import { Post } from "../Components/index/index";

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
            <>
            <h1>Sneaker Suppliers</h1>
            <h2>Posts</h2>
            { this.props.allPosts  ? this.renderPosts(this.props.allPosts) : 'There are no posts' }
            </>
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