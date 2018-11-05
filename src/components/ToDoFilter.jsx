import React from 'react';

class ToDoFilter extends React.Component {
    filters = ["all", "done", "undone"]
    render() {
        return (
            <div className="todo-filters text-right">
                <div className="btn-group btn-group-sm">
                    {this.filters.map(filter => (
                    <button type="button" className={`btn btn-light ${this.props.activeFilter === filter ? "active" : "" }`} onClick={e => this.props.setFilter(filter)} key={filter}>{filter}</button>
                    ))}
                </div>
            </div>
        )
    }
}

export default ToDoFilter;