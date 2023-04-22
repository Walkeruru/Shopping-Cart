import { Navbar,Link as LinkNext, Badge, Text, Popover} from "@nextui-org/react";
import { Link } from "react-router-dom";
import '../App.css'

const StoreNavbar = (props) => {
    const collapseItems = [
        {name:"Home", url:'/'},
        {name:"Shop", url:'/shop'},
        {name:"About", url:'/about'},
      ];

    return (
        <>
        <Navbar variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn={'xs'}/>
          <Text b color="inherit" hideIn="xs">
            SHOPNAME
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="primary">
          <Navbar.Item>
          <Link to={'/'} className="link"> Home </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to={'/shop'} className="link"> Shop </Link>
          </Navbar.Item>
          <Navbar.Item>
          <Link to={'/about'} className="link"> About </Link>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
          <Popover>
          <Popover.Trigger>
            <div>
          <Badge enableShadow disableOutline color="secondary" content={props.cantidad}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
        </Badge>
        </div>  
          </Popover.Trigger>
          <Popover.Content>
            {props.cartPopUp}
          </Popover.Content>
        </Popover>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item.name}>
            <Link to={item.url}>
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
        </>
    )
}

export default StoreNavbar