import { useState } from "react";
import { useReducer, useRef, useCallback, useEffect } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.increment,
        history: [
          ...state.history,
          {
            texto: `+1 (Nuevo valor: ${state.count + action.increment})`,
            act: "increment",
          },
        ],
      };
    case "decrement":
      return {
        count: state.count -  action.increment,
        history: [
          ...state.history,
          {
            texto: `-1 (Nuevo valor: ${state.count - action.increment })`,
            act: "decrement",
          },
        ],
      };
    case "undo":
      if (state.history.length === 0) {
        return state;
      }

      let laststate = state.history[state.history.length - 1];

      if (laststate.act === "increment") {
        return {
          count: state.count - 1,
          history: state.history.slice(0, -1),
        };
      } else {
        return {
          count: state.count + 1,
          history: state.history.slice(0, -1),
        };
      }

    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const CounterGame = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [jumper, setJumper] = useState(0)
  const incrementBtnRef = useRef(null);
  // Fijar el foco en el botón de incremento al renderizar
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment", increment:jumper });
    console.log(jumper)
  }, [jumper]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement", increment:jumper });
  }, [jumper]);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);
  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <button ref={incrementBtnRef} onClick={handleIncrement}>
        +
      </button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleUndo}>Undo</button>
      <input onChange={e=> setJumper(parseInt(e.target.value) )} value={jumper}  type="text" name="" id=""  placeholder="ingresa un valor de incremento
      "/ >

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry.texto}</li>
        ))}
      </ul>
    </div>
  );
};
