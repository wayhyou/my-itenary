import React from 'react'
import TimelineItenary from '../components/TimelineItenary';
import PinDropIcon from '@mui/icons-material/PinDrop';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import MosqueIcon from '@mui/icons-material/Mosque';
import CoffeeIcon from '@mui/icons-material/Coffee';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BackHandIcon from '@mui/icons-material/BackHand';
import LiquorIcon from '@mui/icons-material/Liquor';
import Box from '@mui/material/Box';
import HeaderItenary from '../components/HeaderItenary';

const HomePage = () => {
  const itenariesDayOne = [
    ["04:00 - 05:30", PinDropIcon, "Pasar Minggu Station", "Meeting Point", "info"],
    ["05:30 - 07:00", HomeIcon, "Pickup to Cikarang", "Heading to Mr. Faras' house", "secondary"],
    ["07:00 - 07:30", FastfoodIcon, "Breakfast", "Breakfast at Mr. Faras' house", "success"],
    ["07:30 - 10:30", DepartureBoardIcon, "Start the Journey", "Departure to Bandung", "primary"],
    ["10:30 - 11:30", RamenDiningIcon, "Lunch", "Lunch at Shinju Ramen", "success"],
    ["11:30 - 13:00", MosqueIcon, "Al Multazam Mosque", "Friday prayers", "warning"],
    ["13:00 - 16:00", CoffeeIcon, "D'Pakar Cafe", "Coffee break", "info"],
    ["16:00 - 16:30", DepartureBoardIcon, "OTW to Villa", "Departure to Hillside Bliss Villa", "primary"],
    ["16:30 - 18:30", AccessTimeIcon, "Free Time", "Cleaning Up in Villa", "grey"],
    ["18:30 - 19:30", BackHandIcon, "Prepare", "Prepare for Party", "secondary"],
    ["19:30", LiquorIcon, "Party", "Party at Villa", "error"],
  ];

  const itenariesDayTwo = [
    ["07:00 - 07:30", DepartureBoardIcon, "OTW to ITB", "Departure to ITB", "info"],
    ["07:30 - 10:00", AccessTimeIcon, "Free Time", "Free Time at ITB", "success"],
    ["10:00 - 10:30", DepartureBoardIcon, "OTW to Villa", "Departure to Hillside Bliss Villa", "info"],
    ["10:30 - 11:00", AccessTimeIcon, "Check Out", "Prepare for Check Out Villa", "warning"],
    ["11:00 - 14:00", FastfoodIcon, "Iga Bakar Sijangkung", "Lunch at Iga Bakar Sijangkung", "secondary"],
    ["14:00 - 17:00", DepartureBoardIcon, "OTW to Cikarang", "Departure to Cikarang", "info"],
    ["17:00 - 18:30", DepartureBoardIcon, "OTW to Pasar Minggu Station", "Departure to Pasar Minggu Station", "info"],
  ];

  return (
    <Box sx={{ p: 0 }}>
      {/* 27 Juni 2025 */}
      <HeaderItenary dateText="📅 27 Juni 2025" />

      {itenariesDayOne.map(([time, Icon, title, description, colorDot], index) => (
          <TimelineItenary
          key={index}
          time={time}
          icon={Icon}
          title={title}
          description={description}
          colorDot={colorDot}
          />
        ))}

      {/* 28 Juni 2025 */}
      <HeaderItenary dateText="📅 28 Juni 2025" />

      {itenariesDayTwo.map(([time, Icon, title, description, colorDot], index) => (
        <TimelineItenary
          key={index + itenariesDayOne.length}
          time={time}
          icon={Icon}
          title={title}
          description={description}
          colorDot={colorDot}
        />
      ))}
    </Box>
  );
}

export default HomePage;
