import React from "react";
import { Form, Col } from "react-bootstrap";

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="eg. Bioshock"
            onChange={onParamChange}
            value={params.title}
            name="title"
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Highest Price</Form.Label>
          <Form.Control
            placeholder="eg. 29.99"
            onChange={onParamChange}
            value={params.upperPrice}
            name="upperPrice"
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Lowest Price</Form.Label>
          <Form.Control
            placeholder="eg. 5.99"
            onChange={onParamChange}
            value={params.lowerPrice}
            name="lowerPrice"
            type="text"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
