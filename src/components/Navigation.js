import Navbar from 'react-bootstrap/Navbar';
import Blockies from 'react-blockies';

import logo from '../logo.png';  

const Navigation = ({ account }) => {
  return (
    <Navbar className='my-3'>
      <img
        alt="logo"
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top mx-3"
      />
      <Navbar.Brand href="#">Dapp University Template</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        {account ? (
          <p>
            {account.slice(0,5) + '...' + account.slice(38,42) + " "}
            <Blockies
              seed={account}
              size={10}
              scale={3}
              color="#2187D0"
              bgColor="#F1F2F9"
              spotColor="#767F92"
              className="identicon"
          />
          </p>
        ) : (
          <p></p> 
        )} 
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
