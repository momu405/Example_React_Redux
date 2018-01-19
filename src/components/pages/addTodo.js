import React , {
    Component,
} from 'react'
import PropTypes from 'prop-types'

import {
    Form,
    Input,
    Button,
    Row,
    Col
} from 'antd'

const FormItem = Form.Item

class addTodo extends Component {
    propTypes = {
        onAddTodo: PropTypes.func.isRequired,
        form: PropTypes.shape({
            getFieldDecorator: PropTypes.func.isRequired,
        })
    }


    handleSubmit = (e) => {
        const { onAddTodo } = this.props
        
        e.preventDefault()
        
        this.props.form.validateFields((err, values) => {
          if (!err) {
            onAddTodo({
                text: values.title,
                descript: values.descript
            })
          }
        })
    }

    render () {
        const { getFieldDecorator } = this.props.form
        
        return (
            <form
                className="AddTodo-form"
                onSubmit={this.handleSubmit}
            >
                <Row type="flex" justify="center" align="middle">
                    <Col span={4}>
                        <FormItem style={{ marginBottom: 0, marginRight: 5}}>
                            {getFieldDecorator('title', {})(
                                <Input placeholder="title" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={4}>
                        <FormItem style={{ marginBottom: 0, marginRight: 5}}>
                            {getFieldDecorator('descript', {})(
                                <Input placeholder="descript" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={1}>
                        <Button type="primary" htmlType="submit">Add</Button>
                    </Col>
                </Row>
            </form>
        )
    }
}

export default Form.create()(addTodo)