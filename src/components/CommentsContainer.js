import React from "react";

const commentsData = [
  {
    name: "mano",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [
      {
        name: "mano",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [],
      },
      {
        name: "mano",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [],
      },
      {
        name: "mano",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
          {
            name: "mano",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [],
          },
          {
            name: "mano",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "mano",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
  {
    name: "mano",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
  {
    name: "mano",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.comment}</h1>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="bg-slate-800">
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
