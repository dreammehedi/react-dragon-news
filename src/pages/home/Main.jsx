import Article from "./article/Article";
import LeftAside from "./leftSide/LeftAside";
import RightAside from "./rightSide/RightAside";
function Main() {
  return (
    <main className="container my-8 grid grid-cols-1 lg:grid-cols-4 justify-between gap-6">
      <LeftAside></LeftAside>
      <Article></Article>
      <RightAside></RightAside>
    </main>
  );
}

export default Main;
