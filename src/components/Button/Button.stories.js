import React from "react";
import Button from "./Button";

// Define the story using the Meta object
export default {
  title: "Button",
  component: Button,
};

// Create a template for your component
const Template = (args) => <Button {...args} />;

// Define the Default story
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Click Me",
  onClick: () => alert("Button clicked!"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Click Me",
  onClick: () => alert("Button clicked!"),
};
