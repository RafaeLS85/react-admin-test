// import jsonServerProvider from 'ra-data-json-server';
import jsonServerProvider from "ra-data-simple-rest";

export const dataProvider = jsonServerProvider(
    "http://localhost:3000"
);