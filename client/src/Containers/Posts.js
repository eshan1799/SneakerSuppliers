import React from "react";
import { connect } from 'react-redux';
import { getPosts } from "../actions/Actions";

class Posts extends React.Component {

    componentDidMount() {
        // this.props.getPosts();
    }

    render() {
        this.props.getPosts();

        return (
            <>
            <h1>Posts</h1>
            </>
        )
    }
}

const mDTP = dispatch => ({
    getPosts: () => dispatch(getPosts())
})

export default connect(null, mDTP)(Posts);