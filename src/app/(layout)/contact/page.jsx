import Contacts from "@/components/contacts/Contacts";
import Shops from "@/components/shops/Shops";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Shops title={"Contact"} home={"contact"} />
      <Contacts />
    </div>
  );
};

export default Contact;
