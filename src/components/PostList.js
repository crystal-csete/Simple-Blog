import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";
import newPostActions from "../redux/actions/newPostActions";
import './PostList.css';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const onItemClicked = (item, index) => {
    dispatch(newPostActions.setNewId(index));
    dispatch(newPostActions.setNewTitle(item.title));
    dispatch(newPostActions.setNewContent(item.content));
  };

  if (posts.length === 0) {
    return (
      <div>
        <p>No more Posts, add one!</p>
      </div>
    );
  }

  return (
    <div className="post-list-container">
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
  );
};

export default PostList;
