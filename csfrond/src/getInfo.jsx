import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Collapse, Card, CardBody } from "reactstrap";
import axios from "axios";
import Delete from "./delete.jsx";
import Profile from "./profile.jsx";



function GetInfo(props) {
  const [log, setLog] = useState(true);
  const [info, setInfo] = useState([]);

  const handleLog = () => {
    if (log === true) {
      setLog(false);
    } else if (log === false) {
      setLog(true);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api_v1/user/select/")
      .then((res) => {
        console.log(res.data);
        setInfo(res.data.statusMessage.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getInfo = info.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.nombre}</td>
        <td>{info.password}</td>
        <td>
          <div>
            <Button
              color="primary"
              onClick={function noRefCheck() {}}
              style={{
                marginBottom: "1rem",
              }}
            >
            </Button>
            <Collapse>
              <Card>
                <CardBody>X
                <Delete></Delete>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </td>
        <td>
        <div>
            <Button
              color="primary"
              onClick={function noRefCheck() {}}
              style={{
                marginBottom: "1rem",
              }}
            >
            </Button>
            <Collapse>
              <Card>
                <CardBody>X
                <Profile></Profile>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </td>
      </tr>
          );
  });

  return (
    <React.Fragment>
      <table className="tabla">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Contraseña</th>
        </tr>
        {getInfo}
      </table>
    </React.Fragment>
  );
}

export default GetInfo;
