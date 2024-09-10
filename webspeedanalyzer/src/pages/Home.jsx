import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Button, TextField, CircularProgress, Card, CardContent, CardActions, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { css, keyframes } from '@emotion/react';

// Define a keyframe animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Apply the animation
const fadeInStyle = css`
  animation: ${fadeIn} 1s ease-in-out;
`;

const API_KEY = 'AIzaSyCBWliYugrzwPJRDGw5P0DnUTlAOW26oDU';

const Home = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve URL and result from localStorage
    const storedUrl = localStorage.getItem('analyzeUrl');
    const storedResult = sessionStorage.getItem('analyzeResult');
    if (storedUrl) {
      setUrl(storedUrl);
    }
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
      // Save URL to localStorage
      localStorage.setItem('analyzeUrl', url);

      // Make the API call to PageSpeed Insights
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${API_KEY}`
      );

      // Extract relevant data from response
      const data = response.data;
      const calculatedResult = {
        performance: { score: data.lighthouseResult.categories.performance.score * 100, status: getStatus(data.lighthouseResult.categories.performance.score * 100) },
        loadTime: { time: data.lighthouseResult.audits['interactive'].displayValue.replace('s', ''), status: getStatus(parseFloat(data.lighthouseResult.audits['interactive'].displayValue.replace('s', ''))) },
        seo: { score: data.lighthouseResult.categories.seo.score * 100, status: getStatus(data.lighthouseResult.categories.seo.score * 100) },
        accessibility: { score: data.lighthouseResult.categories.accessibility.score * 100, status: getStatus(data.lighthouseResult.categories.accessibility.score * 100) },
        pwa: { score: data.lighthouseResult.categories.pwa.score * 100, status: getStatus(data.lighthouseResult.categories.pwa.score * 100) },
        security: { score: data.lighthouseResult.categories.seo.score * 100, status: getStatus(data.lighthouseResult.categories.seo.score * 100) },
        usability: { score: data.lighthouseResult.categories.performance.score * 100, status: getStatus(data.lighthouseResult.categories.performance.score * 100) },
        serverResponseTime: { time: data.lighthouseResult.audits['server-response-time'].displayValue.replace('ms', ''), status: getStatus(parseFloat(data.lighthouseResult.audits['server-response-time'].displayValue.replace('ms', ''))) },
        imageOptimization: { score: data.lighthouseResult.audits['unminified-css'].score * 100, status: getStatus(data.lighthouseResult.audits['unminified-css'].score * 100) },
        cssOptimization: { score: data.lighthouseResult.audits['unused-css-rules'].score * 100, status: getStatus(data.lighthouseResult.audits['unused-css-rules'].score * 100) },
        jsOptimization: { score: data.lighthouseResult.audits['unminified-javascript'].score * 100, status: getStatus(data.lighthouseResult.audits['unminified-javascript'].score * 100) },
        suggestions: data.lighthouseResult.audits['diagnostics'].details.items.map(item => item.title)
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
                <Card sx={{ borderColor: result[key].status, borderWidth: 2, borderStyle: 'solid', ...fadeInStyle }}>
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
                      variant="contained"
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
