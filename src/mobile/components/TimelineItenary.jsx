import * as React from 'react';
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

export default function TimelineItenary({ time, icon: Icon, title, description, colorDot }) {

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
          <TimelineConnector />
          <TimelineDot color={colorDot}>
            <Icon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }} component="span">
            {title}
          </Typography>
          <Typography sx={{ fontSize: '0.8rem' }}>
            {description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
