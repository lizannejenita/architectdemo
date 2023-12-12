import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { resetcategoryDistribution, categoryDistribution } from '../redux/actions/categorydistributionAction';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function CategoryDistribution() {

    const dispatch = useDispatch();

    const categorydistribution = useSelector(({ categorydist }) => categorydist);

    useEffect(() => {
        dispatch(categoryDistribution("category_distribution"));
        
      },[]);


      const catDist = {
        labels: Object.keys(categorydistribution.data).map(f => f),
        datasets: [{
          label: 'Category Distribution',
          data: Object.values(categorydistribution.data).map(f => f),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
          ],
          borderWidth: 1
        }]
      };

    return (
        <div>
            <Bar data={catDist} width={50} height={20} />
            <div style={{textAlign: "center", margin: "20px"}}>number of queries per category</div>
        </div>
    )
}

export default CategoryDistribution;