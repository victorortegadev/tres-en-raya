

function Square({value, Click}) {
  return (
    <button className="botón" onClick={Click}> 
      {value}
    </button>
  );
}

export default Square;
