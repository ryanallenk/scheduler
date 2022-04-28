import { useState } from "react";

export default function useVisualMode(initial) {
const [mode, setMode] = useState(initial);
const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    const historyUpdate = [...history]
    // if you want to replace the history item (i.e. it is not a visualMode you should return to when using the "back" function)
    if(replace){
      historyUpdate.pop()
    }
    historyUpdate.push(newMode)

    setMode(newMode);
    setHistory(historyUpdate);
  }

  function back () {
    const historyUpdate = [...history]
    // remove the most recent history item as along as there is a previous item
    if(historyUpdate.length > 1) {
      historyUpdate.pop()
    }

    setHistory(historyUpdate);
    setMode(historyUpdate[historyUpdate.length - 1])
  }
  return {transition, mode, back};
}