import { useState } from 'react';
import { UseAttendaceService } from '../services';
import { toast } from 'react-toastify';

const usePostFace = (name, file) => {
 const [uploadLoading, setUploadLoading] = useState(false);

 const postFace = async () => {
   try {
     setUploadLoading(true);
     await UseAttendaceService().uploadFace({name, file});
     toast.success("Face uploaded successfully");
   } catch (error) {
     toast.error(error.response.data.error);
   } finally {
     setUploadLoading(false);
   }
 };

 return { uploadLoading, postFace };
};

export default usePostFace;
