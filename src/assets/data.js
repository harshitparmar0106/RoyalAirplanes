import xflyImg from "../assets/xfly-model-2100mm.webp";
import xflyImgTop from "../assets/xfly-model-2100mm-topview.webp";
import rcEraC129V2Img from "../assets/rcEraC129V2Img.jpg";
import rcEraC129V2Img2 from "../assets/rcEraC129V2Img2.jpg";
import fmsRangerGreenImg from "../assets/FMS_Green.jpg";
import fmsRangerRedImg from "../assets/FMS_Yellow.jpg";
import fmsRangerYellowImg from "../assets/FMS_Red.jpg";
import fmsEDF90 from "../assets/FMS_EDF_90mm.webp";
import fmsEDF90_2 from "../assets/FMS_EDF_90MM_TOPVIEW.jpg";
import fms1700SuperClub from "../assets/FMS_1700MM_SUPERCLUB.webp";
import fms1700SuperClubWater from "../assets/FMS_1700mm_SUPERCLUB_WATER.webp";
import fmsEdf70 from "../assets/FMS_EDF_70mm_2.webp";
import fmsEdf70_2 from "../assets/FMS141P_EDF_70MM.png";
import fmsFoxGlider from "../assets/FMS_2300MM_GLIDER.webp";
import fmsFoxGlider2 from "../assets/FMS_2300MM_GLIDER2.jpg";
import mig29_1 from "../assets/Mig-29Img.jpg";
import mig29_2 from "../assets/mig29Img2.webp";
import arrowHusky from "../assets/Arrows_Husky.jpg";
import arrowHusky2 from "../assets/Arrows_Husky2.jpg";
import dynamDNC from "../assets/Dynam_DNC.jpg";
import dynamDNC2 from "../assets/Dynam_DNC_2.jpg";
import dynamTiger from "../assets/DynamTiger.webp";
import dynamTiger2 from "../assets/Dynam_Tiger_2.webp";
import dynamoPrimo from "../assets/DYNAMO_PRIMO1.webp";
import dynamoPrimo2 from "../assets/DYNAMO_PRIMO2.webp";
import arrowBigfoot from "../assets/Arrows1300MM.jpg";
import arrowBigfoot2 from "../assets/Arrows_bigfoot_2.jpg";
import kootai from "../assets/Kootai_510mm.jpg";
import kootai2 from "../assets/Kootai510mm_2.png";
import wrightbrthrs from "../assets/WrightBrthrs.webp";
import spitfire from "../assets/SpitfireMK_IX.jpg";
import pendora1 from "../assets/FT30121P-1.webp";
import pendora2 from "../assets/FreewingPendora.jpeg";
import Aircraftstand1 from "../assets/AircraftStand.png";
import AircraftStand2 from "../assets/AircraftStand2.jpg";
import matrix from "../assets/matrix.png";
import ars300 from "../assets/ARS300.jpeg";
import scorpion from "../assets/ScorpionV2.webp";




export const products = [
  {
    id: 1,
    name: "RC ERA C129 V2 4CH RC Helicopter with Altitude Hold, 6-Axis Gyro & 3D Flip",
    image: [rcEraC129V2Img, rcEraC129V2Img2],
    category: "helicopter",
    price: 10999, // add price if known
    specs: {
      rotorDiameter: "248mm",
      bodyLength: "267mm",
      height: "80mm",
      flightTime: "upto 15 minutes",
      chargingTime: "≈60 minutes",
      controlDistance: "80–100 meters",
      mainMotor: "8520 Coreless Motor",
      tailMotor: "0615 Coreless Motor",
      battery: "3.7V 300mAh Li-ion",
      remoteControl: "4×1.5V AA (Not Included)",
      gyroscope: "6-Axis",
      rollCapability: "360° Roll",
    },
  },
  {
    id: 2,
    name: "FMS 1220mm Ranger V3 EP PNP RC Plane with Reflex V3(Red/Green/Yellow selectable)",
    image: [fmsRangerGreenImg, fmsRangerRedImg, fmsRangerYellowImg],
    category: "airplane",
    price: 21999, // add price if known
    specs: {
      wingspan: "1220mm / 48in",
      overallLength: "947mm / 37.3in",
      flyingWeight: "1200g",
      motorSize: "3136-1200KV",
      esc: "20A",
      servos: "9g Servo × 5",
      radio: "6 Channel",
      cg: "50–60mm from leading edge",
      propSize: "10×5 2-blade",
      recommendedBattery: "3S 1300-2200mAh 20-30C(not included)",
      batteryCompartment: "100×60×40mm",
      batteryConnector: "XT60",
      aileron: "YES",
      elevator: "YES",
      rudder: "YES",
      flaps: "NO",
      retracts: "NO",
      flightDuration: "≈10 minutes",
    },
  },
  {
    id: 3,
    name: "FMS EDF Jet 90mm Avanti PNP 18th Annniversary Edition",
    image: [fmsEDF90_2, fmsEDF90],
    category: "jet",
    price: 61999, // add price if known
    specs: {
      wingspan: "1290mm / 50.8in",
      overallLength: "1360mm / 53.5in",
      flyingWeight: "≈3200g",
      motorSize: "3670 KV1950",
      esc: "120A",
      servos: "13g × 8pcs",
      radio: "6 Channel",
      cg: "125–135mm",
      propSize: "90mm 12-blade Ducted Fan",
      recommendedBattery: "Battery 6S 22.2V 5000–6000mAh 45C (EC5 connector)",
      aileron: "YES",
      rudder: "YES",
      flaps: "YES",
      retracts: "YES",
    },
  },
  {
    id: 4,
    name: "FMS 1700mm PA-18 Super Club V2 RTF/PNP",
    image: [fms1700SuperClub, fms1700SuperClubWater],
    category: "airplane",
    price: 36999, // add price if known
    specs: {
      wingspan: "1700mm / 66.9in",
      overallLength: "1136mm / 44.7in",
      flyingWeight: "2100g",
      motorSize: "3541-KV750",
      esc: "45A",
      servos: "17g × 6",
      radio: "6 Channel",
      cg: "80–85mm (from leading edge)",
      propSize: "12×7.5 2-blade",
      recommendedBattery: "14.8V 2200–2600mAh 4S 35C",
      batteryConnector: "XT60",
      aileron: "YES",
      elevator: "YES",
      rudder: "YES",
      flaps: "YES",
      retracts: "NO",
      led: "YES",
      flightDuration: "4–5 minutes",
    },
  },
  {
    id: 5,
    name: "FMS EDF Jet 70mm viper V2 PNP 15th Anniversary Edition",
    image: [fmsEdf70, fmsEdf70_2],
    category: "jet",
    price: 54999, // add price if known
    specs: {
      wingspan: "1100mm / 43.3in",
      overallLength: "1025mm / 40.4in",
      flyingWeight: "≈1795g",
      motorSize: "3060-KV1900 (In runner)",
      esc: "80A",
      servos: "9g Metal Digital × 8",
      radio: "6 Channel",
      cg: "90–95mm (from leading edge)",
      edf: "70mm 12-blade Ducted Fan",
      recommendedBattery: "6S 3300mAh 35C",
      batteryConnector: "EC5",
      aileron: "YES",
      elevator: "YES",
      rudder: "YES",
      flaps: "YES",
      retracts: "YES",
      flightDuration: "≈4 minutes",
    },
  },
  {
    id: 6,
    name: "FMS 2300mm FOX V2 Glider PNP",
    image: [fmsFoxGlider, fmsFoxGlider2],
    category: "glider",
    price: 29999, // add price if known
    specs: {
      wingspan: "2300mm / 91.4in",
      overallLength: "1290mm / 50.8in",
      flyingWeight: "≈1150g",
      wingLoad: "30.7g/dm²",
      wingArea: "37.5dm²",
      servos: "9g × 6",
      recommendedBattery: "Li-Po 3S 11.1V 1300-2200mAh 25-30C (not included)",
      batteryConnector: "XT60",
    },
  },
  {
    id: 7,
    name: "Dynam Primo RC Beginner Trainer Red STOL Bigfoot 4S 1450mm w/flaps",
    image: [dynamoPrimo, dynamoPrimo2],
    category: "airplane",
    price: 25999, // add price if known
    specs: {
      wingspan: "1450mm / 57in",
      overallLength: "1014mm / 39.9in",
      flyingWeight: "1660g / 58.5oz",
      wingLoading: "51.08g/dm²",
      cg: "55–60mm from leading edge (wing root)",
      powerSystem: "Detrum BM3720-650KV Brushless Outrunner (pre-installed)",
      esc: "TomCat Skylord-40A ESC 3A-BEC (pre-installed)",
      propeller: "2-blade 13×6",
      servos: "9g Micro Servo × 6 (pre-installed)",
      landingGear: "Fixed",
      requiredBattery: "4S 14.8V 2200-3000mAh Li-Po 25-40C (not included)",
      aileron: "YES",
      elevator: "YES",
      rudder: "YES",
      flaps: "YES",
      flightTime: "≈8 minutes",
      material: "EPO Foam",
      skillLevel: "Beginner-Intermediate",
    },
  },
  {
    id: 8,
    name: "Dynam DNC-2 Beaver V2 Red 4s Sea/Land RC Seaplane 1.5m w/Flap Plus Floats & Rubber Wheel",
    image: [dynamDNC, dynamDNC2],
    category: "airplane",
    price: 27999, // add price if known
    specs: {
      wingspan: "1500mm / 59in",
      overallLength: "958mm / 37.7in",
      flyingWeight: "1400–1750g / 55.1–68.8oz",
      wingLoading: "58g/dm²",
      cg: "45–50mm from leading edge (wing root)",
      powerSystem: "Detrum BM3720-650KV Brushless Outrunner (pre-installed)",
      esc: "TomCat Skylord-50A ESC (pre-installed)",
      propeller: "2-blade 13×6",
      servos: "9g Micro Servo × 7 (pre-installed)",
      landingGear: "Float & Fixed Gear(included)",
      requiredBattery: "4S 14.8V 2200–3000mAh 25-40C (not included)",
      aileron: "YES",
      elevator: "YES",
      rudder: "YES",
      flaps: "YES",
      lights: "YES",
      flightTime: "≈8 minutes",
      material: "EPO Foam",
      skillLevel: "Intermediate",
    },
  },
  {
    id: 9,
    name: "Dynam Tiger Moth DH. 82 V2 1300mm 4s RC Biplane",
    image: [dynamTiger, dynamTiger2],
    category: "airplane",
    price: 29999, // add price if known
    specs: {
      wingspan: "1270mm / 50in",
      overallLength: "1050mm / 41.3in",
      flyingWeight: "1450g / 51oz",
      wingLoading: "41g/dm²",
      cg: "115–120mm from leading edge (wing root)",
      powerSystem: "Detrum BM3720-800KV Brushless Outrunner (pre-installed)",
      esc: "TomCat Skylord-50A ESC (pre-installed)",
      propeller: "2-blade 12×6",
      servos: "9g Micro Servo × 4 (pre-installed)",
      landingGear: "Fixed",
      requiredTransmitter: "GAVIN-6C 2.4GHz 6-Channel or above",
      requiredReceiver:
        "MSR66A 6CH 2.4GHz (iStone 6-Axis Gyro Stabilizer w/ ABS System)",
      requiredBattery: "4S 14.8V 2200mAh Li-Po 25C (XT60 connector)",
      aileron: "YES",
      elevator: "YES",
      rudder: "YES",
      flaps: "NO",
      flightTime: "≈8 minutes",
      material: "EPO Foam",
      skillLevel: "Intermediate",
      assemblyTime: "≈1 hour",
    },
  },
  {
    id: 10,
    name: "Arrows 1300mm BigFoot(PNP RC Plane) Installed vector flight stabilization system",
    image: [arrowBigfoot, arrowBigfoot2],
    category: "airplane",
    price: 27999, // add price if known
    specs: {
      wingspan: "1300mm / 51.1in",
      overallLength: "1060mm / 41.7in",
      cg: "60–70mm from leading edge",
      powerSystem: "3536-850KV Brushless Motor",
      esc: "30A",
      propeller: "2-blade 11×7",
      servos: "9g Servo × 6",
      landingGear: "Fixed",
      requiredBattery: "3S 2200-3000mAh 25-40C (not included)",
      requiredRadio: "6-Channel Transmitter & Receiver Required",
      ailerons: "YES",
      elevator: "YES",
      rudder: "YES",
      flaps: "YES",
      hingeType: "Foam",
      material: "EPO Foam",
      skillLevel: "Beginner-Intermediate",
      buildTime: "60 minutes",
    },
  },
  {
    id: 11,
    name: "Kootai 510mm Maule EPP Brushless Motor RTF Plane with 2,4Ghz 4-Channel Transmitter and Radio System",
    image: [kootai, kootai2],
    category: "airplane",
    price: 12999, // add price if known
    specs: {
      wingspan: "510mm",
      overallLength: "370mm",
      flyingWeight: "94g",
      flightTime: "≈10–12 minutes",
      rcRange: "≈150–200m",
      motor: "1504B KV4700 Brushless Motor",
      propeller: "5×4.5cm 2-blade",
      servos: "3.7g × 3",
      battery: "3.7V 500mAh LiPo battery & charger cable included",
      esc: "7A",
      // charger: "USB Charger",
      radioSystem: "2.4GHz 5-Channel (Ready-To-Fly)",
      gyroscope: "6-Axis Smart Gyroscope",
      material: "EPP Foam",
      led: "YES",
      batteryAlarm: "YES",
      skillLevel: "Beginner",
      // compatibleReceiver: "Futaba RX (optional)",
    },
  },
  {
    id: 12,
    name: "Arrows RC Husky Ultimate 1800mm(6s) with Vector flight stablization system PNP RC Plane",
    image: [arrowHusky, arrowHusky2],
    category: "airplane",
    price: 37999, // add price if known
    specs: {
      wingspan: "1800mm / 71in",
      overallLength: "1200mm / 47in",
      wingArea: "47.7dm² / 739in²",
      wingLoading: "49g/dm² / 0.1oz/in²",
      cg: "80–90mm from leading edge",
      powerSystem: "3948-550KV Brushless Motor",
      esc: "50A",
      propeller: "2-blade 13×7.5",
      servos: "23g × 6",
      landingGear: "Fixed",
      requiredBattery: "Up to 6S 3300mAh (Not Included)",
      requiredRadio: "6-Channel Transmitter & Receiver (Not Included)",
      ailerons: "YES",
      elevator: "YES",
      rudder: "YES",
      flaps: "YES",
      lights: "YES",
      material: "EPO Foam",
      skillLevel: "Intermediate (14+)",
      buildTime: "30-60 minutes",
      gyro: "Vector",
      flightDuration: "≈4–5 minutes",
    },
  },
  {
    id: 13,
    name: "Arrows Mig-29 2×64mm EDF Jet PNP",
    image: [mig29_1, mig29_2],
    category: "jet",
    price: 44999, // add price if known
    specs: {
      wingspan: "906mm / 35.7in",
      overallLength: "1358mm / 53.5in",
      flyingWeight: "≈2500g",
      edf: "Dual 64mm 12-blade EDF",
      motor: "Brushless Outrunner 2840-KV2280",
      esc: "Hobbywing 40A with 5.5V 5A BEC",
      servos: "9g × 6 (3 metal)",
      retracts: "Electronic Retractable Main Gear",
      ailerons: "YES",
      elevator: "YES",
      rudder: "YES",
      flaps: "YES",
      led: "Navigation & Landing Lights",
      recommendedRadio: "6-Channel",
      recommendedEnvironment: "Outdoor",
      flightTime: "4-7 mins",
      // mountingDuration: "≈15 minutes",
      requiredTransmitter: "6-Channel Radio(Rx) & Transmitter(Tx)",
      requiredReceiver: "6-Channel Receiver",
      requiredBattery: "6S 22.2V 3300–5000mAh LiPo 35C",
      requiredCharger: "6S-Compatible Battery Charger",
    },
  },
  {
    id: 14,
    name: "Pandora 4-in-1 Red 1400mm PNP",
    image: [pendora1, pendora2],
    category: "airplane",
    price:29999,
    specs: {
      wingspan: "1400mm / 55.1in",
      length: "1180mm / 46.5in",
      flying_weight: "1500g / 53oz",
      material: "EPO Foam",
      skill_level: "Beginner to Intermediate",
      build_time: "1 hour",
      motor: "Brushless 3536-800Kv",
      esc: "30A with Internal BEC, XT60 Connector",
      propeller: "11x6 3-blade",
    },
  },
  {
    id: 15,
    name: "LightWeight Foam Aircraft Stand",
    image: [Aircraftstand1, AircraftStand2],
    category: "accessories",
    price:3999,
    specs: {
      material: "High-Density Foam",
      length: "580mm",
      width: "300mm",
      height: "355mm",
      weight_capacity: "530g",
    },
  },
];

export const galleryData = [
  {
    title: "The Wright Flyer (1903)",
    description:
      "The first powered flight by the Wright brothers — the historic beginning of aviation.",
    image: wrightbrthrs,
  },
  {
    title: "Spitfire Mk IX",
    description:
      "The legendary British fighter that turned the tide in the Battle of Britain.",
    image: spitfire,
  },
  {
    title: "Red Bull Air Race",
    description:
      "Modern-day precision aerobatics — pilots push limits in high-speed obstacle races.",
    image:
      "https://img.rezdy.com/PRODUCT_IMAGE/33973/rezdy_ultimate_experience_matt_hall_red_bull_aerobatics_experience_air_race_2_lg.jpg",
  },
  {
    title: "Sukhoi Su-30MKI Cobra Maneuver",
    description:
      "A signature Indian Air Force stunt — the Cobra maneuver shows extreme agility.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/SU-30MKI-g4sp_-_edit_2%28clipped%29.jpg/800px-SU-30MKI-g4sp_-_edit_2%28clipped%29.jpg",
  },
  {
    title: "Boeing 747 Jumbo Era",
    description:
      "A symbol of global air travel revolution — the Queen of the Skies.",
    image:
      "https://www.hindustantimes.com/ht-img/img/2024/04/22/960x540/-p-Air-India-s--queen-of-the-sky--takes-off-from-M_1713813100835_1713822490305.jpg",
  },
  {
    title: "Formation Flying Display",
    description:
      "Precision teamwork and trust — an art form mastered by elite fighter pilots.",
    image:
      "https://warwingsdaily.com/wp-content/uploads/2024/01/Surya-Kiran-1024x676.jpg",
  },
];

export const sliderImages = [
  scorpion,
  ars300,
  fmsEDF90,
  fms1700SuperClub,
  xflyImg
];
