import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { resetuserSatisfaction, userSatisfaction } from '../redux/actions/usersatisfactionAction';
import { Pie } from 'react-chartjs-2';

function UserSatisfaction() {

    const dispatch = useDispatch();

    const usersatisfaction = useSelector(({ usersatis }) => usersatis);

    useEffect(() => {
        dispatch(userSatisfaction("user_satisfaction"));
      },[])


      const userSatis = {
        labels: usersatisfaction.success && usersatisfaction.data.ratings.map((f) => f.count),
        datasets: [{
          label: 'Rating',
          data: usersatisfaction.success && usersatisfaction.data.ratings.map((f) => f.rating),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 245)',
            'rgb(255, 205, 46)',
            'rgb(230,230,250)',
            'rgb(54, 162, 135)',
          ],
          hoverOffset: 4
        }]
      };

    return (
        <div style={{width: "350px", margin:"auto"}}>
            <Pie data={userSatis}/>
            <div style={{textAlign: "center", margin: "20px"}}>user_satisfaction based on ratings</div>
        </div>
    )
}

export default UserSatisfaction;