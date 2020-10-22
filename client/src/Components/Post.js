import React from "react";

class Post extends React.Component {
    render() {
        return(
            <section className='post'>
                <h3>{ `${ this.props.post.brand } ${ this.props.post.sneaker } '${ this.props.post.colourway }'` }</h3>

            </section>
        )
    }
}

export default Post;