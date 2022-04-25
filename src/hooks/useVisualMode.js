import { useState } from "react";

export default function useVisualMode(initial) {
const [mode, setMode] = useState(initial);
const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setMode(newMode);
    history.push(newMode)
  }

  function back () {
    const backValue = history.splice(-2,1)
    setMode(backValue[0])
  }
  return {transition, mode, back};
}