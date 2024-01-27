import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const StyledToolbarContainer = styled.div`
  position: relative;
  margin-top: 20px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff; 
  padding: 10px;
  box-shadow: 0px -5px 5px -5px #777; 

  @media (max-width: 767px) {
    position: relative;
    margin-top: 50px;
    ;
  }
`;

const Toolbar = () => {
  return (
    <StyledToolbarContainer>
      <Stack spacing={2}>
        <Pagination count={5} variant="outlined" />
      </Stack>
    </StyledToolbarContainer>
  );
}

export default Toolbar;
