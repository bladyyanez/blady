import React from 'react'
import store from '../store'
import { connect } from 'react-redux'
import BasicButton from './basicButton'
import incrementCount from '../actions/incrementCount'

const mapStateToProps = (state) => ({
  contador: state.count
})

const mapDispatchToProps = (dispatch) => ({
  incrementCountRef: () => dispatch(incrementCount())
})

const MyFirstComponent = (props) => {

  console.log("PROPS: " + JSON.stringify(props))

  return (
    <div>
      <h1>Contador</h1>
      <h1>{props.contador}</h1>
      <div><button onClick={() => {props.incrementCountRef()}}>Incrementar</button></div>
    </div>
    )
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MyFirstComponent);
