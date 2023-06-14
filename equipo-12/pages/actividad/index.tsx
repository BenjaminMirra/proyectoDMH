import { Box, InputAdornment, List, TextField } from "@mui/material";
import useTransferences from "../../hooks/useTransferences";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import ActivityItem from "../../components/Activity/activityItem";
import { useStyles } from "../../material-theme";
import { ITransference } from "../../types";
import { Search } from "@mui/icons-material";
import FilterMenu from "../../components/Activity/filterMenu";

interface PropsType {
  children?: ReactNode;
}

const Actividad: NextPageWithLayout<PropsType> = () => {
  const [activity, setActivity] = useState<ITransference[]>();
  const [search, setSearch] = useState("");
  const [operation, setOperation] = useState();
  const [period, setPeriod] = useState(-1);

  const [transferences] = useTransferences();
  const classes = useStyles();

  function sortByDate(array: ITransference[]) {
    return array?.sort(function (a: any, b: any) {
      return +new Date(b.dated) - +new Date(a.dated);
    });
  }
  function filterBySearch(array: ITransference[]) {
    return array.filter((activityOperation: ITransference) => {
      return activityOperation.description.includes(search);
    });
  }
  function filterByPeriod(array: ITransference[]) {
    const start = new Date();
    if (period <= 1) {
      return array.filter((activityOperation: ITransference) => {
        return (
          new Date(activityOperation.dated).getDate() ==
          start.getDate() - period
        );
      });
    } else if (period > 1) {
      return array.filter((activityOperation: ITransference) => {
        return (
          new Date(activityOperation.dated).getDate() >=
          start.getDate() - period
        );
      });
    }
  }

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    console.log(period);
    let array;
    if (true) {
      array = sortByDate(transferences);
    }
    if (search != "") {
      array = filterBySearch(array);
    }
    if (period != -1) {
      array = filterByPeriod(array);
    }
    setActivity(array);
  }, [search, transferences, period]);

  return (
    <Box>
      <form style={{ width: "100%" }} onChange={handleSearch}>
        <TextField
          size="medium"
          sx={{ width: "100%", maxWidth: "100%", backgroundColor: "#FFF" }}
          className={classes.textField}
          placeholder="Buscar en tu actividad"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ backgroundColor: "#FFF" }}>
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </form>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFF",
          borderRadius: "10px",
          boxShadow: "0px 4px 4px #0000004c",
        }}
      >
        <List sx={{ width: "100%" }}>
          {activity?.map((activityItem) => {
            return <ActivityItem activityData={activityItem}></ActivityItem>;
          })}
        </List>
      </Box>
      <FilterMenu
        operation={operation}
        setOperation={setOperation}
        period={period}
        setPeriod={setPeriod}
      />
    </Box>
  );
};
Actividad.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default Actividad;
