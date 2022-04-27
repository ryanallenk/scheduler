import { useState } from "react";

export default function useVisualMode(initial) {
const [mode, setMode] = useState(initial);
const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    const historyUpdate = [...history]
    if(replace){
      historyUpdate.pop()
    }
    historyUpdate.push(newMode)

    setMode(newMode);
    setHistory(historyUpdate);
  }

  function back () {
    const historyUpdate = [...history]
    
    if(historyUpdate.length > 1) {
      historyUpdate.pop()
    }

    setHistory(historyUpdate);
    setMode(historyUpdate[historyUpdate.length - 1])
  }
  return {transition, mode, back};
}