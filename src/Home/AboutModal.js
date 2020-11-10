import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <HelpIcon fontSize='large' onClick={handleClickOpen}/>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Sobre o ZIŅA
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            ZIŅA é um projeto pessoal criado por <a href="andreispurim.github.io">Andreis Purim</a> para servir de database de fotos, vídeos, documentos, mapas e geneologia para a comunidade de descendentes da Letônia no Brasil.
          </Typography>
          <Typography gutterBottom>
            Ainda está em sua fase inicial de criação, então qualquer ajuda é bem-vinda. Desde ajuda para montar as árvores geneologicas até programação e design.
          </Typography>
          <Typography gutterBottom>
            Esse projeto não tem ligação direta nenhuma com o Consulado da Letônia no Brasil ou a Associação de Cultura Leta, apesar de que o intercambio de informações existe.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}