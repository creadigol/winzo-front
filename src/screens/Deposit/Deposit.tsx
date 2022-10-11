import React from "react";

const Deposit = () =>{
    return(
        <>
            <div className="deposit_detail">
                <h5>BNB Deposit Amount</h5>
                <input type="text" placeholder="Enter your BNB Amount" />
                <p>This address accepts only BEP-20 (BNB Chain) network (mainnet),
                transferring here any other coin will result in fund loss.</p>
                <button>Deposit</button>
            </div>
        </>
    )
};

export default Deposit;