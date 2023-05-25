import styles from "./addCard.module.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Card, CardContent, Icon, IconButton, Typography } from "@mui/material"
const AddCard = () => {
    return (
        <>
            < Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: "10px",
                paddingLeft: "80px",
                paddingRight: "80px",
                width: "100%",
            }
            }>

                <Card sx={{
                    minWidth: "100%",
                    background: "#201F22",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "10px",
                }}>
                    <CardContent>
                        <Typography sx={{
                            color: "#FFFFFF",
                            paddingBottom: "20px"
                        }} variant="h6">
                            Agregá tu tarjeta de débito o crédito
                        </Typography>
                    </CardContent>
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }
                    }>
                        <Typography
                            sx={{
                                color: "#C1FD35",
                                paddingBottom: "5px"
                            }} variant="h6"
                            style={{ textTransform: 'none' }}
                        >
                            <CardContent sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                            }
                            }>

                                <AddCircleOutlineIcon className={styles.icon}/>
                                Nueva tarjeta
                            </CardContent>

                        </Typography>
                        <Typography
                            sx={{
                                color: "#C1FD35",
                                paddingBottom: "5px"
                            }} variant="h6"
                            style={{ textTransform: 'none' }}
                        >
                           <ArrowForwardIcon />

                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )

}

export default AddCard