import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu, Button, Dropdown, Image } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore';

const Navbar: React.FC = () => {

    const rootStore = useContext(RootStoreContext);
    const {logout, user} = rootStore.userStore;

    return (
            <Menu fixed = 'top' inverted >
                <Container>
                    <Menu.Item header as={NavLink} exact to='/'>
                        <img src="/assets/logo.png" alt ="logo" style = {{marginRight: '25px'}}/>
                        Reactivities
                    </Menu.Item>
                    <Menu.Item name='Activities' as={NavLink} exact to='/activities' />
                    <Menu.Item>
                        <Button as={NavLink} exact to='/createActivity'
                         content='Create Activity' color = 'teal'
                        />
                    </Menu.Item>
                    {user && 
                        <Menu.Item position='right'>
                            <Image avatar spaced='right' src={user.image ||  '/assets/user.png'} />
                            <Dropdown pointing='top left' text={user.displayName}>
                                <Dropdown.Menu>
                                    <Dropdown.Item 
                                        as={Link} 
                                        to={`/profile/${user.username}`} 
                                        text='My profile' 
                                        icon='user'
                                    />
                                    <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    }
                </Container>
            </Menu>
    )
}

export default observer(Navbar);
