import React, { Component } from 'react'
import { romajiConsole } from "../engine/test/romajiDelayedConsole";

export default class Test extends Component {
  render() {
    romajiConsole();
    return (
      <div>
        <h1>NAGARETEKU</h1>
        <p>Check console plz.</p>
      </div>
    )
  }
}
