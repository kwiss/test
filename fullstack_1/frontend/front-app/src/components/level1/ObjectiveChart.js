import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import styled from "styled-components";

const ListItem = styled.li`
  display: block;
  margin: 10px 0;
`;

class ObjectiveChart extends Component {
  render() {
    const { objective, today } = this.props;

    const data = [
      { date: objective.start_date, value: objective.start },
      { date: today, value: objective.current },
      { date: objective.end_date, value: objective.target }
    ];

    return (
      <ListItem>
        <span>{objective.title}</span>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, bottom: 30, left: 30 }}
        >
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
      </ListItem>
    );
  }
}

export default ObjectiveChart;
