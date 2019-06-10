import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        padding: `15px 20px`,
        borderBottom: "1px solid black",
        backgroundColor: "white",
        zIndex: 100,
      }}
    >
      <h5 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{ color: "black", textDecoration: `none`, margin: 0 }}
        >
          {siteTitle}
        </Link>
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
