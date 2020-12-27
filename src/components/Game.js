import React, { useState } from "react";
import { Card, Button, Collapse } from "react-bootstrap";

export default function Game({ game }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {game.title} -{" "}
              <span
                className="text-muted font-weight-light"
                style={{ textDecoration: "line-through" }}
              >
                ${game.normalPrice}
              </span>
              <span>{" - "}</span>
              <span className="font-weight-light">${game.salePrice}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Release Date:{" "}
              {new Date(game.releaseDate * 1000).toLocaleDateString()}
            </Card.Subtitle>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            alt={game.title}
            src={game.thumb}
          />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary"
          >
            {open ? "Hide Details" : "View Details"}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <div>Metacritic Score: {game.metacriticScore}</div>
            <Button
              variant="success"
              href={`https://store.steampowered.com/app/${game.steamAppID}/`}
            >
              Check it out
            </Button>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
