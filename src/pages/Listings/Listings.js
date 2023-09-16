import React, { useEffect } from "react";
import {
  AdListLi,
  AdListLink,
  AdListUl,
  Blinker,
  ListingsStyle,
} from "./Listings.styled";
import { useParams } from "react-router-dom";
import slugify from "../../utils/slugify";

const Listings = () => {
  const param = useParams();

  const ad = [
    {
      id: 1,
      title:
        "New girl !!!🔥🔥🔥🔥asian🔥✨Beautiful girls✨✨🔥🔥Young🔥🔥✨✨New Feeling ! ✨✨🔥🔥",
      description: `New girl !!! 5300 Sidney Simons Blvd suite 12 Columbus GA
      Call +1 (706) 604-3537
      9:30am-9:30pm 7days`,
      state: "alabama",
      city: "auburn",
      hot: true,
      date: new Date("October 13, 2022 11:13:00"),
    },
    {
      id: 2,
      title:
        "(706) 221-4452 💖🔴▬▬▬▬▬▬▬▬▬ 💥 Asian Massage __ 💥 💥 ▬▬▬▬▬▬▬▬▬ 💖🔴",
      description: `Today New girl !!!1290 Double churches rd suite p Columbus GA
      9:30 am-9:30 pm 7days
      Call 4704610883 or (706) 221-4452`,
      state: "Georgia",
      city: "Augusta-Richmond County",
      hot: false,
      date: new Date("January 21, 2023 07:13:00"),
    },
    {
      id: 3,
      title:
        "(706) 221-4452 💖🔴▬▬▬▬▬▬▬▬▬ 💥 Asian Massage __ 💥 💥 ▬▬▬▬▬▬▬▬▬ 💖🔴",
      description: `Today New girl !!!1290 Double churches rd suite p Columbus GA
      9:30 am-9:30 pm 7days
      Call 4704610883 or (706) 221-4452`,
      state: "arizona",
      city: "Apache junction",
      hot: false,
      date: new Date("January 21, 2023 07:13:00"),
    },
    {
      id: 4,
      title:
        "㊙ 🔥🔥🔥㊙ 100% VIP Service ㊙☀㊙ Asian Body Spa ㊙☀㊙ Special Discount Offer ㊙🔥🔥🔥㊙",
      description: `Hello Dear 💖 I am Online Now...
      Purchase one Hour Massage.
      Receive a FREE Gift Certificate For a 30 Min Massage – Good For Next Days...
      Open 7 Days 8:00 AM - 2:00PM /// Free parking at the back.
      *--*--*--*--*--*--*--*--*--*--*--*--*--*--*--**--*--*--*--*--*--*
      
      Beautiful and Attractive Girls Everyday Work Here.
      You can choose your favorat girls. Never Rushed. My smile will amaze you. My personality will CAPTURE you. Always Safe & Discrete.
      
      Contact My Official Email>> bodyspa76@gmail.com
      
      Put As ═══ SPA ═══ Subject Link…
      
      ☆☆☆ ══ SERVICE RATE ══☆☆☆
      
      ☆☆▶ 30min ═ $80 (20% Discount Going on)
      ☆☆▶ 60/min═ $150 (30% Discount Going on)
      ☆☆▶ 90/min═ $200 (40% Discount Going on)
      
      
      ☆☆☆ ══ Full Service ══☆☆☆
      ☆☆▶ Penis Massage-Penic Suck.
      ☆☆▶ Full-Body Massage.
      ☆☆▶ Chair Massage-Table Shower.
      ☆☆▶ Special Nuru.
      ☆☆▶Adult Fun - Anal sex
      ☆☆▶Blow Job.
      ☆☆▶ Clean And Separate Room.
      
      ☆☆☆═ Extra Service ═☆☆☆
      
      1. We provide deep tissue, shower, kissing, Drinks, light touch , back walking & also condom...
      :::: ABOUT US ::::
      We will make you as satisfied as possible with warm and gentle service attitude.
      One Try You’ll Be Our VIP Guest Forever! Thanks…`,
      state: "New york",
      city: "Albany",
      hot: false,
      date: new Date("January 21, 2023 07:13:00"),
    },
  ];

  useEffect(() => {
    document.title = `${
      param.state.slice(0, 1).toUpperCase() + param.state.slice(1)
    } - ${
      param.city.slice(0, 1).toUpperCase() + param.city.slice(1)
    } Ad Listing`;
  }, [param.city, param.state]);

  return (
    <ListingsStyle>
      <AdListUl>
        {ad
          .filter(
            (ad) =>
              slugify(param.state.toLowerCase()) ===
                slugify(ad.state.toLowerCase()) &&
              slugify(param.city.toLowerCase()) ===
                slugify(ad.city.toLowerCase())
          )
          .map((ad, index) => (
            <AdListLi key={index}>
              <AdListLink to={`${ad.id}`} state={ad}>
                <div>
                  <div>{ad.title}</div>
                  <span>
                    {ad.city} @ {ad.date.getDate()}/{ad.date.getMonth() + 1}/
                    {ad.date.getFullYear()} {ad.date.getHours()}:
                    {ad.date.getMinutes()}
                  </span>
                </div>
                <Blinker>{ad.hot && "HOT🔥"}</Blinker>
              </AdListLink>
            </AdListLi>
          ))}
      </AdListUl>
    </ListingsStyle>
  );
};

export default Listings;
