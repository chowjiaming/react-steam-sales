import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import useFetchGames from "./helpers/useFetchGames";
import Game from "./components/Game";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(0);
  const { games, loading, error, hasNextPage } = useFetchGames(params, page);

  const handleError = (error) => {
    if (error.message.includes("429")) {
      return "Sorry, too many requests, try again later";
    } else {
      return "Error, try again later";
    }
  };

  return (
    <Container>
      <h1>Seach Steam Sales</h1>
      <h5>Powered by CheapShark API</h5>
      {loading && <Spinner animation="border" variant="primary" />}
      {error && <h1>{handleError(error)}</h1>}
      {games.map((game) => {
        return <Game key={game.steamAppID} game={game} />;
      })}
    </Container>
  );
}

export default App;
