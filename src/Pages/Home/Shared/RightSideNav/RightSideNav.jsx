import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import jone1 from '../../../../assets/qZone1.png'
import jone2 from '../../../../assets/qZone2.png'
import jone3 from '../../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold mb-3">Login With</h1>
                <button className="btn btn-outline w-full mb-2">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    GitHub
                </button>
            </div>
            <div className="mt-5 " >
                <h1 className="text-2xl font-bold mb-3">Find Us On</h1>
                <div className="flex items-center gap-3 text-lg rounded-t-lg border py-4 px-3">
                    <span><FaFacebook></FaFacebook></span>
                    <a href="">Facebook</a>
                </div>
                <div className="flex items-center gap-3 text-lg  border-x py-4 px-3">
                    <span><FaTwitter></FaTwitter></span>
                    <a href="">Twitter</a>
                </div>
                <div className="flex items-center gap-3 text-lg rounded-b-lg border py-4 px-3">
                    <span><FaInstagram></FaInstagram></span>
                    <a href="">Instagram</a>
                </div>


            </div>
            <div className="mt-5">
                <h1 className="text-2xl font-bold mb-3">Q-Zone</h1>
               <img src={jone1} alt="" />
               <img src={jone2} alt="" />
               <img src={jone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;