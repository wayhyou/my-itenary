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
    ["04:00 - 05:30", PinDropIcon, "Pasar Minggu Station", "Meeting Point", "info", "https://awsimages.detik.net.id/community/media/visual/2021/01/21/parkir-sepeda-di-stasiun-pasar-minggu-rabu-201_169.jpeg?w=1200", "https://maps.app.goo.gl/38CCaDJ5nusYvMzv6"],
    ["05:30 - 07:00", HomeIcon, "Pickup to Cikarang", "Heading to Mr. Faras' house", "secondary", "https://asset2.morefurniture.id/NEWS/2024/3/Desain%20Rumah%20Besar%20Mewah%20Sofa%20Samping%20Kolam.jpg", "https://maps.app.goo.gl/mBfcinc4H768WCAPA"],
    ["07:00 - 07:30", FastfoodIcon, "Breakfast", "Breakfast at Mr. Faras' house", "success", "https://syamilaqiqah.com/wp-content/uploads/2022/08/kambing-guling-1.jpeg", "https://maps.app.goo.gl/mBfcinc4H768WCAPA"],
    ["07:30 - 10:30", DepartureBoardIcon, "Start the Journey", "Departure to Bandung", "primary", "https://c.inilah.com/reborn/2023/08/1/1118_061747_576b_inilah_com_scaled_c6fc66b6c2.jpg", "https://maps.app.goo.gl/NaSMJ7h7GKHqZKSVA"],
    ["10:30 - 11:30", RamenDiningIcon, "Lunch", "Lunch at Shinju Ramen", "success", "https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2023/07/08/3466334412.jpg", "https://maps.app.goo.gl/NaSMJ7h7GKHqZKSVA"],
    ["11:30 - 13:00", MosqueIcon, "Al Multazam Mosque", "Friday prayers", "warning", "https://asset.kompas.com/crops/3kVFZ8NBeuMUNk6DmCH0wSMRnxM=/0x0:750x500/1200x800/data/photo/2024/05/15/6644bac536d66.jpg", "https://maps.app.goo.gl/s2xxLTRDHLipC2nr6"],
    ["13:00 - 16:00", CoffeeIcon, "D'Pakar Cafe", "Coffee break", "info", "https://cdn.wisata.app/diary/48c8a0e1-0e42-4f8b-aeb4-a41885880a26_sm.jpg", "https://maps.app.goo.gl/ccvCgC9Yn3p1s16L9"],
    ["16:00 - 16:30", DepartureBoardIcon, "OTW to Villa", "Departure to Hillside Bliss Villa", "primary", "https://rumaindo.com/dashboard/assets/img/webfile/properti-24311.jpeg?key=20240213080854", "https://maps.app.goo.gl/QSH2zNbpRwo9tNhh6"],
    ["16:30 - 18:30", AccessTimeIcon, "Free Time", "Cleaning Up in Villa", "grey", "https://rumaindo.com/dashboard/assets/img/webfile/properti-24311.jpeg?key=20240213080854", "https://maps.app.goo.gl/QSH2zNbpRwo9tNhh6"],
    ["18:30 - 19:30", BackHandIcon, "Prepare", "Prepare for Party", "secondary", "https://www.cakaplah.com/assets/article/03092024/cakaplahcom_qbecp_15863.jpg", "https://maps.app.goo.gl/QSH2zNbpRwo9tNhh6"],
    ["19:30", LiquorIcon, "Party", "Party at Villa", "error", "https://batam.kemenag.go.id/main/public/img/informasi/berita/1666769127_aff6c5d1ec0560f0b4d6.jpg", "https://maps.app.goo.gl/QSH2zNbpRwo9tNhh6"],
  ];

  const itenariesDayTwo = [
    ["07:00 - 07:30", DepartureBoardIcon, "OTW to ITB", "Departure to ITB", "info", "https://itb.ac.id/files/cover/170125-Kolam-Intel.jpg", "https://maps.app.goo.gl/EWFQNduEesFFNCfLA"],
    ["07:30 - 10:00", AccessTimeIcon, "Free Time", "Free Time at ITB", "success", "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/76/2024/02/15/Top-10-Jurusan-Kuliah-Terketat-di-ITB-Hindari-Jika-Ingin-Peluang-Lolos-Institut-Teknologi-Bandung-Jalur-SNBP-2024-Lebih-BesarJPG-2838653562.jpg", "https://maps.app.goo.gl/EWFQNduEesFFNCfLA"],
    ["10:00 - 10:30", DepartureBoardIcon, "OTW to Villa", "Departure to Hillside Bliss Villa", "info", "https://rumaindo.com/dashboard/assets/img/webfile/properti-24311.jpeg?key=20240213080854", "https://maps.app.goo.gl/QSH2zNbpRwo9tNhh6"],
    ["10:30 - 11:00", AccessTimeIcon, "Check Out", "Prepare for Check Out Villa", "warning", "https://media.cntraveller.com/photos/647703ead82f31f3aa46a9eb/16:9/w_2560%2Cc_limit/GettyImages-1419610165.jpeg", "https://maps.app.goo.gl/QSH2zNbpRwo9tNhh6"],
    ["11:00 - 14:00", FastfoodIcon, "Iga Bakar Sijangkung", "Lunch at Iga Bakar Sijangkung", "secondary", "https://salsawisata.com/wp-content/uploads/2023/10/Iga-Bakar-Si-Jangkung-PhotoRoom.jpg", "https://maps.app.goo.gl/svvr98mmamyQhFFG7"],
    ["14:00 - 17:00", DepartureBoardIcon, "OTW to Cikarang", "Departure to Cikarang", "info", "https://asset2.morefurniture.id/NEWS/2024/3/Desain%20Rumah%20Besar%20Mewah%20Sofa%20Samping%20Kolam.jpg", "https://maps.app.goo.gl/mBfcinc4H768WCAPA"],
    ["17:00 - 18:30", DepartureBoardIcon, "OTW to Pasar Minggu Station", "Departure to Pasar Minggu Station", "info", "https://awsimages.detik.net.id/community/media/visual/2021/01/21/parkir-sepeda-di-stasiun-pasar-minggu-rabu-201_169.jpeg?w=1200", "https://maps.app.goo.gl/38CCaDJ5nusYvMzv6"],
  ];

  return (
    <Box sx={{ p: 0 }}>
      {/* 27 Juni 2025 */}
      <HeaderItenary dateText="📅 27 Juni 2025" />

      {itenariesDayOne.map(([time, Icon, title, description, colorDot, imageUrl, mapUrl], index) => (
          <TimelineItenary
          key={index}
          time={time}
          icon={Icon}
          title={title}
          description={description}
          colorDot={colorDot}
          imageUrl={imageUrl}
          mapUrl={mapUrl}
          />
        ))}

      {/* 28 Juni 2025 */}
      <HeaderItenary dateText="📅 28 Juni 2025" />

      {itenariesDayTwo.map(([time, Icon, title, description, colorDot, imageUrl, mapUrl], index) => (
        <TimelineItenary
          key={index + itenariesDayOne.length}
          time={time}
          icon={Icon}
          title={title}
          description={description}
          colorDot={colorDot}
          imageUrl={imageUrl}
          mapUrl={mapUrl}
        />
      ))}
    </Box>
  );
}

export default HomePage;
