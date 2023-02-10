import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getNewsData } from "./api";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();
  const [error, setText] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    setLoading(true);
    const data = await getNewsData();
    // console.log(data);
    setData(data.data);
    setStatus(data.status);
    setText(data.text);
    setLoading(false);
  };

  return (
    <>
      {loading && status === 200 && (
        <Container>
          <Row>
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <Col className="p-2" sm={6} lg={4} xl={4}>
                  <Card
                    style={{
                      width: "100%",

                      minHeight: "100%",
                    }}
                    className="placeholder-glow p-0 m-0"
                  >
                    <span
                      className="placeholder"
                      style={{ height: "25rem" }}
                    ></span>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
      {!loading && status === 200 && (
        <Container>
          <Row>
            {data.map((post: any) => {
              return (
                <Col className="p-2" key={post.id} sm={6} lg={4} xl={4}>
                  <a
                    href={post.link}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noreferrer"
                  >
                    <Card
                      style={{
                        width: "100%",

                        minHeight: "100%",
                      }}
                    >
                      <Card.Body
                        style={{
                          minHeight: "100%",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          // style={{ height: "80%" }}
                          src={post?.jetpack_featured_media_url}
                          loading="lazy"
                          className="rounded"
                        />
                      </Card.Body>
                      <Card.Header style={{ backgroundColor: "#fff" }}>
                        <Card.Title
                          className="mt-2 p-2 rounded"
                          style={{ color: "#000", backgroundColor: "#fff" }}
                        >
                          {post.title.rendered}
                        </Card.Title>
                      </Card.Header>
                    </Card>
                  </a>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
      {status !== 200 && (
        <>
          <div className="centered">
            <p>404 API Error</p>
            <div>{error}</div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
