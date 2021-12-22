import {Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import ContributeDataForm from '../../components/ContributeDataForm';

export default function ContributeData() {
  return (
  <Container>
    <Typography variant="h2">Contribute Data</Typography>
    <Container>
      <Typography variant="h4">Add data about an existing game</Typography>
      <TextField label="Game Name" />
    </Container>
    <Container>
      <Typography variant="h4">Add data about a new game</Typography>
      <Button variant="contained" color="primary" >Add Game</Button>
    </Container>
  </Container>
  )
}