export default function CardGrid({ children }) {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 list-none">
            {children}
        </div>
    );
}