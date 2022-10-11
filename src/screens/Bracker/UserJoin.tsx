import React from "react";
import user from "../../assets/image/user.png";

const UserJoin = () =>{
    return(
        <>
            <div className="select_price_main waiting_list_main">
                <h5>Selected Price</h5>
                <button className="green-btn blue-btn" >0.50 BNB</button>
                <div className="player_list">
                    <h5>Players List</h5>
                    <div className="player_list_section">
                        <div className="left_side" >
                            <span>1.</span>
                            <h5><img src={user} alt="user" />Chirag</h5>
                        </div>
                        <h5 className="right_side">0.5 BNB</h5>
                    </div>    
                </div>
                <button className="green-btn orange-btn" >Waiting for join Opponent</button>
            </div>
        </>
    );
}

export default UserJoin;