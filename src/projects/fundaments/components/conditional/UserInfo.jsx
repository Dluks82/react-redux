import React from "react";
import Ife from "./If";

const userInfo = (props) => {
  const user = props.user || {};
  return (
    <div>
      <Ife test={user && user.name}>
        Welcome <strong>{user.name}</strong>
      </Ife>
      <Ife test={!user || !user.name}>
        Welcome <strong>friend</strong>!
      </Ife>
    </div>
  );
};

export default userInfo;
