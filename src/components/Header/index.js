import React, { useContext } from 'react'
import { Button, Image, Menu, Icon } from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg';
import { Link, useLocation } from 'react-router-dom'
import logout from '../../context/actions/auth/logout';
import { useNavigate} from 'react-router-dom'
import { GlobalContext } from '../../context/Provider';

export const Header = () => {
  const  { pathname}  = useLocation()

  const navigate = useNavigate()
  const { contactsDispatch: dispatch } = useContext(GlobalContext);
  const handleUserLogout = () => {
    logout(navigate)(dispatch);
  };

  return (
    <Menu secondary pointing>
      <Image src={logo} width={60}/>
        <Menu.Item as={Link} to='/' style={{fontSize:24}}>
            E-sport
        </Menu.Item>
        { pathname === '/' && (<Menu.Item position='right'>
            <Button as={Link} to={'/contacts/create'}  primary basic icon>
              <Icon name='add'></Icon>
              Create Contact
            </Button>
        </Menu.Item> )}
        { pathname === '/' &&  ( <Menu.Item>
          {" "}
          <Button onClick={handleUserLogout} color="red" basic icon>
            <Icon name="log out"></Icon>
            Logout
          </Button>
        </Menu.Item>) }

    </Menu>
  )
}
