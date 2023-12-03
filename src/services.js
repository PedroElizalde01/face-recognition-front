import axios from "axios";

const url = "http://127.0.0.1:8000"

const attendaceService = {
    uploadFace: async (props) => { 
      const res = await axios.post(`${url}/upload/${props.name}`, props.file);
      return res
    },
    attendance: async (props) => { 
        const res = await axios.post(`${url}/attendance`, props.file);
        return res
    },
  };
  
  const UseAttendaceService = () => attendaceService;
  
  export { UseAttendaceService };