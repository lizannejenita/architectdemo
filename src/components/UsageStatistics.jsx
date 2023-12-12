import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { resetusageStatistics, usageStatistics } from '../redux/actions/usagestatisticsAction';
import { Doughnut, PolarArea  } from 'react-chartjs-2';
import Grid from '@mui/material/Grid';

function UsageStatistics() {

    const dispatch = useDispatch();

    const usagestatistics = useSelector(({ usagestats }) => usagestats);

    useEffect(() => {
        dispatch(usageStatistics("usage_statistics"));
      },[])


      const usageStatis = {
        labels: usagestatistics.success && Object.keys(usagestatistics.data.by_country).map((x) => x),
        datasets: [{
          label: 'Country',
          data: usagestatistics.success && Object.values(usagestatistics.data.by_country).map((x) => x),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      };


      const data = {
        labels: usagestatistics.success && Object.keys(usagestatistics.data.by_platform).map((x) => x),
        datasets: [{
          label: 'Platform',
          data: usagestatistics.success && Object.values(usagestatistics.data.by_platform).map((x) => x),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

    return (<div>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}><div>
            <Doughnut
              data={data}
            />
  </div></Grid>
  <Grid item xs={12} md={6}><div>
          <PolarArea
            data={usageStatis}
          />
        </div></Grid>

        
        </Grid>
        <div style={{textAlign: "center", margin: "20px"}}>user statistics distribution by platform and country</div>
  
        </div>
    )
}

export default UsageStatistics;