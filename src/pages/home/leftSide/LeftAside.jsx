import Category from "./category/Category";
import CategoryPost from "./category/CategoryPost";
function LeftAside() {
  return (
    <aside className="border border-gray-50 p-4 shadow-sm rounded-sm">
      <h2 className="text-dark-2 font-semibold text-xl">All Category</h2>
      {/* category */}
      <Category></Category>

      {/* category post */}
      <CategoryPost></CategoryPost>
    </aside>
  );
}

export default LeftAside;
