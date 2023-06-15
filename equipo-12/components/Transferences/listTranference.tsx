import useTransferences from "../../hooks/useTransferences";
import ItemTranference from "./itemTransference";

const ListTranference = () => {

  const [transferences] = useTransferences();
  /*   console.log("transference",transferences); */
  
  return (
    <>
      {
        transferences.map((transference) => {
          return (
            <ItemTranference key={transference.id} transference={transference} />
          );
        })
      }
    </>
  );

};

export default ListTranference;