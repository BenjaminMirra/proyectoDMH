
import { mdiPlusCircleOutline } from '@mdi/js';
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
                    paddingBottom: "100px"
                }}>
                    <CardContent>
                        <Typography sx={{
                            color: "#FFFFFF",
                            paddingBottom: "18px"
                        }} variant="h6">
                            Agregá tu tarjeta de débito o crédito
                        </Typography>
                            <Typography
                             sx={{
                                 color: "#C1FD35",
                                 paddingBottom: "18px"
                                }} variant="h6"
                                style={{ textTransform: 'none' }}
                                >
                                Nueva tarjeta
                               
                            </Typography>
                            
                        <Button>
                            
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </>
    )

}

export default AddCard