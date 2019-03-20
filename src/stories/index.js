import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Badge } from "../ui-kit/common-ui-components";

storiesOf("Welcome", module).add("to Storybook", () => <div>Shopping Cart</div>);

storiesOf("Button", module)
  .add("with text", () => <Button text="Hello Button" onClick={action("clicked")} />)
  .add("disabled", () => <Button text="Hello Button" disabled="true" />);

storiesOf("Badge", module)
  .add("with zero quantity", () => <Badge count="0" />)
  .add("with more than 10", () => <Badge count="100" />)
  .add("with more than 10", () => <Badge count="100" />);