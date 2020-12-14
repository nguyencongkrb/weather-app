import weatherApi from '../../api/weatherApi'

export const requestLocation = async () => {
    let result;
    try {
        result = await weatherApi.getCity(search);
        console.log('result', result)
    } catch (err) {
        // console.log('error', err)
    }
    return {
        type: 'REQUEST_LOCATION',
    }
}

export const responseLocation = (data) => {
    return {
        type: 'RESPONSE_LOCATION',
        payload: data
    }
}

export const getLocation = (search) => {
    console.log(search)
    return async (dispatch) => {
        dispatch(requestLocation())
        try {
            const result = await weatherApi.getCity(search);
            console.log('result', result)
            dispatch(responseLocation(result))
        } catch (err) {
            // console.log('error', err)
        }
    }
}