import axios from 'axios'

export const getSingleLaunch = (id) => {
    return axios.get(`https://api.spacexdata.com/v3/launches/${id}`)
}

export const getAllLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches/')
}

export const getLaunchYear = (godina) =>{
    return axios.get(`https://api.spacexdata.com/v3/launches?launch_year=${godina}`)
}