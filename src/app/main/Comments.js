import { Button, CardContent, Input, InputAdornment } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../utils/firebase/firebase.config";
import { usercontext } from "./context/context";


const Comments = (props) => {
  const { publishComment } = useContext(usercontext);
  const [state, setState] = useState("");
  const [comments, setComments] = useState([]);

  const postComment = (e) => {
    e.preventDefault();

    publishComment({ id: props.id, comment: state });
    setState("");
  };

  useEffect(() => {
    db.collection("posts")
      .doc(props.id)
      .collection("comments")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        setComments(snp.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="comments">
      {/* {console.log(comments, "what in comments")} */}
      {
        comments.map((comment) => (
          <div className="comments__container" key={comment.id}>
            <div className="comments__container-msg"><b> {comment.username}</b> :{comment.comment}</div>
          </div>
        ))}
      <CardContent>
        <form onSubmit={postComment}>
          <Input
            id="input-with-icon-adornment"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter a comment"
            fullWidth
          />
        </form>
      </CardContent>

    </div>
  );
};

export default Comments;


