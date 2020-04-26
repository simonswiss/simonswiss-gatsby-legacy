import React, { Fragment } from 'react'

import GlobalStyles from '../global-styles'

import LayoutMain from './layout-main'
import LayoutArticle from './layout-article'

class Layout extends React.Component {
  render() {
    const { children, isArticle, type } = this.props

    return (
      <Fragment>
        <GlobalStyles />
        {isArticle ? (
          <LayoutArticle children={children} type={type} />
        ) : (
          <LayoutMain children={children} />
        )}
      </Fragment>
    )
  }
}

export default Layout
