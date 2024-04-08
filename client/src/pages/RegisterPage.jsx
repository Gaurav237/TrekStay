import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="mb-16 grow flex items-center justify-around">
            <div>
                <h1 className="text-4xl text-center mb-3 font-semibold">Register</h1>
                <form action="" className="max-w-md mx-auto">
                    <input type="text" name="name" placeholder="John Doe"/>
                    <input type="email" name="email" placeholder="john@email.com"/>
                    <input type="password" name="password" placeholder="password" />
                    <button className="primary">Sign Up</button>
                </form>
                <div className="text-center">
                    <span className="text-gray-500">Already a member ? </span> <Link to={"/login"} className="underline font-medium">Login</Link>
                </div>
            </div>
        </div>
    );
}