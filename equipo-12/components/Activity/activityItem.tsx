import { Typography, Box } from "@mui/material" 
const ActivityItem = (props : any) => {
    const { activityData } = props;
    return(
        <Box>
            <Box></Box>
            <Typography>{activityData.description}</Typography>
        </Box>
    )
}

export default ActivityItem;