import React from "react";
import Home from "./Home";

export const DataIteration = (props) => {

  const { dataUser } = props;
  return (
    <>
      {dataUser.length > 0 ? (
        dataUser.map((user) => (

          <Home key={user.id} dataUser={user} />

        ))
      ) : (
        <div className="msg-empty">
          <h2>No data</h2>
        </div>
      )}
    </>
  );
};

