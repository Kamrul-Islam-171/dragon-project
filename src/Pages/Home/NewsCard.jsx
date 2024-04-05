import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {
    const { image_url, title, details, _id } = data;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <div>
                        {
                            details.length > 200 ? <><p>{details.slice(0, 200)}</p><Link to={`/news/${_id}`} className="text-blue-400">Read more...</Link> </>: <p>{details}</p>
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default NewsCard;