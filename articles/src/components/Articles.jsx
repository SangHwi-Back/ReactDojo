import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ArticleContext from './ArticleContext';

export default function Articles() {
  const articles = useContext(ArticleContext).articles;
  return (
    <div className="m-4">
        <Link to="/insertArticles" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Insert Articles
        </Link>

        <table className="border border-slate-500 border-spacing-2">
          <thead className="bg-gray-200 border-spacing-4">
            <tr>
              <th className="px-4 py-2">Id</th>
              <th className="px-4">Title</th>
              <th className="px-4">Author</th>
              <th className="px-4">Category</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="px-4 py-1 text-center">{article.id}</td>
                <td className="px-4">{article.title}</td>
                <td className="px-4">{article.author}</td>
                <td className="px-4">{article.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}