import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../data/data";

export default function BlogDetails(){
    const {id} = useParams();
    const navigate = useNavigate();

    const post = getPost(id);

    if(!post){
        return <p>Post not found. </p>
    }

    return (
        <div>
            <h1>
                {post.title}
            </h1>
            <p className="text-secondary">URL Param: {id}</p>

            <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
            ← Back
            </button>
        </div>

    )
}