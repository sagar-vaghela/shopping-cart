import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import Item from "../components/Item";

export const item = {
  id: 1,
  name: "Apple iPhone Xs Max",
  image: "appleIphoneXS.png",
  description: "Facial Recognition, Fingerprint Scanner",
  brand: "Apple",
  price: 99000,
  type: "Mobile"
};

export const itemnoDiscription = {
  id: 1,
  name: "Apple",
  image: "appleIphoneXS.png",
  description: "",
  brand: "Apple",
  price: 900,
  type: "Mobile"
};

storiesOf("items", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return (
      <div className="list-group">
        {" "}
        <Item
          item={object("items", {
            ...item
          })}
        />
      </div>
    );
  })
  .add("no Description", () => {
    return (
      <div className="list-group">
        {" "}
        <Item
          item={object("items", {
            ...itemnoDiscription
          })}
        />
      </div>
    );
  });
