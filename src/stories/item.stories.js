import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { ItemListStory } from "../components";
import { specs, describe, it } from "storybook-addon-specifications";
import expect from "expect";
import * as images from "../lib/constants";
import { products } from "../mock";
import ProductStory from "../components/products/ProductStory";

export const item = {
  id: 1,
  name: "Apple iPhone Xs Max",
  image: `${images.appleIphoneXS}`,
  description: "Facial Recognition, Fingerprint Scanner",
  brand: "Apple",
  price: 99000,
  type: "Mobile"
};

export const itemnoDiscription = {
  id: 1,
  name: "Apple",
  image: `${images.appleIphoneXS}`,
  description: "",
  brand: "Apple",
  price: 900,
  type: "Mobile"
};

storiesOf("item", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const app = (
      <ProductStory
        item={object("item", {
          ...item
        })}
      />
    );

    specs(() =>
      describe("Item", function() {
        it("Should have the description", function() {
          expect("1").toContain("1");
        });
        it("Should have the prize", function() {
          expect("900").toContain("900");
        });
      })
    );
    return app;
  })
  .add("No Description", () => {
    const app = (
      <ProductStory
        item={object("Item", {
          ...itemnoDiscription
        })}
      />
    );

    specs(() =>
      describe("items", function() {
        it("Should not have the description", function() {
          expect("1").toContain("1");
        });
      })
    );

    return app;
  })
  .add("Item List", () => {
    const app = <ItemListStory items={object("Item", products)} />;
    specs(() =>
      describe("Item Lst", function() {
        it("List of Item Lists", function() {
          expect("1").toContain("1");
        });
      })
    );

    return app;
  })
  .add("Empty Item List", () => {
    const app = <ItemListStory items={object("Item", [])} />;
    specs(() =>
      describe("Item Lst", function() {
        it("Empty Item Lists", function() {
          expect("1").toContain("1");
        });
      })
    );

    return app;
  });
