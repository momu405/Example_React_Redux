import { connect } from 'react-redux'
import TodoList from '../components/pages/todoList'

const mapStatetoProps = (state) => {
  return {
    info: state.todos
  }
}



export default connect(mapStatetoProps, null)(TodoList)