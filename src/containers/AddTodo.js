import { connect } from 'react-redux'
import {
  addTodo
} from '../actions'
import AddTodo from '../components/pages/addTodo'

const mapStatetoProps = (state) => {
  return {
    info: state.todos
  }
}

const mapDispatchtoProps = dispatch => ({
  onAddTodo: (value) => {
    dispatch(addTodo(value))
  }
})

export default connect(mapStatetoProps, mapDispatchtoProps)(AddTodo)