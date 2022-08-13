import axios from "axios";
import useSWR from 'swr';

export const appName= process.env.appName;
export const apiurl= process.env.apiUrl;
export const appurl= process.env.appUrl;

//touch .nojekyll

const fetcher = (url) => axios.get(url).then(res => JSON.parse(res.data));

export const FetchApi = (id) => {
    const { data, error } = useSWR(`/api/${id}`, fetcher)

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
