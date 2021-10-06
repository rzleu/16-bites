import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createFollow, deleteFollow, showFollows } from "../../utils/followApi";

function Follow({ id, className }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const { id: currUser } = useSelector((state) => state.session);

  useEffect(() => {
    showFollows(id).then(({ following, followers }) => {
      console.log({ following, followers });
      if (following.some((list) => list.id == currUser)) {
        setIsFollowing(true);
      }
    });
  }, []);

  const handleFollow = () => {
    const obj = { follower_id: currUser, followee_id: id };

    if (!isFollowing) {
      createFollow(obj).then(() => {
        setIsFollowing(true);
      });
    } else {
      deleteFollow(obj).then(() => {
        setIsFollowing(false);
      });
    }
  };

  const followBtn = () => {
    console.log({ currUser, id });
    if (currUser == id) return;
    return isFollowing ? (
      <button className={`auth--btn ${className}`} onClick={handleFollow}>
        Unfollow
      </button>
    ) : (
      <button className={`auth--btn ${className}`} onClick={handleFollow}>
        Follow
      </button>
    );
  };
  return <>{followBtn()}</>;
}

export default Follow;
