
import Grid from '@mui/material/Grid';
import ChartMenu from './ChartMenu';
import InsightSummary from './InsightSummary';

function Content(){

 return(<>
        <Grid container spacing={2} justifyContent="space-around" style={{marginTop: "20px"}}>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={10}>
           
                <Grid container justifyContent="space-around">
                    <Grid item xs={10} md={5} justifyContent="center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae.
              
                    </Grid>
                    <Grid item xs={10} md={5} justifyContent="center">
                        <InsightSummary />
                    </Grid>
                </Grid>
                
            
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>
      <Grid container justifyContent="center" style={{marginTop: "50px"}}>
      <Grid item xs={6} >
          <ChartMenu />
      </Grid>
  </Grid>
  </>
 )
}

export default Content;