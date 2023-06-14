import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CircleOutlined } from "@mui/icons-material";
import { RadioButtonChecked } from "@mui/icons-material";

const FilterMenu = (props: any) => {
  const { setPeriod, period, operation, setOperation, handleSubmitFilter, handleDeleteFilter } = props;
  const [openPeriod, setOpenPeriod] = useState(true);
  const [openOperation, setOpenOperation] = useState(false);
  const [filterSelected, setFilterSelected] = useState(false);

  const handleClick1 = () => {
    setOpenPeriod(!openPeriod);
    setOpenOperation(false);
  };
  const handleClick2 = () => {
    setOpenOperation(!openOperation);
    setOpenPeriod(false);
  };

  const handleClickPeriod = (value: number) => {
    setPeriod(value);
    setFilterSelected(!filterSelected);
  };

  const handleClickOperation = (value: string) => {
    setOperation(value);
    setFilterSelected(!filterSelected);
  };

  const handleClickDeleteFilters = () => {
    setOperation("");
    setPeriod(-1);
    setFilterSelected(false);
    handleDeleteFilter();
  };

  return (
    <Box>
      <List>
        <ListItemButton onClick={handleClick1}>
          <ListItemText primary="Período" />
          {openPeriod ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openPeriod} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                width: "100%",
                justifyContent: "space-between"
              }}

              onClick={() => handleClickPeriod(0)}>
              {period === 0 ?
                <>
                  <Typography sx={{
                    fontWeight: "900"
                  }}>
                    Hoy
                  </Typography>
                  <RadioButtonChecked />
                </>
                :
                <>
                  <Typography sx={{
                    fontWeight: "100px"
                  }}>
                    Hoy
                  </Typography>
                  <CircleOutlined />
                </>
              }
            </ListItemButton>
            <ListItemButton sx={{
              pl: 4,
              width: "100%",
              justifyContent: "space-between"
            }} onClick={() => handleClickPeriod(1)}>
              {period === 1 ?
                <>
                  <Typography sx={{
                    fontWeight: "900"
                  }}>
                    Ayer
                  </Typography>
                  <RadioButtonChecked />
                </>
                :
                <>
                  <Typography sx={{
                    fontWeight: "100px"
                  }}>
                    Ayer
                  </Typography>
                  <CircleOutlined />
                </>
              }
            </ListItemButton>
            <ListItemButton sx={{
              pl: 4,
              width: "100%",
              justifyContent: "space-between"
            }} onClick={() => handleClickPeriod(7)}>
              {period === 7 ?
                <>
                  <Typography sx={{
                    fontWeight: "900"
                  }}>
                    Última semana
                  </Typography>
                  <RadioButtonChecked />
                </>
                :
                <>
                  <Typography sx={{
                    fontWeight: "100px"
                  }}>
                    Última semana
                  </Typography>
                  <CircleOutlined />
                </>
              }
            </ListItemButton>
            <ListItemButton sx={{
              pl: 4,
              width: "100%",
              justifyContent: "space-between"
            }} onClick={() => handleClickPeriod(14)}>
              {period === 14 ?
                <>
                  <Typography sx={{
                    fontWeight: "900"
                  }}>
                    Últimos 15 días
                  </Typography>
                  <RadioButtonChecked />
                </>
                :
                <>
                  <Typography sx={{
                    fontWeight: "100px"
                  }}>
                    Últimos 15 días
                  </Typography>
                  <CircleOutlined />
                </>
              }
            </ListItemButton>
            <ListItemButton sx={{
              pl: 4,
              width: "100%",
              justifyContent: "space-between"
            }} onClick={() => handleClickPeriod(30)}>
              {period === 30 ?
                <>
                  <Typography sx={{
                    fontWeight: "900"
                  }}>
                    Último mes
                  </Typography>
                  <RadioButtonChecked />
                </>
                :
                <>
                  <Typography sx={{
                    fontWeight: "100px"
                  }}>
                    Último mes
                  </Typography>
                  <CircleOutlined />
                </>
              }
            </ListItemButton>
            <ListItemButton sx={{
              pl: 4,
              width: "100%",
              justifyContent: "space-between"
            }} onClick={() => handleClickPeriod(90)}>
              {period === 90 ?
                <>
                  <Typography sx={{
                    fontWeight: "900"
                  }}>
                    Últimos 3 meses
                  </Typography>
                  <RadioButtonChecked />
                </>
                :
                <>
                  <Typography sx={{
                    fontWeight: "100px"
                  }}>
                    Últimos 3 meses
                  </Typography>
                  <CircleOutlined />
                </>
              }

            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick2}>
          <ListItemText primary="Operación" />
          {openOperation ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOperation} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{
              pl: 4,
              width: "100%",
              justifyContent: "space-between"
            }} onClick={() => handleClickOperation("Deposit")}>

              {operation === "Deposit" ?
                <>
                  <Typography sx={{
                    fontWeight: "900"
                  }}>
                    Ingresos
                  </Typography>
                  <RadioButtonChecked />
                </>
                :
                <>
                  <Typography sx={{
                    fontWeight: "100px"
                  }}>
                    Ingresos
                  </Typography>
                  <CircleOutlined />
                </>
              }
            </ListItemButton>
            <ListItemButton sx={{
              pl: 4,
              width: "100%",
              justifyContent: "space-between"
            }} onClick={() => handleClickOperation("Transfer")}>
              {operation === "Transfer" ?
                <>
                  <Typography sx={{
                    fontWeight: "900"
                  }}>
                    Egresos
                  </Typography>
                  <RadioButtonChecked />
                </>
                :
                <>
                  <Typography sx={{
                    fontWeight: "100px"
                  }}>
                    Egresos
                  </Typography>
                  <CircleOutlined />
                </>
              }
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Button onClick={handleSubmitFilter} sx={{ marginBottom: "10px" }} variant="primary" color="secondary" size="large">
        Aplicar
      </Button>
      <Button onClick={handleClickDeleteFilters} variant="secondary" color="primary" size="large">
        Resetear Filtros
      </Button>
    </Box>
  );
};

export default FilterMenu;
