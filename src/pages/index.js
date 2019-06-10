import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import projects from "../projects"

var colors = ["#c7254e", "#2647A1", "#609DD3", "#e6b24f"]

var random = {
  x: function() {
    return Math.random() * window.innerWidth
  },
  y: function() {
    return Math.random() * window.innerHeight
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

const projectUrl = project =>
  `/project?name=${project.name.toLowerCase().replace(" ", "-")}`

export default class IndexPage extends Component {
  componentDidMount() {
    const svg = document.getElementById("lines")

    function start() {
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

    start()
  }

  render() {
    return (
      <Layout>
        <svg id="lines" />

        <SEO title="Home" />

        <div>
          <p
            style={{
              fontSize: "1.1em",
              marginTop: "35px",
              backgroundColor: "white",
            }}
          >
            <b>I'm a software engineer and designer in New York City.</b>
          </p>

          <div style={{ maxWidth: "800px" }}>
            <p style={{ backgroundColor: "white" }}>
              I've spent the past couple of years working on Wordcraft, an
              education platform based on the roots and composition of language.
            </p>
            <p style={{ backgroundColor: "white" }}>
              In the past, I have had the good fortune to work with curious and
              entrepreneurial individuals at Artsy and Takeout.
            </p>
          </div>

          <main>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              {projects.map(project => (
                <Link
                  to={projectUrl(project)}
                  style={{ color: "black", textDecoration: `none`, margin: 0 }}
                  key={project.name}
                >
                  <div
                    style={{
                      width: "280px",
                      height: "280px",
                      border: "1px solid black",
                      position: "relative",
                      backgroundImage: `url(${require(`../images/${project.thumbnail}`)})`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      cursor: "pointer",
                      zIndex: 900,
                      backgroundColor: "white",
                    }}
                  >
                    <p
                      style={{
                        position: "absolute",
                        fontSize: "2.25em",
                        lineHeight: "40px",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        textAlign: "center",
                        margin: "0 auto",
                        padding: "5px 0",
                      }}
                    >
                      {project.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}
