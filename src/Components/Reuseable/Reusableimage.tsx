import { Card, Typography } from '@mui/material';
import React from 'react';
import './Reuseableimage.css';
const Reusableimage: React.FC = () => {
   return (
      <>
         <div className="reusableMainDiv">
            <Card className="titlecss">
               <Typography variant="h2" className="TitleColor">
                  <strong>
                     Neo<span style={{ color: 'red' }}>MEET</span>
                  </strong>
               </Typography>
               <Typography variant="caption" className="TitleColor">
                  <strong>Engaging Minds, Empowering Success!</strong>
               </Typography>
            </Card>
         </div>
      </>
   );
};

export default Reusableimage;
