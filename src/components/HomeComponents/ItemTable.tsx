import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ItemTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Caliber</TableCell>
            <TableCell align="right">Tracer</TableCell>
            <TableCell align="right">Damage</TableCell>
            <TableCell align="right">Armor Damage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data.ammo.map((dat: any) => (
              <a key={dat.item.name}>{dat.item.name}</a>
              <TableRow
              key={dat.item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dat.item.name}
              </TableCell>
              <TableCell align="right">{dat.caliber}</TableCell>
              <TableCell align="right">{dat.tracer}</TableCell>
              <TableCell align="right">{dat.damage}</TableCell>
              <TableCell align="right">{dat.armorDamage}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
