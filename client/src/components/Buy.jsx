import {ethers} from 'ethers';
import './Buy.css'
const Buy = ({state}) =>{
    const buyChai = async (event)=>{
        event.preventDefault();
        const {contract}=state;
        const name = document.getElementById("name").value
        const message = document.getElementById("message").value
        const amt = document.getElementById("amount").value
        const amount = {value:ethers.parseEther(amt)} // Convert ether to wei
        const transaction = await contract.buyChai(name,message,amount)
        await transaction.wait();
        alert("Transaction Successful")
        window.location.reload()
    }
    return <>
    <div className="center">
    <h1>Thanks</h1>
        <form onSubmit={buyChai}> 
            <div className="inputbox">
            <input type="text" required="required" id="name"></input>
            <span>Name</span>
            </div>
            <div className="inputbox">
            <input type="text" required="required" id="message"></input>
            <span>Message</span>
            </div>
            <div className="inputbox">
            <input type="text" required="required" id="amount"></input>
            <span>Amount</span>
            </div>
            <div className="hi">
            <button onSubmit={buyChai} className="inputBox">Buy</button>
            </div>
        </form> 
        </div>
    </>
}
export default Buy;