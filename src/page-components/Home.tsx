import ButtonAppBar from "@/components/AppBar";
import graphQLClient from "@/GraphQL/graphQLClient";
import { tarkovAmmo } from "@/GraphQL/queries";
import { GetStaticProps } from "next";
import React from "react";
import * as Styles from "../components/StyledComponents";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
const Home = ({ data }: any) => {
  return (
    <>
      <ButtonAppBar />
      <Styles.MainDiv>
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
              {data.ammo.map((row: any) => (
                <TableRow
                  key={row.item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.item.name}
                  </TableCell>
                  <TableCell align="right">{row.caliber}</TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.tracer} disabled />
                  </TableCell>
                  <TableCell align="right">{row.damage}</TableCell>
                  <TableCell align="right">{row.armorDamage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Styles.MainDiv>
    </>
  );
};

export default Home;
