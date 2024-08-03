import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { games, error } = useGames();

  return <div>GameGrid</div>;
};

export default GameGrid;
