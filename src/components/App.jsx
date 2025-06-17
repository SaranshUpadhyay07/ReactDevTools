import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/v2/D5603AQEwS5L1cesZmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732482744075?e=1755734400&v=beta&t=M5B3FDRwgeAuOfiqsQCa04LWmstr-vQGUv9VdjhgPn0" />

      {contacts.map(createCard)}

      {/*<Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
  />*/}
    </div>
  );
}

export default App;
