import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserPosts } from "../../utils/postApi";
import { createFollow, deleteFollow, showFollows } from "../../utils/followApi";
import Follow from "../Follow";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useOutsideClick from "../../hooks/useOutsideClick";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);
  const clickRef = useRef();

  useOutsideClick(clickRef, () => setShowModal(false));
  const [profileInfo, setProfileInfo] = useState({
    fname: "",
    lname: "",
    posts: [],
    avatarUrl: "https://avatars.dicebear.com/api/avataaars/:seed.svg",
  });
  const [followInfo, setFollowInfo] = useState({
    followingList: [],
    followerList: [],
  });
  const { id: currUser } = useSelector((state) => state.session);
  const { id } = useParams();

  useEffect(() => {
    fetchUserPosts(id).then((response) => {
      setProfileInfo((old) => ({ ...old, ...response }));
    });

    showFollows(parseInt(id)).then(({ following, followers }) => {
      if (followers.some((list) => list.id == currUser)) {
        setIsFollowing(true);
      }
      setFollowInfo({
        followerList: followers,
        followingList: following,
      });
    });
  }, []);

  const handleFollow = () => {
    const obj = { follower_id: currUser, followee_id: id };
    console.log({ obj });
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
    if (currUser == id) return;
    return isFollowing ? (
      <button className="auth--btn" onClick={handleFollow}>
        Unfollow
      </button>
    ) : (
      <button className="auth--btn" onClick={handleFollow}>
        Follow
      </button>
    );
  };

  const handleFollowingClick = () => {
    setShowModal(true);
    setActiveModal("following");
  };

  const handleFollowersClick = () => {
    setShowModal(true);
    setActiveModal("followers");
  };

  const showModalDetails = () => {
    let list = [];
    if (activeModal === "following") {
      list = followInfo.followingList;
    } else {
      list = followInfo.followerList;
    }
    return list.map(({ lname = "", fname = "", id = "" }) => (
      <div key={id} className="list--container">
        <span>{`${fname} ${lname}`}</span>
        <span>
          <Follow id={id} className="list--btn" />
        </span>
      </div>
    ));
  };

  const followerListModal = () => (
    <div className="follows--modal" ref={clickRef}>
      <button onClick={handleModalClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h3>{`${followInfo.followerList.length} Followers`}</h3>
      {showModalDetails()}
    </div>
  );

  const followingListModal = () => (
    <div className="follows--modal" ref={clickRef}>
      <button onClick={handleModalClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h3>{`${followInfo.followingList.length} Following`}</h3>
      {showModalDetails()}
    </div>
  );

  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <div className="profile-wrap">
        {id && (
          <>
            <div className="profile--wrapper">
              <div className="profile-img-wrapper">
                <img src={profileInfo.avatarUrl} alt="avatar" />
              </div>
              <h2>
                {profileInfo.fname} {profileInfo.lname}
              </h2>
              {followBtn()}

              <div>
                {followInfo.followerList.length !== 0 && (
                  <button
                    onClick={handleFollowersClick}
                  >{`${followInfo.followerList.length} Followers`}</button>
                )}
                {followInfo.followingList.length !== 0 && (
                  <button
                    onClick={handleFollowingClick}
                  >{`${followInfo.followingList.length} Following`}</button>
                )}
              </div>
            </div>
            <div>
              <div>
                <div className="upload--subheader ">
                  <span className="homefeed-home-btn">
                    Photos {profileInfo.posts.length}
                  </span>
                </div>
                {profileInfo.posts.map((post) => (
                  <button key={post.id} className="upload--wrapper">
                    <figure className="profile--hover-img">
                      <img src={post.photoUrl} />
                      <figcaption>{post.title}</figcaption>
                    </figure>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {showModal && activeModal === "following" && (
        <div className="darken--bg">{followingListModal()}</div>
      )}
      {showModal && activeModal === "followers" && (
        <div className="darken--bg">{followerListModal()}</div>
      )}
    </>
  );
}

export default Profile;
