import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
const ActivityItem = (props: any) => {
  const { activityData } = props;
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{ display: "flex", alignItems: "center", "&:hover": { backgroundColor: "#EEEAEA" } }}
      >
        <ListItemAvatar>
          <Avatar alt="R" sx={{ backgroundColor: "#C1FD35", color: "#000" }} />
        </ListItemAvatar>
        <ListItemText
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          primary={activityData?.description}
        ></ListItemText>
        <ListItemText
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
          primary={`$ ${activityData?.amount}`}
          secondary="sábado"
        />
      </ListItem>
    </>
  );
};

export default ActivityItem;
