import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import App from '../src/App';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <form>
      <div style={{display:"flex", flexDirection:"row"}}>
      <TextField id="book_id" label="ID" variant="standard" onChange={(e) => setBook_Id(e.target.value)}/>
      <TextField id="book_title" label="Title" variant="standard" />
      <TextField id="book_author" label="Author" variant="standard" />
      </div>
      <br/>
      <div>
      <TextField id="book_description" label="Description" variant="standard" />
      
      
      </div>
      <br/>
      <div style={{display:"flex", flexDirection:"row"}}>
      <TextField id="book_category" label="Category" variant="standard" />
      <TextField id="book_cover_url" label="Image-URL" variant="standard" />
      </div>
      <br/>
      <div style={{display:"flex", flexDirection:"row"}}>
      <TextField id="book_publshedAt" label="Publishing place" variant="standard" />
      <TextField id="book_isActive" label="Published?" variant="standard" />
      

      </div>
      <Button variant="contained" onClick={Submit}>Contained</Button>
      </form>
    </Box>
  );
}