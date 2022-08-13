/* eslint-disable @next/next/no-img-element */

// External Imports
import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

// Internal Imports
import Organizers from '../conference/Organizers';
import Speakers from '../conference/Speakers';
import Locations from '../conference/Locations';
import Schedules from '../conference/Schedules';
import Sponsors from '../conference/Sponsors';

const SortableTabItem = SortableElement(({ value, onFeatureClick, position, clickedItem }) => (
    <>
        <div tabIndex={0} className={`tab-nav-item ${position === clickedItem && 'active'}`} onClick={() => onFeatureClick(position)}>
            <span className="tabs-icon">
                <img src="/images/icons/icon-4.svg" alt="icon-4" />
            </span>
            <span className="tabs-text">{value.label}</span>
        </div>
        {position === clickedItem && (
            <div className="md-tab-expand-area bg-[#FBFBFB] rounded-[8px] p-[30px_18px]">
                {value.component}
            </div>
        )}
    </>
));

const SortableTabList = SortableContainer(({ items, onFeatureClick, clickedItem }) => {

    return (
        <div className='tab-nav'>
            {items.map((value, index) => (
                <SortableTabItem
                    key={value.id}
                    index={index}
                    value={value}
                    position={index}
                    onFeatureClick={onFeatureClick}
                    clickedItem={clickedItem}
                />
            ))}
        </div>
    );
});

class SortableTabComponentSm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1, label: 'organizers', component: this.props.organizers.length ? (<Organizers organizers={this.props.organizers} />) : (
                        <h3 className='text-[22px] text-title'>No Data Found</h3>
                    )
                },
                {
                    id: 2, label: 'speakers', component: this.props.speakers.length ? (<Speakers speakers={this.props.speakers} />) : (
                        <h3 className='text-[22px] text-title'>No Data Found</h3>
                    )
                },
                {
                    id: 3, label: 'locations', component: this.props.locations.length ? (<Locations locations={this.props.locations} />) : (
                        <h3 className='text-[22px] text-title'>No Data Found</h3>
                    )
                },
                {
                    id: 4, label: 'schedules', component: this.props.schedules.length ? (<Schedules schedules={this.props.schedules} />) : (
                        <h3 className='text-[22px] text-title'>No Data Found</h3>
                    )
                },
                {
                    id: 5, label: 'sponsors', component: this.props.sponsors.length ? (<Sponsors sponsors={this.props.sponsors} />) : (
                        <h3 className='text-[22px] text-title'>No Data Found</h3>
                    )
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
        return <SortableTabList
            items={this.state.items}
            onSortEnd={this.onSortEnd}
            onFeatureClick={this.onFeatureClick}
            clickedItem={this.state.clickedItem}
        />;
    }
}
export default SortableTabComponentSm;

