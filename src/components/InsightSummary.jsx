import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { resetinsightSummary, insightSummary } from '../redux/actions/insightsummaryAction';

function InsightSummary() {

    const dispatch = useDispatch();
    const insightsummary = useSelector(({ insightsumm }) => insightsumm);

    console.log("insightsummary", insightsummary.data)

    useEffect(() => {
        dispatch(insightSummary("insight_summary"));
      },[]);

    return (
        <div style={{textAlign: "center"}}>
            <div style={{textDecoration: "underline"}}> Insight Summary </div>
            {Object.entries(insightsummary.data).map(([key, val]) =>  
            <div style={{margin: "10px"}}>{key.split("_").map(f => <span style={{padding: "2px"}}>{f}</span>)} - {val} </div>)
        }
        </div>
           
    )
}

export default InsightSummary;