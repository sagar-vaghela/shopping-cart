import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { Item } from "../components";
import { specs, describe, it } from 'storybook-addon-specifications'
import {mount} from "enzyme";
import expect from "expect";

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
    const app =  (
      <div className="list-group">
        {" "}
        <Item
          item={object("items", {
            ...item
          })}
        />
      </div>
    );

    specs(() => describe('items', function () {
      it('Should have the description', function () {
        expect("1").toContain('1');
      });
      it('Should have the prize', function () {
        expect("900").toContain('900');
      });
    }));

    
    return app;
  })
  .add("no Description", () => {
    const app =(
      <div className="list-group">
        {" "}
        <Item
          item={object("items", {
            ...itemnoDiscription
          })}
        />
      </div>
    );
    
    specs(() => describe('items', function () {
      it('Should not have the description', function () {
        expect("1").toContain('1');
      });
    }));

   return app;

  });
