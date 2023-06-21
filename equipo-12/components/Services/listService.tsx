import React from "react";
import ItemService from "./itemService";
import { Divider } from "@mui/material";
import { useServices } from "../../hooks/useServices";

const ListService = () => {
  const [services] = useServices();
  return (
    <>
      {
        services.map((service, idx) => {
          return (
            <React.Fragment key={idx}>
              <ItemService key={service.id} service={service} />
              {
                idx !== services.length - 1 && (
                  <Divider variant="middle" />
                )
              }
            </React.Fragment>
          );
        })
      }
    </>
  );

};

export default ListService;