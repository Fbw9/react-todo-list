import React from 'react';

class ToDoItems extends React.Component {
    render() {
        const {item} = this.props;
        console.log('Item is:', item);
        return(
            <tr className={'todo-item'}>
                <td>
                    <div className={"custom-control custom-checkbox"}>
                        <input type="text"/>
                        <label htmlFor=""></label>
                    </div>
                </td>
                <td className={"col-1"}>

                    <input type="text" defaultValue={item.text}
                           onChange={ e => this.props.updateInput( item.uuid, e.target.value )}/>
                </td>
                <td className={'col-action'}>
                    <i className={"icon-remove fa fa-remove"}
                       onClick={ () => this.props.deleteItem(item.uuid)}/>
                </td>
            </tr>
        )
    }
}

export default ToDoItems;