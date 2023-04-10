import React, { useContext } from 'react'
import { Button, Image, Menu, Icon, Input } from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg';
import { NavLink, Navigate, useLocation } from 'react-router-dom'
import logout from '../../context/actions/auth/logout';
import { useNavigate} from 'react-router-dom'
import { GlobalContext } from '../../context/Provider';
import isAuthenticated from '../../utils/isAuthenticated';
import searchContacts from '../../context/contacts/searchContacts';

export const Header = () => {
  const  { pathname}  = useLocation()
  console.log(pathname)

  const navigate = useNavigate()
  const { contactsDispatch: dispatch, authDispatch } = useContext(GlobalContext);

 
  const handleUserLogout = () => {
    logout(navigate)(dispatch)(authDispatch);
    
  };

  const onChange = (e, { value }) => {
    const searchText = value.trim().replace(/" "/g, "");

    searchContacts(searchText)(dispatch)

   
  };

  return (
    <Menu secondary pointing>
    <Image src={logo} width={60} />
    <Menu.Item as={NavLink} to="/" style={{ fontSize: 24 }}>
      E-sport
    </Menu.Item>

    {isAuthenticated() && pathname !== '/contacts/create' && (
      <Menu.Item position="right">
        <Input
          style={{ width: 350 }}
          placeholder="Search Contacts"
          onChange={onChange}
        />
      </Menu.Item>
    )}

    {isAuthenticated() && (
      <Menu.Item position="right">
        <Button as={NavLink} to="/contacts/create" primary basic icon>
          <Icon name="add"></Icon>
          { pathname==='/contacts/create' ? 'Create New' : 'Create Contact' }
        </Button>
      </Menu.Item>
    )}

    {isAuthenticated() && pathname==='/contacts/create' && (
      <Menu.Item position="right">
        <Button as={NavLink} to="/" primary basic icon>
        <Icon name='left arrow' />
          ContactList
        </Button>
      </Menu.Item>
    )}
    {isAuthenticated() && (
      <Menu.Item>
        {" "}
        <Button onClick={handleUserLogout} color="red" basic icon>
          <Icon name="log out"></Icon>
          Logout
        </Button>
      </Menu.Item>
    )}
  </Menu>)
}
