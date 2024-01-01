import { Link, Outlet } from "react-router-dom"

const LayOut = () => {
    return <div>
        I am layOut
        <br/>
        <Link to='/about'>display about page content in below outlet area</Link>
        <br/> 
        <Link to='/board'>display board page content in below outlet area</Link>
        <br/>
        <Outlet />
    </div>
}

export default LayOut