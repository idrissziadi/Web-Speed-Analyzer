import React, { useState, useEffect } from 'react';
import { Typography, Button, TextField, CircularProgress, Card, CardContent, CardActions, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    // Check if there is data in sessionStorage
    const storedResult = sessionStorage.getItem('analyzeResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  }, []);
  const handleAnalyze = async () => {
    if (!url) {
      setError('Please enter a valid URL.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate result with calculated indices
      const calculatedResult = {
        performance: { score: 85, status: getStatus(85) },
        loadTime: { time: 1.2, status: getStatus(1.2) },
        seo: { score: 90, status: getStatus(90) },
        accessibility: { score: 75, status: getStatus(75) },
        bestPractices: { score: 80, status: getStatus(80) },
        pwa: { score: 70, status: getStatus(70) },
        security: { score: 95, status: getStatus(95) },
        usability: { score: 88, status: getStatus(88) },
        serverResponseTime: { time: 0.5, status: getStatus(0.5) },
        imageOptimization: { score: 78, status: getStatus(78) },
        cssOptimization: { score: 82, status: getStatus(82) },
        jsOptimization: { score: 79, status: getStatus(79) },
        suggestions: ['Optimize images', 'Minify CSS', 'Improve server response time'],
      };

      setResult(calculatedResult);
      sessionStorage.setItem('analyzeResult', JSON.stringify(calculatedResult));
    } catch (err) {
      setError('An error occurred during the analysis.');
    } finally {
      setLoading(false);
    }
  };

  const getStatus = (value) => {
    if (typeof value === 'number') {
      if (value >= 80) return 'green'; // Good performance
      if (value >= 50) return 'orange'; // Average performance
      return 'red'; // Poor performance
    }
    return 'orange';
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Welcome to Web Speed Analyzer
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Enter the URL of the website you want to analyze and click "Analyze" to get a performance report.
      </Typography>

      <TextField
        fullWidth
        label="Website URL"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        sx={{ my: 2 }}
      />

      <Button variant="contained" color="primary" onClick={handleAnalyze} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Analyze'}
      </Button>

      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}

      {result && (
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {Object.keys(result).map((key, index) => (
            key !== 'suggestions' && (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ borderColor: result[key].status, borderWidth: 2, borderStyle: 'solid' }}>
                  <CardContent>
                    <Typography variant="h6" color="text.primary">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </Typography>
                    <Typography variant="h4" color={result[key].status}>
                      {result[key].score || result[key].time} {result[key].time ? 's' : ''}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant='contained'
                      onClick={() => navigate(`/${key}`, { state: { result: result[key], suggestions: result.suggestions } })}
                    >
                      See More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          ))}

        </Grid>
      )}
    </div>
  );
};

export default Home;
