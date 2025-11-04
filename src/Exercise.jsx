import React, { use, useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "./Services";
import PostCard from "./PostCard";
import postsData from "./data/postsData";

function Exercise() {
  const [users, setUsers] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("#3e3535ff");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-special-red">Post Cards</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {postsData.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Exercise;