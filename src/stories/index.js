import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Badge } from "../ui-kit/common-ui-components";
import { withKnobs, object } from "@storybook/addon-knobs/react";

storiesOf("Welcome", module).add("to Storybook", () => <div>Shopping Cart</div>);

storiesOf("Button", module)
   .addDecorator(withKnobs)
  .add("with text", () => <Button text={object("Caption","Hello Button")} disabled={object("ReadOnly","true")} onClick={action("clicked")} />)
  .add("disabled", () => <Button text="Hello Button" disabled="true" />);

storiesOf("Badge", module)
  .addDecorator(withKnobs)
  .add("with zero quantity", () => <Badge count={object("Card Items",0)} />)
  .add("with more than 10", () => <Badge count={object("Card Items",11)} />)
  .add("with more than 20", () => <Badge count={object("Card Items",25)} />);