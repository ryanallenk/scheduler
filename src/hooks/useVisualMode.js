import { useState } from "react";

export default function useVisualMode(initial) {
const [mode, setMode] = useState(initial);
const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if(replace){
      history.pop()
    }
    setMode(newMode);
    setHistory(prev => ([...prev, newMode]));
  }

  function back () {
    if(history.length > 1) {
      history.pop()
    }

    setMode(history[history.length - 1])
    setHistory(prev => ([...prev]));
  }
  return {transition, mode, back};
}