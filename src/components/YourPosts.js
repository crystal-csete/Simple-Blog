import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";

import { Typography, Card } from 'antd';
import './YourPosts.css';

const YourPosts = () => {
  const posts = useSelector((state) => state.posts.posts);

  const { Title } = Typography;

  if (posts.length === 0) {
    return (
      <div className="empty_your_post">
        <Title level={3}>No current posts. Add one to get started!</Title>
      </div>
    );
  }

  return (
    <div className="your_post_space_filler">
      <h2>This is where you can review your posts.</h2>
    
    <div className="your_post_container">
      {posts.map((item, index) => {
        if (item) {
          return (
            <Card>
            <PostItem
              title={item.title}
              content={item.content}
            />
            </Card>
          );
        }
        return null;
      })}
      
      </div>
    </div>
  );
};

export default YourPosts;

