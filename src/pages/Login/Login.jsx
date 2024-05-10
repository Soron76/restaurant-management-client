import { useContext } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';


const Login = () => {

    const { signIn, GoogleSignIn,GithubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                console.log(result.user);

                e.target.reset();
                swal("Good job!", "You have succesfully registered!", "success");

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                swal("Error!", `${error.massage}`, "error");
            })



    }
    const handleGoogleSignIN = () => {
        GoogleSignIn()
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.error(error))

    }
    const handleGithubSignIn = () => {
        GithubSignIn()
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <div className=" flex justify-center items-center py-10" >

                <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <h4 className="block text-2xl font-semibold  leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Login
                    </h4>

                    <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="email" name="email" required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input name="password" required
                                    type="password"
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                        </div>

                        <button
                            className="mt-6 btn btn-outline w-full   "

                            data-ripple-light="true"
                        >
                            Login
                        </button>
                        <p className="mt-4 block text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Do not have an account?
                            <Link to='/register'
                                className="font-medium ml-2 text-pink-500 transition-colors hover:text-blue-700"
                                href="#"
                            >
                                Create an account
                            </Link>
                        </p>
                    </form>
                    <div className="space-y-3 p-1 mb-6">
                        <h2 className="text-xl text-center ">Or login with</h2>
                        <button onClick={handleGoogleSignIN} className="btn btn-outline w-full">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                        <button onClick={handleGithubSignIn} className="btn btn-outline w-full">
                            <FaGithub></FaGithub>
                            Github
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;