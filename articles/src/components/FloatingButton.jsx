import { Link } from "react-router-dom";

export default function FloatringButton() {
    return (
        <Link
            className="
                fixed top-5 right-5 
                w-8 h-8 
                bg-blue-500 text-white hover:bg-blue-400
                text-2xl rounded-full focus:outline-none" 
            to="./insertArticles">
            +
        </Link>
    );
}