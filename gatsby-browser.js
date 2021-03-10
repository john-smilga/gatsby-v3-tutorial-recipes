const React = require("react")
const Layout = require("./src/components/Layout").default
// require("normalize.css")
// require("./src/assets/css/main.css")

exports.wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}
