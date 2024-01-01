import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    return (
        <div>
            I am login page
            <br/>
            <span>
                decared router: 
                <Link to='/article'>redirect to article page</Link>
            </span>
            <br/>
            <span>
                command router
                <button onClick={() => navigate('/article')}>redirect to article page</button>
            </span>
            <br/>
            <span>
                command router with search params 
                <button onClick={() => navigate('/article?id=10001&&name=yyc')}>redirect to article page with search params</button>
            </span>
            <br/>
            <span>
                decared router with params 
                <Link to='/article/10000/yucai'>redirect to article page with params</Link>
            </span>
        </div> 
    )
} 

export default Login