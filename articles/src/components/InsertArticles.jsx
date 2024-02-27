import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import ArticleContext from './ArticleContext';

export default function InsertArticles() {
    const {articles, setArticles} = useContext(ArticleContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = articles.length+1;
        if (title || author || category) {
            setArticles([...articles, { id, title, author, category }]);
        }
        
        navigate("/articles");
    }

    return (
        <div className='m-4'>
            <form onSubmit={handleSubmit}>
                <div className="m-4">
                    <label className="block">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="m-4">
                    <label className="block">Author</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='It is me'/>
                </div>
                <div className="m-4">
                    <label className="block">Category</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="m-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}