
import { Link } from 'react-router-dom';
import Navbar from './../Home/Shared/Navbar/Navbar';

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        console.log(email)
    }
    return (
        <div className='mt-10'>
            <Navbar></Navbar>
            <div className='mt-10'> 
                <h1 className='text-center text-3xl font-bold'>Please Login</h1>
                <form className='lg:w-1/2 mx-auto md:w-3/4' onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='text-center mt-5 text-blue-600 font-bold text-lg'>
                    <Link to={'/reg'}>Register</Link>
                </div>
            </div>



        </div>
    );
};

export default Login;