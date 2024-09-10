import React from 'react';
import { Typography, Button, Grid, Box, Link, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ paddingY: 4 }}>
      {/* Header Section */}
      <Typography variant="h3" color="primary" gutterBottom>
        About Us
      </Typography>

      {/* Mission and Vision */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h5" color="primary">
          Mission
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Our mission is to provide fast and accurate web speed analysis to help developers optimize their websites for better performance.
        </Typography>
        <Typography variant="h5" color="primary" sx={{ marginTop: 4 }}>
          Vision
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          We envision a web where every site is optimized for speed and efficiency, providing the best user experience possible.
        </Typography>
      </Paper>

      {/* Team Information */}
      <Typography variant="h4" color="primary" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6" color="text.primary">
              John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lead Developer
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6" color="text.primary">
              Jane Smith
            </Typography>
            <Typography variant="body2" color="text.secondary">
              UX Designer
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h6" color="text.primary">
              Mike Johnson
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Project Manager
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Technologies Used */}
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Typography variant="h5" color="primary">
          Technologies Used
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Our application is built using modern technologies including React, Material-UI, and performance analysis tools to ensure the best user experience.
        </Typography>
      </Paper>

      {/* User Testimonials */}
      <Typography variant="h4" color="primary" gutterBottom sx={{ marginTop: 4 }}>
        What Our Users Say
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Paper elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            "Web Speed Analyzer has been a game-changer for optimizing my site’s performance. Highly recommended!"
          </Typography>
          <Typography variant="body2" color="text.secondary">
            - Alice Brown
          </Typography>
        </Paper>
        <Paper elevation={2} sx={{ padding: 2 }}>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            "The insights provided by this tool are incredibly valuable for any web developer looking to improve site speed."
          </Typography>
          <Typography variant="body2" color="text.secondary">
            - Bob White
          </Typography>
        </Paper>
      </Box>


      {/* Frequently Asked Questions (FAQs) */}
      <Typography variant="h4" color="primary" gutterBottom sx={{ marginTop: 4 }}>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Paper elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="body1">
            <strong>Q: How do I use the Web Speed Analyzer?</strong><br />
            A: Simply enter the URL of the website you want to analyze and click the analyze button. You'll get a detailed report on the performance of the website.
          </Typography>
        </Paper>
        <Paper elevation={2} sx={{ padding: 2 }}>
          <Typography variant="body1">
            <strong>Q: What performance metrics are analyzed?</strong><br />
            A: We analyze various metrics including page load time, image sizes, and blocking scripts to provide you with actionable recommendations for optimization.
          </Typography>
        </Paper>
      </Box>

    </Container>
  );
};

export default About;
