import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, Grid } from "@mui/material";
import ActivityCard from '../activitycard/ActivityCard'

export default function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("http://localhost:3042/activities");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        console.log("Fetched activities:", data);

        // Dit API returnerer { status, message, data: [...] }
        const parsed = Array.isArray(data.data) ? data.data : [];
        setActivities(parsed);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Kunne ikke hente aktiviteter.");
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading)
    return (
      <Box sx={{ textAlign: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );

  if (!activities || activities.length === 0)
    return (
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography>Ingen aktiviteter fundet.</Typography>
      </Box>
    );

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 6, md: 8 }} // lidt mere luft på store skærme
      sx={{
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 10 }, // ekstra sideafstand på web
        py: { xs: 4, md: 8 }, // mere lodret luft
      }}
    >
      {activities.map((activity) => (
        <Grid
          item
          key={activity._id}
          xs={12}
          sm={6}
          md={4}
          display="flex"
          justifyContent="center"
        >
          <ActivityCard
            title={activity.title}
            image={activity.image}
            time={activity.time}
            description={activity.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
