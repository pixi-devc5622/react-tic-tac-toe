function Square({ value, onClick, disabled, isWinning }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-20 h-20 p-0
        border border-gray-400
        flex items-center justify-center
        text-3xl font-bold
        transition
        ${isWinning ? "bg-green-300" : "bg-blue-200 hover:bg-blue-300"}
        ${disabled ? "cursor-not-allowed opacity-70" : ""}
      `}
    >
      {value}
    </button>
  );
}

export default Square;
