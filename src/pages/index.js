import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import projects from "../projects"

const projectUrl = project =>
  `/project?name=${project.name.toLowerCase().replace(" ", "-")}`

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { isHovering } = this.state

    return (
      <Layout>
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
              I've spent the past couple of years working on{" "}
              <a
                target="_blank"
                href="https://www.playwordcraft.com"
                style={{ color: "black" }}
              >
                <b>Wordcraft</b>
              </a>
              , an education platform based on the roots and composition of
              language.
            </p>
            <p style={{ backgroundColor: "white", margin: 0 }}>
              In the past, I have had the good fortune to work with curious and
              entrepreneurial individuals at{" "}
              <a
                target="_blank"
                href="https://www.artsy.net"
                style={{ color: "black" }}
              >
                <b>Artsy</b>
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://www.welcometotakeout.com/"
                style={{ color: "black" }}
              >
                <b>Takeout.</b>
              </a>
            </p>

            <p
              style={{
                fontSize: "0.8em",
                marginTop: "15px",
                backgroundColor: "white",
              }}
            >
              Here are links to my{" "}
              <a
                target="_blank"
                href="https://www.github.com/OLI9292"
                style={{ color: "black" }}
              >
                GitHub
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1mKn6c6TrL-MkA9jRUDi8pcgMXMlSYMuaGZMkscDo2_w/edit?usp=sharing"
                style={{ color: "black" }}
              >
                Resume
              </a>
              .<br />
              For consulting work, please reach out to me at{" "}
              <a
                target="_blank"
                href="mailto:otplunkett@gmail.com"
                style={{ color: "black" }}
              >
                otplunkett@gmail.com
              </a>
              .
            </p>
          </div>

          <main>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
                gridRowGap: "50px",
                margin: "40px 0",
                justifyItems: "center",
              }}
            >
              {projects.map(project => (
                <Link
                  to={projectUrl(project)}
                  style={{ color: "black", textDecoration: `none`, margin: 0 }}
                  key={project.name}
                >
                  <div
                    onMouseOver={() =>
                      this.setState({ isHovering: project.name })
                    }
                    onMouseLeave={() =>
                      this.setState({ isHovering: undefined })
                    }
                    style={{
                      width: "280px",
                      height: "280px",
                      border: "1px solid black",
                      position: "relative",
                      backgroundImage:
                        isHovering !== project.name &&
                        `url(${require(`../images/${project.thumbnail ||
                          project.image}`)})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      cursor: "pointer",
                      zIndex: 900,
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isHovering === project.name && (
                      <p style={{ fontSize: "2.25em", margin: 0 }}>
                        {project.name}
                      </p>
                    )}
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
