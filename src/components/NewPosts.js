import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postsActions from "../redux/actions/postsActions";
import newPostActions from "../redux/actions/newPostActions";

import { Input, Typography, Button, Image } from 'antd';
// import { PictureOutlined } from '@ant-design/icons';
// import bg from './assests/bg.jpg'
import "./NewPosts.css";

const NewPost = () => {
  const id = useSelector((state) => state.newItem.id);
  const title = useSelector((state) => state.newItem.title);
  const content = useSelector((state) => state.newItem.content);
  const dispatch = useDispatch();

  const { Title } = Typography;
  const { TextArea } = Input;


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
      {/* <Image fallback={<PictureOutlined />} preview={false} src={bg} alt="background" /> */}
    
    <div className="new_post_space_filler">
      
      <Title level={3}>This is where you can create a post about your travels.</Title>
      <Title level={4}>Once you add a post, click on it for more options.</Title> 
      <Title level={4}>You can edit your post from this page.</Title>
    <div className="new_post_container">
      <Input
        type="text"
        size="large"
        placeholder="Title of Post"
        value={title}
        onChange={(e) => dispatch(newPostActions.setNewTitle(e.target.value))}
      />
      <TextArea
        rows={6}
        placeholder="Tell us about your travels"
        value={content}
        onChange={(e) => dispatch(newPostActions.setNewContent(e.target.value))}
      ></TextArea>
      <div className="form_input_btn_wrapper">
        <Button className="add_post_btn" type="default" onClick={id === -1 ? addPost : updatePost}>
          {id === -1 ? "Add this Post" : "Update your Post"}
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
