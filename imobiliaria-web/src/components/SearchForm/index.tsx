/*
Support link: 
  https://reactgo.com/material-ui-react-tutorial/
  https://material-ui.com/components/selects/
  https://codesandbox.io/s/xkgzj?file=/demo.js:27-354
*/

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControlButton: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },


  divForm: {
    backgroundColor: '#F6F6F6',
    marginTop: '20px',
  },
}));

const SearchForm: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Usado para filtro dinâmico dos campos
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <div className={classes.divForm}>
      <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Opções de busca</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Interesse</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={'Venda'}>Venda</MenuItem>
                <MenuItem value={'Aluguel'}>Aluguel</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                // onChange={handleChange}
              >          
                <MenuItem value={'apartamento'}>Apartamento</MenuItem>
                <MenuItem value={'casa'}>Casa</MenuItem>
                <MenuItem value={'deposito'}>Depósito</MenuItem>
                <MenuItem value={'...'}>...</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Cidade</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                // onChange={handleChange}
              >          
                <MenuItem value={'salvador'}>Salvador</MenuItem>
                <MenuItem value={'porto seguro'}>Porto Seguro</MenuItem>
                <MenuItem value={'teresina'}>Teresina</MenuItem>
                <MenuItem value={'...'}>...</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Bairro</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                // onChange={handleChange}
              >          
                <MenuItem value={'graça'}>Graça</MenuItem>
                <MenuItem value={'barra'}>Barra</MenuItem>
                <MenuItem value={'vitoria'}>Vitória</MenuItem>
                <MenuItem value={'...'}>...</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControlButton}>
              <Button variant="contained" color="primary">
                Buscar
              </Button>
            </FormControl>
          </AccordionDetails>
        </Accordion>

      
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Mais opções de busca</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <FormControl className={classes.formControl}>
              <TextField id="standard-search" label="Código" type="search" />
            </FormControl>

            <FormControl className={classes.formControl}>
              <TextField id="standard-search" label="Valor mínimo" type="search" />
            </FormControl>

            <FormControl className={classes.formControl}>
              <TextField id="standard-search" label="Valor máximo" type="search" />
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Dormitórios</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                // onChange={handleChange}
              >          
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
                <MenuItem value={'4+'}>4+</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Suítes</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                // onChange={handleChange}
              >          
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
                <MenuItem value={'4+'}>4+</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Banheiros</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                // onChange={handleChange}
              >          
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
                <MenuItem value={'4+'}>4+</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Vagas</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                // onChange={handleChange}
              >          
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
                <MenuItem value={'4+'}>4+</MenuItem>
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>      
      </div>
    </div>
  );
};

export default SearchForm;