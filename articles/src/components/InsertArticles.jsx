import data from '../resources/data.json';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function InsertArticles() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [_, setArticles] = useState(data.articles);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log('submit');
        e.preventDefault();
        setArticles((prevArticles) => {
            return [...prevArticles, { title, author, category }];
        });
        navigate("/articles");
    }

    return (
        <div className='m-4'>
            <form onSubmit={handleSubmit}>
                <div className="m-4">
                    <label className="block">Title</label>
                    <input className="border border-slate-500" type="text" value={title} onChange={setTitle}/>
                </div>
                <div className="m-4">
                    <label className="block">Author</label>
                    <input className="border border-slate-500" type="text" value={author} onChange={setAuthor} placeholder='It is me'/>
                </div>
                <div className="m-4">
                    <label className="block">Category</label>
                    <input className="border border-slate-500" type="text" value={category} onChange={setCategory}/>
                </div>
                <div className="m-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}