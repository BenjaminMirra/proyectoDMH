import { Box, Typography, Grid, Input } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";

const InfoDato = ({ input, data, change }: any) => {

  const [edit, setEdit] = useState(false);

  return (
    <>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "7px",
        paddingTop: "9px"
      }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Typography>
              {input}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            {edit ?
              <>
                <Input placeholder="" defaultValue={data}></Input>
              </> :
              <>
                <Typography
                  sx={{
                    display: "flex",
                    color: "rgba(0,0,0,0.5)"
                  }}
                  variant="subtitle2">
                  {data}
                </Typography>
              </>
            }
          </Grid>
          <Grid sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
          }} item xs={2} sm={4} md={4}>
            {change ?
              edit ?
                <>
                  < DoneIcon color="success"
                    onClick={() => {
                      setEdit(!edit);
                    }} />
                </> :
                <>
                  <EditIcon onClick={() => {
                    setEdit(!edit);
                  }} color="disabled" />
                </>
              :
              <>
              </>
            }
          </Grid>
        </Grid>
      </Box >
      <hr />
    </>
  );
};

export default InfoDato;