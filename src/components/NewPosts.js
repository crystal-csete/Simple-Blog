import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postsActions from "../redux/actions/postsActions";
import newPostActions from "../redux/actions/newPostActions";

import { Input, Typography, Button } from 'antd';
import bg from './assests/bg.jpg'
import "./NewPosts.css";

const NewPost = () => {
  const id = useSelector((state) => state.newItem.id);
  const title = useSelector((state) => state.newItem.title);
  const content = useSelector((state) => state.newItem.content);
  const dispatch = useDispatch();

  const { Title } = Typography;

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
    <div className="bg_image">
      <img src={bg} alt="background" />
    
    <div className="new_post_space_filler">
      
      <Title level={3}>This is where you can create a post about your travels.</Title>
      <p>Once you add a post, click on it for more options. You can edit your post from this page.</p>
    <div className="new_post_container">
      <Input
        type="text"
        size="large"
        placeholder="Title of Post"
        value={title}
        onChange={(e) => dispatch(newPostActions.setNewTitle(e.target.value))}
      />
      <textarea
        placeholder="Tell us about your travels"
        value={content}
        onChange={(e) => dispatch(newPostActions.setNewContent(e.target.value))}
      ></textarea>
      <div className="form_input_btn_wrapper">
        <Button className="add_post_btn" type="default" onClick={id === -1 ? addPost : updatePost}>
          {id === -1 ? "Add this Post" : "Edit your Post"}
        </Button>
        {id !== -1 && (
          <Button
            onClick={deletePost}
            
          >
            Delete your Post
          </Button>
        )}
      </div>
      </div>
      </div>
    </div>
  );
};

export default NewPost;
