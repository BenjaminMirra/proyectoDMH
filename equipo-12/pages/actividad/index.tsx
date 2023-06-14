/* eslint-disable react/no-children-prop */
import { Box, Button, Divider, InputAdornment, List, TextField, Typography } from "@mui/material";
import useTransferences from "../../hooks/useTransferences";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import ActivityItem from "../../components/Activity/activityItem";
import { useStyles } from "../../material-theme";
import { ITransference } from "../../types";
import { Search } from "@mui/icons-material";
import FilterMenu from "../../components/Activity/filterMenu";
import { Tune } from "@mui/icons-material";
import FilterModal from "../../components/Activity/FilterModal/FilterModal";
import ArrowSubtitleMobile from "../../components/ArrowSubtitleMobile";

interface PropsType {
  children?: ReactNode;
}

const Actividad: NextPageWithLayout<PropsType> = () => {
  const [activity, setActivity] = useState<ITransference[]>();
  const [search, setSearch] = useState("");
  const [operation, setOperation] = useState("");
  const [period, setPeriod] = useState(-1);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
  function filterByPeriod(array: ITransference[] | any) {
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

  function filterByOperationType(array: ITransference[] | any) {
    return array.filter((activityOperation: ITransference) => {
      return activityOperation.type === operation;
    });
  }

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    let array;
    // eslint-disable-next-line no-constant-condition
    if (true) {
      array = sortByDate(transferences);
    }
    if (search != "") {
      array = filterBySearch(array);
    }
    setActivity(array);
  }, [search, transferences]);

  const handleSubmitFilter = () => {
    let array;
    // eslint-disable-next-line no-constant-condition
    if (true) {
      array = sortByDate(transferences);
    }
    if (period != -1) {
      array = filterByPeriod(transferences);
    }
    if (operation != "") {
      array = filterByOperationType(transferences);
    }
    setActivity(array);
  };

  const handleDeleteFilter = () => {
    let array;
    // eslint-disable-next-line no-constant-condition
    if (true) {
      array = sortByDate(transferences);
    }
    setActivity(array);
  };

  const handleOpenModalFilter = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Box
        sx={{
          width: "276px",
          height: "100%",
          backgroundColor: "#C1FD35",
          "@media (max-width: 768px)": {
            display: "none",
          },
          "@media (min-width: 768px)": {
            display: "block",
            maxWidth: "220px",
          },
          "@media (min-width: 1024px)": {
            display: "block",
            maxWidth: "275px",
          },
        }}
      ></Box>

      <Box sx={{
        width: "100%", paddingTop: "50px", paddingLeft: "50px", paddingRight: "50px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--light-grey)",
        paddingBottom: "30px"
      }}>
        <ArrowSubtitleMobile title="Inicio"></ArrowSubtitleMobile>
        <Box>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            gap: "21px",
            paddingBottom: "20px",
            "@media (max-width: 768px)": {
              paddingTop: "20px"
            },
          }}>
            <form style={{
              width: "100%", height: "100%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }} onChange={handleSearch}>
              <TextField
                size="medium"
                sx={{ width: "100%", maxWidth: "100%", backgroundColor: "#FFF", height: "100%", borderRadius: "10px", }}
                className={classes.textField}
                placeholder="Buscar en tu actividad"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{
                      backgroundColor: "#FFF",
                      height: "100%"
                    }}>
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <Button variant="primary" color="secondary" size="medium"
              sx={{
                height: "56px",
                display: "flex",
                padding: "20px",
                justifyContent: "space-around",
                width: "172px",
                "@media (max-width: 768px)": {
                  display: "none"
                },
              }}
              onClick={handleOpenModalFilter}
            >
              Filtrar
              <Tune />
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              backgroundColor: "#FFF",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px #0000004c"
            }}
          >
            <Box sx={{
              display: "flex",
              padding: "18px",
              justifyContent: "space-between",
              alignItems: "center",
              "@media (min-width: 768px)": {
                display: "none"
              }
            }}>
              <Typography sx={{
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "22px"
              }}>
                Tu Actividad
              </Typography>
              <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}>
                <Typography sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineWeight: "100%",
                  textDecorationLine: "underline"
                }}>
                  Filtrar
                </Typography>
                <Tune />
              </Box>

            </Box>
            <Divider sx={{
              "@media (min-width: 768px)": {
                display: "none"
              }
            }} variant="middle"></Divider>
            <List sx={{ width: "100%" }}>
              {activity?.map((activityItem, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <ActivityItem key={idx} activityData={activityItem} />
                    {idx !== activity.length - 1 && <Divider variant="middle" />}
                  </React.Fragment>
                );
              })}
            </List>
          </Box>
        </Box>
        <FilterModal children={
          <FilterMenu
            handleDeleteFilter={handleDeleteFilter}
            handleSubmitFilter={handleSubmitFilter}
            operation={operation}
            setOperation={setOperation}
            period={period}
            setPeriod={setPeriod}
          />
        } open={openModal} setOpen={setOpenModal} />
      </Box >
    </>
  );
};
Actividad.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default Actividad;
