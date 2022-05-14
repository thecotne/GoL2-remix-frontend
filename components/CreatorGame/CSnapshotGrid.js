import React, { useState } from "react";
import GameGrid from "../GolGrid/GameGrid/GameGrid";
import Cell from "../GolGrid/Cell/Cell";
import { useDispatch, useSelector } from "react-redux";

const CSnapshotGrid = ({ loading = true, data, isSnapshot = true }) => {
  return (
    <GameGrid isSnapshotCreator small>
      {data && data.length ? (
        data.map((row, j) => {
          return row.map((cell, i) => {
            if (cell === 0) return <Cell isSnapshot key={`${i}${cell}`} />;
            else {
              return <Cell isSnapshot state="alive" key={`${i}${cell}`} />;
            }
          });
        })
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          fetching...
        </div>
      )}
    </GameGrid>
  );
};

export default CSnapshotGrid;
