import React from 'react';

class ToDoItem extends React.Component {

    render() {
        const { item } = this.props
        return (
            <tr className="todo-item">
                <td>
                    <div className="custom-control custom-checkbox">
                        <input type="text" />
                        <label htmlFor=""></label>
                    </div>
                </td>
                <td className="col-1">
                    <input type="text" defaultValue={item.text} 
                    onChange={event => this.props.updateToDoText(item.uuid, event.target.value)} />
                </td>
                <td className="col-action">
                    <i className="icon-remove fa fa-remove"
                    onClick={() => this.props.removeItem(item.uuid)} 
                    />
                </td>
            </tr>
        )
    }
}

export default ToDoItem;