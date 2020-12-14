import weatherApi from 'api/weatherApi';
import SearchForm from 'features/Weather/components/SearchForm';
import List from 'features/Weather/components/List';
import React, { useState, useEffect } from 'react';
import { Container, Popover, PopoverHeader, PopoverBody, ListGroup, ListGroupItem, Alert } from 'reactstrap';
import './main.scss';
import Loading from '../../../../components/Loading';

MainPage.propTypes = {};

function MainPage(props) {

    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [city, setCity] = useState([]);
    const [weather, setWeather] = useState([]);
    const [woeid, setWoeid] = useState('');
    const [popoverOpen, setPopoverOpen] = useState(false);

    useEffect(() => {
        async function fetchCity() {
            setPopoverOpen(false);
            const data = await weatherApi.getCity(search);
            if (data.length > 0) {
                setCity(data);
            } else {
                setCity([]);
            }
            setPopoverOpen(true);
        }
        if (search !== '') fetchCity();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        async function fetchLocation() {
            setLoading(true);
            setPopoverOpen(!popoverOpen);
            const result = await weatherApi.getLocation(woeid);
            if (Object.keys(result).length !== 0) {
                setWeather(result);
            }
            setLoading(false);
        }
        if (woeid !== '') fetchLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [woeid]);

    function handleSearchChange(newFormValues) {
        console.log('search city: ', newFormValues.search);
        setSearch(newFormValues.search);
    }

    function handleSelectCity(woeid) {
        console.log('woeid: ', woeid);
        setWoeid(woeid);
    }

    return (
        <div className="weather-main">
            {
                loading && <Loading />
            }
            <Container className="text-center">
                <SearchForm onSubmit={handleSearchChange} listCity={city} />
                <Popover placement="bottom" isOpen={popoverOpen} target="inputSearch">
                    <PopoverHeader>Select city</PopoverHeader>
                    <PopoverBody>
                        <ListGroup>
                            {
                                city.length === 0 && <ListGroupItem>Not Found</ListGroupItem>
                            }
                            {
                                city && city.map((item, index) => <ListGroupItem
                                    key={index}
                                    onClick={() => handleSelectCity(item.woeid)}>{item.title}</ListGroupItem>
                                )
                            }
                        </ListGroup>
                    </PopoverBody>
                </Popover>
                {
                    !loading && Object.keys(weather).length !== 0 && (
                        <><Alert color="primary">{weather.title}</Alert>
                            <List list={weather.consolidated_weather} /></>
                    )
                }
            </Container>
        </div>
    );
}

export default MainPage;