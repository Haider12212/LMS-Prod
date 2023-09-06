"use client"
import React, { Component } from 'react'
import { init } from 'ityped'

export default class MainText extends Component {
  componentDidMount() {
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: true, backDelay: 1000, typeSpeed: 100, strings: [' Skills...', ' Life...'] })
  }
  render() {
    return <span id="myElement"></span>
  }
}