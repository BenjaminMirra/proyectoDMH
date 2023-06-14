import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useState } from "react";
import StarBorder from "@mui/icons-material/StarBorder";

const FilterMenu = (props: any) => {
  const { setPeriod, period } = props;
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
    setOpen2(false);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
    setOpen1(false);
  };

  const handleClickPeriod = (value: number) => {
    setPeriod(value);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick1}>
        <ListItemText primary="Periodo" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleClickPeriod(0)}>
            <Typography>Hoy</Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleClickPeriod(1)}>
            <Typography>Ayer</Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleClickPeriod(7)}>
            <Typography>Última semana</Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleClickPeriod(14)}>
            <Typography>Últimos 15 días</Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleClickPeriod(30)}>
            <Typography>Último mes</Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleClickPeriod(90)}>
            <Typography>Últimos 3 meses</Typography>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick2}>
        <ListItemText primary="Operacion" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleClickPeriod(0)}>
            <Typography>Hoy</Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleClickPeriod(1)}>
            <Typography>Ayer</Typography>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default FilterMenu;
