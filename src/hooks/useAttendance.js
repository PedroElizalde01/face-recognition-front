import { useState } from 'react';
import { UseAttendaceService } from '../services';
import { toast } from 'react-toastify';

const useAttendance = (file) => {
    const url = "http://127.0.0.1:8000"

    const [attendanceLoading, setAttendanceLoading] = useState(false);
    const [attendees, setAttendees] = useState([]);
    const [image, setImage] = useState("");

    const attendance = async () => {
    try {
        setAttendanceLoading(true);
        const response = await UseAttendaceService().attendance({ file });
        const imageUrl = response.data.annotated_image_url;
        setAttendees(response.data.attendees);
        setImage(url + imageUrl);
    } catch (error) {
        toast.error(error.response.data.error);
    } finally {
        setAttendanceLoading(false);
    }
    };

    return { attendanceLoading, attendance, attendees, image };
};

export default useAttendance;
