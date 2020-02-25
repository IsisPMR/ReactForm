import React from 'react';

export default function PostsList(props) {
    if (!props.posts){
        return <div>Loading...</div>
    }

return (
    <div className="post-container">
    {
        props.posts.map((post) => {
            return <div className="post">
            <h4>{post.title}</h4>
            <h4>{post.body}</h4>
            <h4>{post.id}</h4>
    </div>
    })
    }
    </div>
    );
}