import "./Header.css";
import { Container , Nav , Navbar } from "react-bootstrap";
import React from "react";
import { useMetaMask } from "metamask-react";
import metamask from "../../../assets/image/metamask.png";
import { useEffect, useState} from "react";
import { loginRequest } from "../../../redux/actions/UserAction";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
interface Props {
    loginAction:any;
    
}
const Header = ({loginAction}:Props) =>{
    
    const { status, connect, account, chainId, ethereum } = useMetaMask();
    const [userAccount, setUserAccount] = useState<any>();
    const [userWallet, setUserWallet] = useState("");
    useEffect(()=>{
        if(account){
            setUserWallet(account.substring(0, 5)+'...'+account.substr(account.length - 4));
            
        }
        setUserAccount(account);
    },[account, status]);
    useEffect(()=>{
        if(account){
            loginAction({metamaskId : account});
        }
    },[account]);
    return(
        <>
            <div className="navbar_main">
                <Container>
                    <Navbar expand="lg" >
                        <Container>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto" navbarScroll >
                                    <Nav.Link href="/" >Home</Nav.Link>
                                    <Nav.Link href="Bracker" >Game Detail</Nav.Link>
                                    <Nav.Link href="Brickgame" >Running Game</Nav.Link>
                                    <Nav.Link href="deposit" >Deposit</Nav.Link>
                                </Nav>
                                <Nav className="right_info" >
                                   {userAccount ? 
                                   <Nav.Link  >{userWallet}</Nav.Link>
                                   :  <Nav.Link>
                                        <img onClick={connect} src={metamask} alt="metamask" />
                                    </Nav.Link>}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
        </>
    );
}
const mapStateToProps = ({ user }: any) => ({
});

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        loginAction : loginRequest
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);