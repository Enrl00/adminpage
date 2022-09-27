import {Box,
    Typography, 
    FormControl, 
    Input, 
    InputLabel,
    Button,
Container} from '@mui/material'
import {useState, useRef} from 'react'
const styles = {
    formFileUpload:{
        height: '20vh',
        width: '100vw',
        textAlign: 'center',
        position: 'relative',
      },
      
      inputFileUpload :{
        display: 'none'
      },
      
      labelFileUpload: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
        border:'2px dashed #cbd5e1',
        backgroundColor: '#f8fafc',
        "&:dragActive":{
            backgroundColor: '#ffffff'
        }
      },
      uploadButton :{
        cursor: 'pointer',
        padding: '0.25vw',
        border:' none',
        fontFamily: 'Oswald',
        backgroundColor:'#66B60F',
        color:'#FFFFFF',
        marginTop:'10px',
        fontSize:'10px',
        "&:hover":{
            textDecorationLine: 'underline'
        }
      },
      dragFileElement: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      },
}
export function DragDropFile() {
    // drag state
    const [dragActive, setDragActive] = useState(false);
    // ref
    const inputRef = useRef(null);
    
    // handle drag events
    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    // triggers when file is dropped
    const handleDrop = function(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        // handleFiles(e.dataTransfer.files);
      }
    };
    
    // triggers when file is selected with click
    const handleChange = function(e) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        // handleFiles(e.target.files);
      }
    };
    
  // triggers the input when the button is clicked
    const onButtonClick = () => {
      inputRef.current.click();
    };
    
    return (
      <Container sx={{width:'100%'}}>
        <FormControl sx={styles.formFileUpload} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <Input ref={inputRef} type="file" sx={styles.inputFileUpload} multiple={true} onChange={handleChange} />
        <InputLabel sx={styles.labelFileUpload} htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          <Box>
            <Typography>Зургаа чирч оруулж ирж болно</Typography>
            <Button sx={styles.uploadButton} onClick={onButtonClick}>Файл оруулах</Button>
          </Box> 
        </InputLabel>
        { dragActive && <Box id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></Box> }
      </FormControl>
      </Container>
    );
  };
    