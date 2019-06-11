import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import arrow from "../images/arrow.png"

import projects from "../projects"

const projectUrl = project =>
  `/project?name=${project.name.toLowerCase().replace(" ", "-")}`

export default class ProjectPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.loadProject()
  }

  componentWillReceiveProps() {
    this.loadProject()
  }

  loadProject() {
    const { search } = window.location

    const idx = projects.findIndex(p => projectUrl(p).includes(search))
    const previousIdx = idx > 0 ? idx - 1 : projects.length - 1
    const nextIdx = idx === projects.length - 1 ? 0 : idx + 1

    const project = projects[idx]
    const previousProject = projects[previousIdx]
    const nextProject = projects[nextIdx]

    this.setState({ project, previousProject, nextProject })
  }

  render() {
    const { project, previousProject, nextProject } = this.state
    if (!project) return null

    const { name, copy, image, technologies } = project

    return (
      <Layout>
        <SEO title={name} />

        <div style={{ textAlign: "center" }}>
          <div
            id="project-nav"
            style={{
              position: "fixed",
              display: "flex",
              justifyContent: "space-between",
              top: "50%",
              marginBottom: "20px",
            }}
          >
            <Link
              to={projectUrl(previousProject)}
              style={{ color: "black", textDecoration: `none`, margin: 0 }}
            >
              <img
                className="arrow"
                style={{
                  transform: "rotate(180deg)",
                  cursor: "pointer",
                }}
                src={arrow}
              />
            </Link>
            <Link
              to={projectUrl(nextProject)}
              style={{ color: "black", textDecoration: `none`, margin: 0 }}
            >
              <img
                className="arrow"
                style={{
                  cursor: "pointer",
                }}
                src={arrow}
              />
            </Link>
          </div>

          <p
            style={{
              fontSize: "1.2em",
              letterSpacing: "0.5px",
              margin: "50px 0 30px 0",
              backgroundColor: "white",
            }}
          >
            <b>{name}</b>
          </p>

          <p
            style={{
              maxWidth: "600px",
              textAlign: "left",
              margin: "0 auto",
              backgroundColor: "white",
            }}
          >
            {copy}

            <span
              style={{
                fontSize: "0.8em",
                display: "block",
                marginTop: "15px",
                backgroundColor: "white",
              }}
            >
              <b style={{ marginRight: "10px" }}>Technologies:</b>
              {technologies.sort().join(", ")}
            </span>
          </p>

          <img
            className="project-image"
            style={{ width: "100%", marginTop: "20px" }}
            src={require(`../images/${image}`)}
          />
        </div>
      </Layout>
    )
  }
}
