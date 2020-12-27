import React from "react";
import { Pagination } from "react-bootstrap";

export default function GamesPagination({ page, setPage, hasNextPage }) {
  const adjustPage = (amount) => {
    setPage((prevPage) => prevPage + amount);
  };

  return (
    <Pagination>
      {page !== 0 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {page !== 0 && (
        <Pagination.Item onClick={() => setPage(0)}>1</Pagination.Item>
      )}
      {page > 1 && <Pagination.Ellipsis />}
      {page > 1 && (
        <Pagination.Item onClick={() => adjustPage(-1)}>{page}</Pagination.Item>
      )}
      <Pagination.Item active>{page + 1}</Pagination.Item>
      {hasNextPage && (
        <Pagination.Item onClick={() => adjustPage(1)}>
          {page + 2}
        </Pagination.Item>
      )}
      {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
    </Pagination>
  );
}
