import React from 'react';
import axios from 'axios';

class User extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios
            .get(`http://localhost:5000/api/users/${id}/posts`)
            .then(res => {
                this.setState({ posts: res.data });
            })
            .catch(err => {
              console.log(err);
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => (
                        <article key={post.id}>
                            <h1>{post.postedBy}</h1>
                            <p>{post.text}</p>
                        </article>
                    ))
                }
            </div>
        )
    }
}

export default User;