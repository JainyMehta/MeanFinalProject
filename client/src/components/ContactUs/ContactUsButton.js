import React from 'react';
import { FloatingButton, Item } from "react-floating-button";

const ContactUsBtn = () => {
  return (
<FloatingButton>
  <Item
    right={true}
    top={false}
    onClick={() => {
      console.log("callback function here");
    }}
  >Contact Us</Item>
</FloatingButton>
  );
}

export default ContactUsBtn;