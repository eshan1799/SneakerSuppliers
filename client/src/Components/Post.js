import React from "react";
import { Button, Card, CardMedia, CardContent, TextField, CardActions, Typography, Link } from '@material-ui/core';

class Post extends React.Component {
    render() {
        return(
            <section className='post'>
                <Card variant="outlined">
                    <CardContent>
                        <section className="cardContent">
                            <img className='postImage' src={ this.props.post.picture_url } />
                            <div className="leftAlignFlex">
                                <h3>{ `${ this.props.post.brand } ${ this.props.post.sneaker } '${ this.props.post.colourway }'` }</h3>
                                <Typography>
                                    <Link target="_blank" href={ this.props.post.deal_url }>
                                        { this.props.post.store }
                                    </Link>
                                </Typography>
                                <p>
                                    £{ this.props.post.discount_price }
                                    <span className='lineThrough'>
                                        £{ this.props.post.retail_price }
                                    </span>
                                </p>
                            </div>
                            <div className="rightAlignFlexColumn">
                                <div className='rightAlignFlexRow'>
                                    <img className="icon" src="./img/fire.png" /><p>{ this.props.post.likes }</p>
                                </div>
                                <p>{ this.props.post.username }</p>
                            </div>
                        </section>
                    </CardContent>  
                </Card>
            </section>
        )
    }
}

export default Post;