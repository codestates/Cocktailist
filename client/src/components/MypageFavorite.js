import React, { useState, useEffect } from "react";
import axios from "axios";

function MypageFavorite({ accessToken }) {
  const ec2_url =
    "http://ec2-3-35-22-42.ap-northeast-2.compute.amazonaws.com:8000";
  const localhostUrl = "http://localhost:8000";

  const [myFavorite, setMyFavorite] = useState([]);

  useEffect(() => {
    axios
      .get(`${ec2_url}/mypages/myFavorite`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          authorization: `token ${accessToken}`,
        },
      })
      .then((res) => {
        setMyFavorite(res.data);
      });
  }, []);

  const deleteFavorite = (favorite) => {
    axios
      .get(`${ec2_url}/mypages/deleteFavorite/${favorite.id}`)
      .then(() => {
        window.location.replace(`/mypage`);
      });
  };

  function handleClick(e) {
    window.location.replace(`/cocktails/${e.target.id}`);
  }

  return (
    <div>
      <h1>Favorite</h1>
      <div className="favoriteInfo">
        {myFavorite.map((el, idx) => {
          return (
            <div key={idx}>
              <img className="favoriteImg" src={el.image} id={el.cocktailId} onClick={handleClick}/>
              <button
                className="deleteFavorite"
                key={idx}
                onClick={() => {
                  deleteFavorite(el);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MypageFavorite;
