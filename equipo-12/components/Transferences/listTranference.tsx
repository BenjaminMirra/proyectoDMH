import React from "react";
import { useTransferences } from "../../hooks/useTransferences";
import ItemTranference from "./itemTransference";
import { Divider } from "@mui/material";

const ListTranference = () => {
  const [transferences] = useTransferences();
  return (
    <>
      {
        transferences.map((transference, idx) => {
          return (
            <React.Fragment key={idx}>
              <ItemTranference key={transference.id} transference={transference} />
              {
                idx !== transferences.length - 1 && (
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

export default ListTranference;