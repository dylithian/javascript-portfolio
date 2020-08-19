import React from 'react';

import layout from './../CSS Modules/layout.module.css';

export class BulletList extends React.Component {
    columns() {
        let columns = [];
        let items = this.props.items;

        let startingAtItem = 0;
        for(let i = 0;i < this.props.columns; i++) {
            let columnLength = Math.round(items.length / this.props.columns) + (items.length % this.props.columns > i ? 1 : 0);
            let column = [];
            for(let j = startingAtItem; j < startingAtItem + columnLength; j++) {
                column.push(
                    <li className={`${layout.flex1}`} key={j}>{this.props.items[j]}</li>
                );
            }
            columns.push(
                <ul className={`${layout.flex1} ${layout.flexColumnNoWrap}`} key={i}>{column}</ul>
            );
            startingAtItem += columnLength;
        }
        return columns;
    }
    render() {
        return (
            <div className={`${layout.flexRowNoWrap} ${layout.flexSpaceAround}`}>
                {this.columns()}
            </div>
        );
    }
}
