import React, { useEffect, useState } from "react";
import { Card, Label, Image, Button, ButtonContainer, Container, Input, Title } from '../components/common';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePostFace from '../hooks/usePostFace';
import useAttendance from '../hooks/useAttendance';
import CircularLoader from "../components/CircularComponent";
import InputFile from "../components/InputFile";

const MainPage = () => {
  const [file, setFile] = useState(null)
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const [fileUrl, setFileUrl] = useState(null);

 const { uploadLoading, postFace } = usePostFace(name, file);
 const { attendanceLoading, attendance, attendees, image } = useAttendance(file);

 const handleAttendance = () => {
   if(!uploadLoading && !attendanceLoading){ 
     if(!file){
       toast.error("You are missing a picture")
     } else {
       attendance()
     }
   }
 }

 const handleUploadFace = () => {
   if(!uploadLoading && !attendanceLoading){ 
     if(name === "" || !name || name === undefined){
       toast.error("You are missing the student's name")
       setError(true)
       setShake(true);
       setTimeout(() => {
         setShake(false);
       }, 500); 
     } else if (!file){
       toast.error("You are missing the picture")
     } else {
       postFace()
     }
   }
 }

 useEffect(() => {
   if (error) {
     setShake(true);
     setTimeout(() => {
       setShake(false);
     }, 500);
   }
 }, [error]);

 const handleInput = (e) => {
   setName(e.target.value)
   setError(false)
 }

 const handleFileChange = (e) => {
   const selectedFile = e.target.files[0];
   if (selectedFile) {
     setFile(selectedFile);
     setFileUrl(URL.createObjectURL(selectedFile));
   }
 };

 return (
   <Container>
     <ToastContainer />
     <Title> FACE RECOGNITION </Title>
     <InputFile image={fileUrl} type="file" accept="image/*" onChange={handleFileChange} height="200px" width="200px" />
     <ButtonContainer  >
       <Input type="text" placeholder="Student's name" error={error} onChange={(e) => handleInput(e)} className={shake ? 'shake' : ''} />
       <Button disabled={uploadLoading || attendanceLoading} onClick={handleUploadFace}>{ uploadLoading ? <CircularLoader />: "Upload face" }</Button>
       <Button disabled={uploadLoading || attendanceLoading} onClick={handleAttendance}>{ attendanceLoading ? <CircularLoader />: "Check attendace" }</Button>
       {image !== "" && 
       <Card background={"var(--background2)"} >
         <Image src={image} onClick={() => window.open(image, '_blank')}/>
         {attendees.map((name) =><Label>{name}</Label> )}
       </Card>}
     </ButtonContainer>
   </Container>
 );
}

export default MainPage;
