import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setAllCategories(data))
    }, [])

    console.log(allCategories)
    return (
        <div>
            <h1 className="text-2xl font-bold">All Categories</h1>
            <div className='text-xl space-y-3 mt-5'>
                {
                    allCategories.map(item => <Link to={`/category/${item.id}`} className="block ml-8" key={item.id}>{item.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;