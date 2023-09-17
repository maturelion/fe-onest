import React, { useEffect } from "react";
import {
  AdListLi,
  AdListLink,
  AdListUl,
  Blinker,
  AdListingsStyle,
} from "./AdListings.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "./AdListingsActions";
import capitalizeAllWords from "../../utils/capitalizeAllWords";

const AdListings = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const { ads } = useSelector((state) => state.adListings);

  useEffect(() => {
    dispatch(
      getAds({
        country: capitalizeAllWords(param.country),
        state: capitalizeAllWords(param.state),
        city: capitalizeAllWords(param.city),
      })
    )
      .unwrap()
      .then((res) => {
        // console.log(res.data);
      })
      .catch();
  }, [dispatch, param.city, param.country, param.state]);

  useEffect(() => {
    document.title = `${
      param.state.slice(0, 1).toUpperCase() + param.state.slice(1)
    } - ${
      param.city.slice(0, 1).toUpperCase() + param.city.slice(1)
    } Ad Listing`;
  }, [param.city, param.state]);

  return (
    <AdListingsStyle>
      <AdListUl>
        {ads.map((ad, index) => (
          <AdListLi key={index}>
            <AdListLink to={`${ad.id}`} state={ad}>
              <div>
                <div>{ad.title}</div>
                <span>
                  {ad.city_set.name} @ {new Date(ad.created_at).getDate()}/
                  {new Date(ad.created_at).getMonth() + 1}/
                  {new Date(ad.created_at).getFullYear()}{" "}
                  {new Date(ad.created_at).getHours()}:
                  {new Date(ad.created_at).getMinutes()}
                </span>
              </div>
              <Blinker>{ad.is_hot && "HOT🔥"}</Blinker>
            </AdListLink>
          </AdListLi>
        ))}
      </AdListUl>
    </AdListingsStyle>
  );
};

export default AdListings;
