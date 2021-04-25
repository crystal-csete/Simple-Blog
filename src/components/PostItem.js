import React from 'react';
import './PostItem.css';

const PostItem = ({ title, content, onItemClicked }) => {
    return (
        <div
        className="posts_item_container"
        role="button"
        onClick={onItemClicked}
        >
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default PostItem;