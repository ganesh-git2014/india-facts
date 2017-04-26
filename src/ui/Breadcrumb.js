import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BreadcrumbContainer} from '../styles/BaseStyles'
import CaretRight from 'react-icons/lib/fa/caret-right'

export default class Breadcrumb extends Component {

  render() {
    return <BreadcrumbContainer>
      Energy <CaretRight style={{marginLeft: 3}} className='fa'/> {this.props.label}
    </BreadcrumbContainer>
  }
}

Breadcrumb.PropTypes = {
  label: PropTypes.string.isRequired
}