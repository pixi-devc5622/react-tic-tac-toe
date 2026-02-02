import Board from "./Board";

function App() {
  return (
    <div className=" flex rounded-xl items-center justify-center bg-gray-700">
      <div className=" p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Tic Tac Toe</h1>

        <Board />
      </div>
    </div>
  );
}

export default App;
