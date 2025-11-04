import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className="card-container border rounded-lg p-4 flex flex-col transition-all duration-300 w-full"
      style={{
        minHeight: "220px",
        backgroundColor: "var(--color-white)",
      }}
    >
      <h3 className="font-bold mb-3 text-xl text-center">{title}</h3>
      
      <p className="text-l mb-4 flex-grow text-center">{body}</p>
      
      <button
        onClick={handleClick}
        className="tombol-card w-full py-2 rounded text-white text-sm transition-all duration-300"
        style={{
          backgroundColor: isClicked ? "var(--color-special-red2)" : "var(--color-gray-01)",
        }}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>

      <style jsx>{`
        .card-container {
          border: 1px solid #e5e7eb;
        }

        .card-container:hover {
          transform: scale(1.05);
          border: 2px solid #fecaca;
          background-color: #fce7f3 !important;
        }

        .tombol-card:hover {
          filter: brightness(1.2);
        }
      `}</style>
    </div>
  );
}

export default PostCard;
