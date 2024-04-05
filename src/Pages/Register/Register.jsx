import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photoUrl');
        const pass = form.get('password');
        console.log(email, name, photo, pass);

        createUser(email, pass)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.error(error))
        
        
    }
    return (
        <div className='mt-10'>
            <Navbar></Navbar>
            <div className='mt-10'> 
                <h1 className='text-center text-3xl font-bold'>Please Login</h1>
                <form className='lg:w-1/2 mx-auto md:w-3/4' onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className='text-center mt-5 text-blue-600 font-bold text-lg'>
                    <Link to={'/login'}>Log in</Link>
                </div>
            </div>



        </div>
    );
};

export default Register;