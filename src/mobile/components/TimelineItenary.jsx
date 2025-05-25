import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

export default function TimelineItenary({ time, icon: Icon, title, description, colorDot, imageUrl, mapUrl }) {
  const [showDetail, setShowDetail] = useState(false);

  const handleToggleDetail = () => {
    setShowDetail(prev => !prev);
  };

  return (
    <Timeline 
      position="alternate"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.6,
          ml: -5
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ 
            m: 'auto 0',
          }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {time}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: `${colorDot}.main` }} />
          <TimelineDot color={colorDot}>
            <IconButton onClick={handleToggleDetail} >
              <Icon sx={{ color: 'white' }} />
            </IconButton>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: `${colorDot}.main` }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }} component="span">
            {title}
          </Typography>
          <Typography sx={{ fontSize: '0.8rem' }}>
            {description}
          </Typography>

          <Collapse in={showDetail}>
            <div style={{ marginTop: 10, maxWidth: 400, width: '100%' }}>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={title}
                  style={{
                    width: '100%',
                    borderRadius: 8,
                    marginBottom: 10,
                    maxHeight: 300, // Batasi tinggi jika perlu
                    objectFit: 'cover' // Untuk cropping rapi jika gambar terlalu besar
                  }}
                />
              )}
              {mapUrl && (
                <Button
                  variant="outlined"
                  color="primary"
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth // Biar tombol 100% juga
                >
                  Open in Google Maps
                </Button>
              )}
            </div>
          </Collapse>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
