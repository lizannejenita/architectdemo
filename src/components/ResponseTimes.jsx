import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { resetresponseTimes, responseTimes } from '../redux/actions/responsetimesAction';
import { Line } from 'react-chartjs-2';
import Grid from '@mui/material/Grid';

function ResponseTimes() {

    const dispatch = useDispatch();

    const responsetimes = useSelector(({ resptimes }) => resptimes);

    useEffect(() => {
        dispatch(responseTimes("response_times"));
      },[])

      const data = {
        labels: responsetimes.success && responsetimes.data.day_wise.map(f => f.average_time),
        datasets: [{
          label: 'Date in May 2023',
          data: responsetimes.success && responsetimes.data.day_wise.map(f => f.date.split("-")[2]),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };

      const respTime = {
        labels: responsetimes.success && responsetimes.data.week_wise.map(f => f.average_time),
        datasets: [{
          label: 'Week',
          data: responsetimes.success && responsetimes.data.week_wise.map(f => f.week),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }],
      };

    return (
      <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}><div>
        <Line data={respTime} />
  </div></Grid>
  <Grid item xs={12} md={6}><div>
  <Line data={data} />
        </div></Grid>
        </Grid>
        <div style={{textAlign: "center", margin: "20px"}}>trends over time on a daily and weekly basis</div>
        </div>
    )
}

export default ResponseTimes;