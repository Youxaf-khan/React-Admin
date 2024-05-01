import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const BasicTextField = styled(TextField)({
  '& label.MuiInputLabel-root': {
    color: '#000'
  },
  '& label.Mui-focused': {
    color: '#000'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#000'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#0000001F'
    },
    '&:hover fieldset': {
      borderColor: '#0000001F'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0000001F'
    }
  }
});

export default BasicTextField;
