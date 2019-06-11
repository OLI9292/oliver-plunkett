import React, { Component } from "react"

import Header from "./header"
import "./layout.css"

var colors = ["#c7254e", "#2647A1", "#609DD3", "#e6b24f"]

var random = {
  x: function() {
    return Math.random() * window.innerWidth
  },
  y: function() {
    return Math.random() * document.documentElement.scrollHeight
  },
  width: function() {
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1
    return plusOrMinus * Math.random() * window.innerWidth
  },
  color: function() {
    return colors[Math.floor(Math.random() * colors.length)]
  },
  dash: function() {
    return randomIntFromInterval(window.innerWidth / 10, window.innerWidth / 2)
  },
}

function createLine(x, y, width, color, dashLength) {
  var line = document.createElementNS("http://www.w3.org/2000/svg", "path")
  line.setAttribute("d", "M" + x + " " + y + "h " + width)
  line.setAttribute("stroke", color)
  line.setAttribute("stroke-dasharray", dashLength)
  return line
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default class Layout extends Component {
  componentDidMount() {
    const svg = document.getElementById("lines")
    if (!svg) return

    for (let i = 1; i < 60; i += 1) {
      var line = createLine(
        random.x(),
        random.y(),
        random.width(),
        random.color(),
        random.dash()
      )
      svg.appendChild(line)
    }
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <Header siteTitle={"Oliver Plunkett"} />

        <svg id="lines" />

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1100,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            fontFamily: "Work Sans,-apple-system,BlinkMacSystemFont",
            color: "black",
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
