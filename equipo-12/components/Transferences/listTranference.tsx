import React from "react";
import ItemTranference from "./itemTransference";
import { Divider } from "@mui/material";
import { useTransferencesContext } from "../../context/useTransferences";

const ListTranference = () => {
  const { transferencesInfo, isLoadingTransferences } = useTransferencesContext();
  return (
    <>
      {
        !isLoadingTransferences && transferencesInfo?.map((transference: any, idx: any) => {
          return (
            <React.Fragment key={idx}>
              <ItemTranference key={transference.id} transference={transference} />
              {
                idx !== transferencesInfo?.length - 1 && (
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