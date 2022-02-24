import banner1 from "../../asset/img/61a2f252b318ca1cbde1f760_banner_1.png";
import banner2 from "../../asset/img/61a2f252b318ca1cbde1f762_banner_2.png";
import { useState } from "react";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
export default function Example() {
  var items = [
    {
      name: "Redmi Note 9",
      description: "Probably the most random thing you have ever seen!",
      img: banner2,
      introduce:
        "Equipped with a high-performance octa-core processor with a maximum clock frequency of 2.0 GHz.",
      price: 249000,
      oldPrice: 399000,
    },
    {
      name: "Smart watches",
      description: "Hello World!",
      img: banner1,
      introduce: "exclusive - modern - elegant",
      goTo: "Go to collection and see more...",
    },
  ];
  let arrElement = [
    function ItemLeft() {
      return <div  className="Carousel"
      style={{ backgroundImage: `url(${items[1].img})` }}>
          <div className="wraperInfoL">
                <p className="introduceL">{items[1].introduce}</p>
                <h1 className="nameL">{items[1].name}</h1>
                <p className="goTo">{items[1].goTo}</p>
                <Button variant="contained">SHOP NOW</Button>
          </div>
      </div>;
    },
    function ItemRight() {
      return (
        <div
          className="Carousel"
          style={{ backgroundImage: `url(${items[0].img})` }}
        >
          <div  className="wraperInfo">
            <h1 className="Name">{items[0].name}</h1>
            <p  className='introduce'>{items[0].introduce}</p>
            <div className="Price">
              <span className=" priceL">${items[0].price}</span>
              <span className=" oldPrice">${items[0].oldPrice}</span>
            </div>
            <Button  variant="outlined">BUY REDMI NOTE 9</Button>  
          </div>
        </div>
      );
    },
  ];
  return (
    <Carousel navButtonsAlwaysVisible={true} stopAutoPlayOnHover={true}>
      {arrElement.map((Item, i) => (
        <Item key={i} />
      ))}
    </Carousel>
  );
}
