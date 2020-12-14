import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';
import moment from 'moment';

Item.propTypes = {
    item: PropTypes.object
};

Item.defaultProps = {
    item: {}
}

function Item(props) {
    const { item } = props;

    return (
        <div className="item">
            <Jumbotron>
                <h3>{moment(item.applicable_date).format('dddd')}</h3>
                <p className='min'>
                    Min: {Math.round(item.min_temp)}
                </p>
                <p className='max'>
                    Max: {Math.round(item.max_temp)}
                </p>
            </Jumbotron>
        </div>
    );
}

export default Item;