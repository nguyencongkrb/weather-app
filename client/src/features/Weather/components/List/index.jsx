import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Item from 'features/Weather/components/Item';

List.propTypes = {
    list: PropTypes.array,
};

List.defaultProps = {
    list: [],
};

function List(props) {
    const { list } = props;
    if(list.length === 0) return;

    return (
        <Row className='list-item'>
            {
                list.slice(0, 5).map((item, index) => {
                    return (
                        <Col key={index} >
                            <Item item={item} />
                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default List;