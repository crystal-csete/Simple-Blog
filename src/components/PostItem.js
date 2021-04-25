import React from "react";
import { Button, Typography, Input } from "antd";
import "./PostItem.css";

const PostItem = ({ title, content, onItemClicked }) => {

  const { Title } = Typography;
  const { TextArea } = Input;


  return (
    <div className="posts_item_container">
      <Title level={3}>{title}</Title>
      <p>{content}</p>
      <Button onClick={onItemClicked}>Edit</Button>
    </div>
  );
};

export default PostItem;
