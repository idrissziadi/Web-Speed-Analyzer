import React from 'react';
import { Typography, TextField, Button, Box, Container, Paper, Grid } from '@mui/material';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      {/* Header Section */}
      <Typography variant="h3" color="primary" gutterBottom>
        Contact Us
      </Typography>

      {/* Contact Form */}
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h5" color="primary" gutterBottom>
          Get in Touch
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Name Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
                size="small"
                sx={{ mb: 2 }}
              />
            </Grid>
            {/* Email Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                required
                size="small"
                sx={{ mb: 2 }}
              />
            </Grid>
            {/* Subject Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                required
                size="small"
                sx={{ mb: 2 }}
              />
            </Grid>
            {/* Message Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                required
                multiline
                rows={4}
                size="small"
                sx={{ mb: 2 }}
              />
            </Grid>
            {/* Submit Button */}
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Contact Details */}
      <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
        Contact Details
      </Typography>
      <Paper elevation={3} sx={{ padding: 4, mt: 2 }}>
        <Typography variant="body1">
          <strong>Address:</strong> 1234 Street Name, City, State, 56789
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Email:</strong> <a href="mailto:info@webspeedanalyzer.com">info@webspeedanalyzer.com</a>
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Phone:</strong> (123) 456-7890
        </Typography>
      </Paper>
    </Container>
  );
};

export default Contact;
