import axios from "axios";

// export const AddBloodGroup = async (data) => {
//     return axios.post()
// }

export const GetBloodGroup = async (data) => {
    return axios.get("https://localhost:7212/api/Groupbloods").then(res => res.data)
};

export const AddBloodGroup = async (data) => {
    return axios.post("https://localhost:7212/api/Groupbloods", data).then(res => res.data)
}

export const getBloodGroupById = async (id) => {
    return axios.get("https://localhost:7212/api/Groupbloods/"+id).then(res => res.data)
}