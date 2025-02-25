import { useParams } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";


const NewsDetails = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div className="space-y-5 mt-10">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4">
                <div className="col-span-3">Content {}</div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;