
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNew = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover = {true} speed={100} >
                <Link to = {'/'} className="mr-10">I can be a React component, multiple React components, or just some text.</Link>
                <Link to = {'/'} className="mr-10">I can be a React component, multiple React components, or just some text.</Link>
                <Link to = {'/'} className="mr-10">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>

        </div>
    );
};

export default BreakingNew;