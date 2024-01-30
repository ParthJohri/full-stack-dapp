import {useState,useEffect} from 'react'
import "./Memo.css"
const Memo = ({state}) =>{
    const [memos,setMemos]=useState([])
    const {contract}=state;
    useEffect(()=>{
        const memosMessage=async()=>{
            const memos=await contract.getMemos();
            setMemos(memos)
        }
        contract && memosMessage();
    },[contract])
    return <>
    <h3>Recent Transactions</h3>

    {memos.map((memo, index) => (
            <div key={index} className="container-fluid">
                <table className="p1">
                    <tbody className="p1">
                        <tr className="p1">
                        <td className="p1">{memo.name}</td>
                        <td className="p1">{memo.message}</td>
                        <td className="p1">{new Date(Number(memo.timestamp) * 1000).toLocaleString()}</td>
                        <td className="p1">{memo.from}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ))}
    </>
}
export default Memo;