/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

const SortableTabItem = SortableElement(({ value }) => (
    <>
        <div tabIndex={0} className={`tab-nav-item ${value.id === 2 && 'active'}`} data-tab-id={`${value.id}`}>
            <span className="tabs-icon">
                <img src="/images/icons/icon-4.svg" alt="icon-4" />
            </span>
            <span className="tabs-text">{value.label}</span>
        </div>
    </>
));

const SortableTabList = SortableContainer(({ items }) => {

    return (
        <div className='tab-nav'>
            {items.map((value, index) => (
                <SortableTabItem
                    key={value.id}
                    index={index}
                    value={value}
                />
            ))}
        </div>
    );
});

class SortableTabComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1, label: 'organizers',
                },
                {
                    id: 2, label: 'speakers',
                },
                {
                    id: 3, label: 'locations',
                },
                {
                    id: 4, label: 'schedules',
                },
                {
                    id: 5, label: 'sponsors',
                },
            ],
            clickedItem: null,
        };
    }


    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMoveImmutable(items, oldIndex, newIndex),
        }));
    };

    onFeatureClick = (index) => {
        const clickedItem = this.state.clickedItem === index ? null : index;
        this.setState({ clickedItem });
    }

    render() {
        return (
            <>
                <SortableTabList
                    items={this.state.items}
                    onSortEnd={this.onSortEnd}
                />
            </>
        )
    }
}
export default SortableTabComponent;

