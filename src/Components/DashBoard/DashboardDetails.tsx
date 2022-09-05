import { Grid, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getDashboardDetails } from '../../Api/Api';
import './DashBoard.css';
import { Rooms } from '../../Api/Interface';
import { Cell, Pie, PieChart } from 'recharts';
import { ResponsivePie } from '@nivo/pie';
import pieInfo from './pieData.json';
import resPieCanvas from './PieChart';

interface Ilist {
  id: string;
  label: string;
  value: number;
  color: string;
}
interface defs {
  id: string;
  type: string;
  background: string;
  color: string;
  size: number;
  padding: number;
  stagger: boolean;
}
export default function DashboardDetails() {
  const [dashboardDetails, setdashboardDetails] = useState<Rooms>();
  const [chartData, setChartData] = useState<Ilist[]>([]);
  // const COLORS = [' #ff3333', '#ffd480'];
  useEffect(() => {
    getDashboardDetails().then((res) => {
      if (res) {
        console.log(res.data);
        setdashboardDetails(res.data);
        setChartData([
          {
            id: 'bookedrooms',
            label: 'bookedrooms',
            value: res.data.bookedrooms,
            color: '#33c9dc',
          },
          {
            id: 'availablerooms',
            label: 'availablerooms',
            value: res.data.availablerooms,
            color: '#8bc34a',
          },
        ]);
      }
    });
  }, []);

  // const data = [pieInfo];

  console.log(pieInfo, '---------------------');

  return (
    <div className="main-dashboard-div">
      <Grid container className="main-dashboard-div">
        <Grid
          item
          lg={5}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className="dashboard-details-card">
            <Card
              className="dash-booked"
              sx={{
                textAlign: 'center',
                width: '100%',
                height: '70%',
                marginTop: '30px',
                // marginBottom: '30px',
                backgroundColor: '#33c9dc',
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 28, color: 'black', fontWeight: 'bold' }}
                >
                  Booked Rooms
                </Typography>
                <Typography
                  sx={{ fontSize: 45, color: 'black' }}
                  color="green"
                  gutterBottom
                >
                  {dashboardDetails?.bookedrooms}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="dashboard-details-card">
            <Card
              className="dash-available"
              sx={{
                textAlign: 'center',
                width: '100%',
                height: '70%',
                marginTop: '30px',
                // marginBottom: '30px',
                backgroundColor: '#8bc34a',
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 28, color: 'black', fontWeight: 'bold' }}
                >
                  Available Rooms
                </Typography>
                <Typography
                  sx={{ fontSize: 45, color: 'black' }}
                  color="green"
                  gutterBottom
                >
                  {dashboardDetails?.availablerooms}
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="dashboard-details-card">
            <Card
              className="dash-total"
              sx={{
                verticalAlign: 'middle',
                textAlign: 'center',
                width: '100%',
                height: '70%',
                marginTop: '30px',
                marginBottom: '30px',
                backgroundColor: '#ffef62',
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 28, color: 'black', fontWeight: 'bold' }}
                >
                  Total Rooms
                </Typography>
                <Typography
                  sx={{ fontSize: 45, color: 'black' }}
                  color="#f1e15b"
                  gutterBottom
                >
                  {dashboardDetails?.totalrooms}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item lg={7}>
          <div style={{ height: 480 }} className="pie-main-div">
            <ResponsivePie
              data={pieInfo}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 6]],
              }}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 7,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: 'bookedrooms',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'availablerooms',
                  },
                  id: 'lines',
                },
              ]}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000',
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
