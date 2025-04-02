import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Task(props: {
  task: { title: string; desc: string };
  onDelete: (arg0: any) => void;
}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.task.title}</Card.Title>
          <Card.Text>{props.task.desc}</Card.Text>
          <Button onClick={() => props.onDelete(props.task)} variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
