
import { useState } from 'react';
import './App.css';

function App() {
 const [prompt,setP]=useState("a couple holding hands")
 const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
  async function submit(e){
    e.preventDefault()
    setP("?")
    await  delay(200)
    alert("please wait for the image to be generated")
    setP(e.target[0].value)
    console.log(prompt);
  }
  return (
    <div className="App">
    <form onSubmit={submit}>
      <textarea placeholder="a couple holding hands" />
      <button type="submit" >submit</button>
      </form>
      <span>The default prompt is <i>a couple holding hands</i></span>
      <img itemID='picture' alt="wait an instance!!" src ={"https://image.pollinations.ai/prompt/"+prompt}/>
      <span>Wait for the prompt to be processed and returned!! </span>
    </div>
  );
}

export default App;
