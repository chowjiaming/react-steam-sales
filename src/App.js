import { useState } from "react";
import useFetchGames from "./helpers/useFetchGames";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(0);
  const { games, loading, error, hasNextPage } = useFetchGames(params, page);
  console.log(games, loading, error, hasNextPage);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
