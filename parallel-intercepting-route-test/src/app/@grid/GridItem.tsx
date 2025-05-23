import {Row} from "@/app/(store)/rows";

export default function GridItem({row}: { row: Row }) {
  return <div
    className="bg-gray-200 hover:bg-gray-300 rounded-2xl flex flex-col m-2 p-4 gap-2 shadow-md transition-all duration-200">
    <h4 className="text-lg font-bold text-gray-800">{row.title}</h4>
    <span className="text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1 w-fit">{row.category}</span>
    <span className="text-gray-700">{row.author}</span>
    <span className="text-gray-600 line-clamp-3">{row.content}</span>
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-2 transition-colors duration-200">
      댓글 보기
    </button>
  </div>
}
