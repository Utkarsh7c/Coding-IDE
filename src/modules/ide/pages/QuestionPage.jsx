import Container from '@mui/material/Container';
import { Header } from '../../../shared/Components/Header';
import Grid from '@mui/material/Grid';
import { Ide } from '../Components/Ide';
export const QuestionPage =()=>{
    return (
        <Container >
            <Header/>
            <Grid container spacing={2}>
  <Grid item xs={6}>
    Question-Problem Statement:
    wap to print area of rectangle given length and width
  </Grid>
  <Grid item xs={6}>
     <Ide/> 
  </Grid>
  </Grid>

        </Container>

    )
}