import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call'
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {
    DataContainer,
    DataAlign,
    Value,
    Label,
    Divider,
    PictureNameContainer,
    UserNameText,
  } from "./Styles"

const theme = createTheme();

export default function Perfil() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      interesses: data.get('interesses'),
      password: data.get('password'),
      periodo: data.get('periodo'),
      materias: data.get('materias'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" >
      <Grid container spacing={80}>
      <Grid item xs={12} sm={6}>
      <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Home
            </Button>
      </Grid>
      </Grid>
      <Container maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: "100%",
              height: "200%",
            },
          }}
        >
        <Paper>
            <Divider style={{
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: '#e0c4df',
            }}
            >
              <PictureNameContainer>
                  <AccountCircleIcon style={{
                    fontSize: 100,
                  }}>
                  </AccountCircleIcon>
                  <UserNameText>
                  Isabella
                </UserNameText>
              </PictureNameContainer>
              <DataContainer>
                <DataAlign>
                  <MailIcon />
                  <Label> Email: </Label>
                  <Value> oi </Value>
                </DataAlign>
                <DataAlign>
                  <CallIcon />
                  <Label> Celular: </Label>
                  <Value> oi </Value>
                </DataAlign>
                <DataAlign>
                  <DateRangeIcon />
                  <Label> Data de nascimento: </Label>
                  <Value> oi </Value>
                </DataAlign>
              </DataContainer>
              </Divider>
          </Paper>
        </Box>
      </Container>
      </Container>
    </ThemeProvider>
  );
}