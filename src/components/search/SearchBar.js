import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import axios from 'axios'

export default function Search (props){
  const data = props.suggest
    return (
      <ReactSearchBox
        placeholder="Search Courses"
        value=""
        data={data}
        onSelect={record => props.search_fn(record)}
      />
    )
}