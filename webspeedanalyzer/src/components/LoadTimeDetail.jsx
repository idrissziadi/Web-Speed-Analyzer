import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import { useLocation } from 'react-router-dom';

const LoadTimeDetail = () => {
  const { state } = useLocation();
  const { result, suggestions } = state || {};

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Load Time Detail
      </Typography>
      <Card sx={{ borderColor: result.status, borderWidth: 2, borderStyle: 'solid' }}>
        <CardContent>
          <Typography variant="h6" color="text.primary">
            Load Time
          </Typography>
          <Typography variant="h4" color={result.status}>
            {result.time} s
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Suggestions:
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadTimeDetail;
