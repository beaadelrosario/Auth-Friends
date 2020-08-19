import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [inputText, setInputText] = useState(initialFormValues);

  const handleChange = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const fetchFriends = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      });
  };

  const postNewFriend = (e) => {
      e.preventDefault();

      const newFriend = {
        name: inputText.name,
        age: inputText.age,
        email: inputText.email
      }

      axiosWithAuth()
      .post("/api/friends", newFriend)
      .then(res => {
          fetchFriends(e)
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
      <h2>friends list</h2>
      <form onSubmit={postNewFriend}>
          <input
            type='text'
            name='name'
            value={inputText.name}
            placeholder='name'
            onChange={handleChange}
          />
          <input
            type='text'
            name='age'
            value={inputText.age}
            placeholder='age'
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            value={inputText.email}
            placeholder='email'
            onChange={handleChange}
          />
          <button>Add New Friend</button>
      </form>
      <button onClick={fetchFriends}>Get Friends</button>
      {friends.map((friend) => {
        return (
          <div>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
}
