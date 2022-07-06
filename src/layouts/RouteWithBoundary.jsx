import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

const RouteWithBoundary = ({children}) => {
  return (
     <Suspense fallback={"Not found"}>
        {children}
     </Suspense>
  )
}

RouteWithBoundary.propTypes = {}

export default RouteWithBoundary