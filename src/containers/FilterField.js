import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

let FilterField = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(setVisibilityFilter('SHOW_SEARCH', input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
FilterField = connect()(FilterField)

export default FilterField
