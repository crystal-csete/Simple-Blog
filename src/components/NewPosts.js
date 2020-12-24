import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postsActions from "../redux/actions/postsActions";
import newPostActions from "../redux/actions/newPostActions";
import "./NewPosts.css";

const NewPost = () => {
  const id = useSelector((state) => state.newItem.id);
  const title = useSelector((state) => state.newItem.title);
  const content = useSelector((state) => state.newItem.content);
  const dispatch = useDispatch();

  const addPost = () => {
    if (title && content) {
      dispatch(
        postsActions.addPost({
          title,
          content,
        })
      );
      dispatch(newPostActions.resetNew());
    }
  };

  const updatePost = () => {
    if (title && content) {
      dispatch(
        postsActions.updatePost(id, {
          title,
          content,
        })
      );
      dispatch(newPostActions.resetNew());
    }
  };

  const deletePost = () => {
    dispatch(postsActions.deletePost(id));
    dispatch(newPostActions.resetNew());
  };

  return (
    <div className="new-posts-container">
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => dispatch(newPostActions.setNewTitle(e.target.value))}
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => dispatch(newPostActions.setNewContent(e.target.value))}
      ></textarea>
      <div className="form-input-btn-wrapper">
        <button onClick={id === -1 ? addPost : updatePost}>
          {id === -1 ? "ADD POST" : "UPDATE POST"}
        </button>
        {id !== -1 && (
          <button
            onClick={deletePost}
            style={{ marginLeft: "1rem", backgroundColor: "red" }}
          >
            Delete Post
          </button>
        )}
      </div>
    </div>
  );
};

export default NewPost;
