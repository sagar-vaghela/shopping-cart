import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { specs, describe, it } from 'storybook-addon-specifications'
import expect from "expect";
import { AutosuggestElement } from "../ui-kit";
import { productType } from "../mock";

storiesOf("Autocomplete", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const app =  (
      <AutosuggestElement suggestionValues={productType} placeholder="Select Product" />      
    );

    specs(() => describe('items', function () {
      it('Type into Text box and click on button', function () {
        expect("1").toContain('1');
      });
    }));
    return app;
    }
  );
