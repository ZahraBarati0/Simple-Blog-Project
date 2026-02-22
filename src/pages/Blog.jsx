import { Link } from "react-router-dom"
import { posts } from "../data/data"
export default function Blog(){
    return(
        <div className="card-custom">
            <h1 className="mb-4">Blog</h1>
            <ul className="list-group">
                {posts.map((p)=>(
                    <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {p.title}
                        <Link to={`/blog/${p.id}`} className="btn btn-sm btn-primary">
                        View Blog
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}