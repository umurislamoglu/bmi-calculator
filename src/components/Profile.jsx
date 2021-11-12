import React , {useState, useEffect} from 'react'

const Profile = () => {

    const [name, setName] = useState("")
    const [bmiz, setBmiz] = useState(0)

    useEffect(() => {
        setName(localStorage.getItem("username"));
        setBmiz(Number(localStorage.getItem("userbmi")));
    }, [])



    const deleteHistory = () =>{
        localStorage.removeItem("username");
        localStorage.removeItem("userbmi");
        setName("");
        setBmiz(0)
    }
    
    return (
        <div className="mt-5">
            <h2>My Result</h2>
            <div className="w-50 d-flex flex-row justify-content-around mx-auto mt-5">
                <span className="fs-4">{name}</span>
                <span className="fs-4 ">{bmiz}</span>
                </div>

                <button className="btn btn-outline-danger px-3 mt-5" onClick={deleteHistory} >Delete History</button>

        </div>
    )
}

export default Profile
