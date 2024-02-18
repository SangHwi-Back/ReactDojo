import data from '../resources/data.json';

export default function Articles() {

    return (
      <div className="m-4">
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
            {data.articles.map((article) => (
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