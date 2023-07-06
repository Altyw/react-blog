import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AddBlog = () => {
  const [posts, setPosts] = useState([]);
  async function getPost() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    setPosts(data);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        rowGap: "15px",
      }}
    >
      {posts.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.body}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AddBlog;
