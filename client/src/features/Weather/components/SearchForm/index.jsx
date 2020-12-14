import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Row, Col } from 'reactstrap';

SearchForm.propTypes = {
    onSubmit: PropTypes.func
};

SearchForm.defaultProps = {
    onSubmit: null
}

function SearchForm(props) {

    const { onSubmit } = props;
    const [search, setSearch] = useState('');
    const typingTimeoutRef = useRef(null)

    function handleSearchChange(e) {

        const value = e.target.value
        setSearch(value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        };

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                search: value
            }
            if (value !== '') {
                onSubmit(formValues);
            }
        }, 300);
    }
    function formSubmit(e) {
        e.preventDefault();
    }

    return (
        <Form onSubmit={formSubmit}>
            <Row>
                <Col xs={4}>
                    <FormGroup>
                        <Input
                            type="search"
                            name="search"
                            id="inputSearch"
                            placeholder="Search"
                            value={search}
                            onChange={handleSearchChange}
                            data-testid='exampleSearch'
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
}

export default SearchForm;