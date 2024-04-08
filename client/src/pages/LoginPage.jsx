import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="mb-16 grow flex items-center justify-around">
            <div>
                <h1 className="text-4xl text-center mb-3 font-semibold">Login</h1>
                <form action="" className="max-w-md mx-auto">
                    <input type="email" name="email" placeholder="enter email"/>
                    <input type="password" name="password" placeholder="enter password" />
                    <button className="primary">Sign In</button>
                </form>
                <div className="text-center">
                    <span className="text-gray-500">Dont have an account ?</span> <Link to={"/register"} className="underline font-medium">Register now</Link>
                </div>
            </div>
        </div>
    );
}