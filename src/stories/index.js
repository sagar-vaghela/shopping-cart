import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Badge } from "../ui-kit/common-ui-components";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { specs, describe, it } from "storybook-addon-specifications";
import expect from "expect";

storiesOf("Welcome", module).add("to Storybook", () => (
  <div>Shopping Cart</div>
));

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("with text", () => (
    <Button
      text={object("Caption", "Hello Button")}
      disabled={object("ReadOnly", "true")}
      onClick={action("clicked")}
    />
  ))
  .add("disabled", () => <Button text="Hello Button" disabled="true" />);

storiesOf("Badge", module)
  .addDecorator(withKnobs)

  .add("with zero quantity", () => {
    const app = (
      <Badge
        count={object("Card Items", 0)}
        s={object("Size (min/max)", `min`)}
      />
    );
    specs(() =>
      describe("Item", function() {
        it("With Zero Quantity", function() {
          expect("1").toContain("1");
        });
        it("You can also Test by Properties", function() {
          expect("900").toContain("900");
        });
      })
    );
    return app;
  })

  .add("with more than 10", () => {
    const app = (
      <Badge
        count={object("Card Items", 11)}
        s={object("Size (min/max)", `min`)}
      />
    );

    specs(() =>
      describe("Item", function() {
        it("With Zero Quantity", function() {
          expect("1").toContain("1");
        });
        it("You can also Test by Properties", function() {
          expect("900").toContain("900");
        });
      })
    );

    return app;
  });
