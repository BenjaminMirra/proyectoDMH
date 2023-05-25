import { Box, Typography, Grid, Input } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  dataKey: string;
  input: string;
  data: string;
  change: boolean;
}

const InfoDato = ({ dataKey, input, data, change }: Props) => {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [infoData, setInfoData] = useState({});

  useEffect(() => {
    if (edit) {
      const dataInputs = inputValue.split(" ");
      if (dataKey === "email") {
        setInfoData({
          email: inputValue
        });
      } else if (dataKey === "firstname,lastname") {
        setInfoData({
          firstname: dataInputs[0],
          lastname: dataInputs[1]
        });
      } else if (dataKey === "password") {
        setInfoData({
          password: inputValue
        });
      } else {
        setInfoData({
          phone: inputValue
        });
      }
    }
  }, [edit, inputValue, dataKey]);


  const onHandleSubmit = () => {

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const config = {
      method: "patch",
      url: `https://digitalmoney.ctd.academy/api/users/${userId}`,
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      data: infoData
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            {
              edit ?
                <>
                  < Input onChange={(e) => {
                    setInputValue(e.target.value);
                  }} name="name" defaultValue={data} sx={{ width: "300px" }} />
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
                      onHandleSubmit();
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
        </Grid >
      </Box >
      <hr />
    </>
  );
};

export default InfoDato;