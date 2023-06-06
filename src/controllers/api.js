import axios from 'axios';


export const fetchData = async () => {
    try {
        const { data: response } = await axios.get("https://api.tvmaze.com/search/shows?q=all"); 
        return response;


    } catch (e) {
        console.log("Error occured inside api.js");
        console.log(e.messgae);
        return false;
    }
}