import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";
import newPostActions from "../redux/actions/newPostActions";

import { Typography } from 'antd';
import './PostList.css';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const { Title } = Typography;

  const onItemClicked = (item, index) => {
    dispatch(newPostActions.setNewId(index));
    dispatch(newPostActions.setNewTitle(item.title));
    dispatch(newPostActions.setNewContent(item.content));
  };

  if (posts.length === 0) {
    return (
      <div className="empty_post_list">
        <Title level={3}>No current posts. Add one to get started!</Title>
      </div>
    );
  }

  return (
    <div className="post_list_space_filler">
      <h3>This is where you can review your posts.</h3>
      <p>Click on your post below. You can then edit your post, or delete it. Go to the Post List in the navigation to see all of your posts in one place.</p>
    
    <div className="post_list_container">
      {posts.map((item, index) => {
        if (item) {
          return (
            <PostItem
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />
          );
        }
        return null;
      })}
      
      </div>
    </div>
  );
};

export default PostList;
