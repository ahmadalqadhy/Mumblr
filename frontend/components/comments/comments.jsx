import React from "react";

const Comments = ({ comments, user }) => {
  let allComments = comments ? (
    comments.map((comment) => {
      const username = user.username

      return (
        <ul className="comment" key={comment.id}>
          <li className="comment-author">{`${username}:`}</li>
          <li className="comment-body">{comment.body}</li>
        </ul>
      );
    })
  ) : (
    <span></span>
  );

  return (
    <div>
      <ul className="comments-container">{allComments}</ul>
    </div>
  );
};

export default Comments;
