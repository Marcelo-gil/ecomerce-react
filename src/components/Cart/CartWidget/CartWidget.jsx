import React, { useContext } from "react";
import CarritoIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../../contextnew/CartContext";
import { Stack } from "@chakra-ui/react";

export const CartWidget = () => {
  const { cantidad } = useContext(CartContext);
  return (
    <>
      <Stack direction={"row"} align="center" mr="15">
        {cantidad !== 0 && (
          <>
            <CarritoIcon />
            <span>{cantidad}</span>
          </>
        )}
      </Stack>
    </>
  );
};
