import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Profile from "../Profile"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <aside>
        <Profile />
      </aside>
      <main>{children}</main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
