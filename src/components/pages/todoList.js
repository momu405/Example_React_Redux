import React , {
    Component,
} from 'react'
import PropTypes from 'prop-types'

import {
    Table,
    Row,
    Col
} from 'antd'

class todoList extends Component {
    propTypes = {
        info: PropTypes.array.isRequired
    }

    render () {
        const { info } = this.props
        const columns = [{
                title: 'Id',
                dataIndex: 'id',
                key: 'id'
            }, {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: 'Descript',
                dataIndex: 'descript',
                key: 'descript'
        }]
        
        const datas = []
        info.map((item, key) => (
            datas.push({
                key: key,
                id: item.id,
                name: item.text,
                descript: item.description
            })
        ))
        
        return (
            <Row type="flex" justify="center" align="middle">
                <Col span={12}>
                    <Table columns={columns} dataSource={datas} />
                </Col>
            </Row>
        )
    }
}

export default todoList