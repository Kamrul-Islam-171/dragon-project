import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import LeftSideNav from './Shared/LeftSideNav/LeftSideNav';
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import BreakingNew from "./BreakingNew";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData();
    // console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNew></BreakingNew>
            <Navbar></Navbar>
            

            <div className="grid grid-cols-4 gap-5">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews['_id']} data = {aNews}></NewsCard>)
                        }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;