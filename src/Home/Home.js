import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from './Navbar.js';

const useStyles = makeStyles((theme) => ({
  mainText: {
    paddingTop:'2rem',
    textAlign: 'justify',
  },
}));

export default function Home(){
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="md">
        <Typography className={classes.mainText}>
            Olá, seja bem vindo ao <strong>Projeto ZIŅA</strong> (do leto, "conhecimento"). Esse é um projeto que visa juntar - em um único site - árvores geneológicas, mapas e documentos sobre os letos no Brasil. Ele atualmente está em sua fase inicial de desenvolvimento, e portanto, qualquer tipo de ajuda - seja com documentos ou seja em código ou design - é bem-vinda!
        </Typography>
        <Typography className={classes.mainText}>
          Hello, welcome to the <strong>ZIŅA Project</strong> (from latvia, "knowledge"). This is a project that aims to bring together - on a single website - geneological trees, maps and documents about the Latvians in Brazil. It is currently in its early stages of development, so any help - whether with documents or in code or design - is welcome!
        </Typography>
        <Typography className={classes.mainText}>
          Sveiki, laipni lūgti <strong>ZIŅA projektā.</strong> Šis ir projekts, kura mērķis ir vienā tīmekļa vietnē apvienot ģenealoģiskos kokus, kartes un dokumentus par Brazīlijas latviešiem. Pašlaik tā ir agrīnā attīstības stadijā, tāpēc jebkura palīdzība - vai nu ar dokumentiem, vai ar kodu vai noformējumu - ir apsveicama!
        </Typography>
        <Typography className={classes.mainText}>
          All following documents will be in portuguese untill translated.  
        </Typography>
        <Typography className={classes.mainText}>
          Utilize os links no canto superior direito para navegar entre as páginas. 
        </Typography>
      </Container>
    </React.Fragment>
  );
}
