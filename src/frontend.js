import React from 'react'
import ReactDOM from 'react-dom'
import "./frontend.scss"

const divsToUpdate = document.querySelectorAll(".paying-attention-update-me")

divsToUpdate.forEach(function(div) {
  const data = JSON.parse(div.querySelector("pre").innerHTML);
  ReactDOM.render(<Quiz {...data}/>, div)
  div.classList.remove("paying-attention-update-me")
  // console.log("hello from react");
  // console.log(div);
})

function Quiz(props) {
  return (
    <div className="paying-attention-frontend">
      {props.question}
      <ul>
        {props.answers.map((answer) => {
          return <li>{answer}</li>
        })}
      </ul>
    </div>
  )
}