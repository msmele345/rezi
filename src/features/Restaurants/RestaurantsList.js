import React from "react";
import {useSelector} from "react-redux";
import {DataGrid} from '@material-ui/data-grid';

export const restaurantColumns = [
    { field: 'id', headerName: 'ID', width: 275 },
    {
        field: 'name',
        headerName: "Restaurant Name",
        width: 250
    },
    {
        field: 'cuisine',
        headerName: "Food Category",
        width: 250
    },
    {
        field: 'borough',
        headerName: "Neighborhood",
        width: 250
    }
];

const RestaurantList = () => {

    const restaurants = useSelector(state => state.restaurants);
    const appState = useSelector(({app}) => app);

    const {isUserSubmit} = appState;

    const renderHeader = isUserSubmit => isUserSubmit
        ? restaurants[0].borough
        : "Trending";

    return (
        <div className="data-grid">
            <h3>{renderHeader(isUserSubmit)} Restaurants:</h3>
            <DataGrid
                rows={restaurants}
                columns={restaurantColumns}
                pageSize={5}
            />
        </div>
    )
};

export default RestaurantList;