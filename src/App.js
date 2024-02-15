import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  useEffect(() => {
    console.log("useEffect called");
  });

  useEffect(() => {
    document.title = text
    console.log("Inside text")
  },[text])

  useEffect(() => {
    setTimeout(() => setCount(0), 5000)
  }, [text])

  console.log("Component rendering");

  return(
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times!
      </button>
      <input
      type="text"
      placeholder="Type away..."
      value={text}
      onChange={(e)=> setText(e.target.value)}
      />
      <DogPics count={count} />
    </>

  )
}

export default App;
