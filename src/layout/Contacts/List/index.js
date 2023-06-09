import React from "react";
import {
  Placeholder,
  List,
  Image,
  Container,
  Message,
  Header as SemanticHeader,
  Button,
  Icon,
} from "semantic-ui-react";
import { Header } from "../../../components/Header";
import { ImageThumb } from "../../../components/ImageThumb";
import Favorites from "../Favorites";


const ContactsListUI = ({state: { contacts: { loading, isSearchActive, foundContacts, data }}, deleteContact, starUnstarContact}) => {

const currentContacts = isSearchActive ? foundContacts : data




  return (
    <div>
          <Header />
          <Container>

       
        
        <SemanticHeader>STARRED</SemanticHeader>
        <Favorites favorites={currentContacts.filter((item) => item.is_favorite)} loading={loading} />
        <SemanticHeader>ALL</SemanticHeader>

        {loading && (
          <>
            {" "}
            <div>Contacts List</div>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </>
        )}

        {!loading && currentContacts.length === 0 && (<Message content="You don't have any contact already"/>)}

        <List>
            {
                currentContacts.length > 0 && currentContacts.map((contact, i) => 
                (<List.Item key={contact.id} disabled={contact.deleting} >
                    <List.Content floated='right'>
                       
                        <span>
                          {contact.country_code}
                          {contact.phone_number}</span>
                        <Button color='red' size="tiny" onClick={() => deleteContact(contact.id)}>
                          <Icon name='trash' />
                        </Button>
                        <Button onClick={() => starUnstarContact(contact.id, contact.is_favorite)}>
                          {contact.is_favorite ? 'Unstar': 'Star'}
                        
                        </Button>
                     </List.Content>
                    <List.Content style={{ display: 'flex', alignItems: 'center'}}>
                        <ImageThumb circular firstName={contact.first_name} lastName={contact.last_name} src={contact.contact_picture} style={{ width: 45, height: 45}}/>
                     <span>
                      { contact.first_name + ' '+ contact.last_name}
                      { contact.is_favorite && <Icon name='heart' color='red'/>}
                      </span>
                     </List.Content>

                </List.Item>)
                )

            }
        </List>  
        </Container>
    </div>
  )
}

export default ContactsListUI;