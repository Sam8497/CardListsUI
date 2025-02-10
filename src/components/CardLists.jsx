import React, { useEffect, useState } from 'react';
import "./cardlists.css";
import axios from 'axios';

const ChatLists = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {items.map( (item)=> (
        <div key={item.id} >
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ) )}
    </div>
  )
}

export default ChatLists
