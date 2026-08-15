import digiArt from '../../assets/images/spd.png';
import Photo from '../../assets/images/imsl.png';
import Quiz from '../../assets/images/QuizIT.png';
import Us from '../../assets/images/UsApp.png';
import RC from '../../assets/images/RC.png';
import egg from '../../assets/images/eggie.png';

const projects = [
  {
    id: 'pill-dispenser',
    title: 'Smart Medical Pill Dispenser',
    category: 'hardware',
    subtitle: 'IoT / Embedded Systems',
    image: digiArt,
    description: 'An automated medication management system that alerts and assists patients and caregivers with timely dosing.',
    highlights: [
      'Automated time-based servo dispensing mechanism',
      'Real-time audio/visual alert notification system',
      'Remote monitoring interface for family and caregivers',
    ],
    details: 'Designed and built an embedded pill dispenser focused on assisting elderly or sick individuals in adhering to medication schedules. The system integrates hardware scheduling, sensor-based dose verification, and instant notifications to reduce missed doses and ease caregiver workload.',
  },
  {
    id: 'ims-l',
    title: 'IMS-L: Laboratory Management System',
    category: 'hardware',
    subtitle: 'Hardware / Database',
    image: Photo,
    description: 'A smart physical laboratory cabinet integrated with hardware security and local tracking for campus equipment.',
    highlights: [
      'Single-door physical smart cabinet infrastructure',
      'Local database integration for real-time asset logging',
      'Hardware access control and automated inventory tracking',
    ],
    details: 'Developed a physical smart cabinet prototype (IMS-L) engineered specifically for managing and securing computer laboratory resources. Features localized data storage, hardware control systems, and streamlined asset check-in/check-out tracking.',
  },
  
    {
  id: 'RC',
  title: 'ESP32 Remote Controlled Car',
  category: 'embedded / robotics',
  subtitle: 'ESP32 / Motor Control / Web Sockets',
  image: RC,
  description: 'Wi-Fi/Bluetooth controlled robotic car featuring real-time motor control',
  highlights: [
    'Real-time low-latency motor control over Bluetooth',
    'Custom web interface served directly from the ESP32',
    'PWM-based speed control and directional motor driving via L298N',
  ],
  details: 'Designed and built a custom remote-controlled car powered by an ESP32 microcontroller. Implemented dual-channel PWM motor control for precise speed and steering handling.',
},
  {
  id: 'smartsoil',
  title: 'Smart Soil Monitoring System for Eggplants',
  category: 'hardware / iot',
  subtitle: 'IoT / Soil Sensing / NPK Sensor',
  image: egg,
  description: 'Automated soil and environmental monitoring system tailored for optimal eggplant cultivation.',
  highlights: [
    'Real-time soil moisture, temperature, and NPK sensing',
    'Automated telemetry with cellular/Wi-Fi data upload',
    'Custom alert thresholds tailored to eggplant crop health',
  ],
  details: 'Developed an IoT smart soil monitoring system designed to optimize yield and soil condition for eggplant crops. Integrated soil moisture, pH, and environmental sensors with real-time telemetry to provide actionable insights, automated threshold alerts, and remote field condition tracking.',
},
  {
    id: 'us-app',
    title: 'Us: Couple App',
    category: 'software',
    subtitle: 'Flutter / Application',
    image: Us,
    description: 'A dedicated interactive web application designed for couples to share memories, plans, and milestones.',
    highlights: [
      'Shared interactive dashboard for important dates and memories',
      'Real-time activity and note synchronization',
      'Responsive, modern UI tailored for personal connection',
    ],
    details: 'Built a customized web application crafted for couples to stay connected. Features intuitive UI components for tracking shared events, storing memories, and providing a private digital space.',
  },
  {
    id: 'quiz-app',
    title: 'QuizIT: Quiz Maker App',
    category: 'software',
    subtitle: 'Android studio / Java',
    image: Quiz,
    description: 'A dynamic, multi-topic quiz platform built with state management and live scoring metrics.',
    highlights: [
      'Dynamic question rendering and timer tracking',
      'Instant result calculation and breakdown',
      'Clean, intuitive component-based UI design',
    ],
    details: 'Created an engaging quiz application focused on smooth interactive flow, state management, and clear UI design. Handles timed modules, user score calculation, and interactive feedback loops.',
  },
  {
    id: 'netbeans',
    title: 'Java Desktop App & Flat-File Database',
    category: 'software',
    subtitle: 'Java / NetBeans / File I/O',
    image: RC,
    description: 'Standalone Java desktop application using a lightweight .txt file system for data persistence.',
    highlights: [
      'Custom Swing GUI designed in NetBeans IDE',
      'Flat-file persistence engine using .txt files',
      'Full CRUD operations with custom file parsing and error handling',
    ],
    details: 'Engineered a full Java desktop application built using the NetBeans IDE. Designed custom file I/O routines to handle data storage, retrieval, and state management using structured .txt files, eliminating external database dependencies while ensuring data integrity.',
  },
  
];

export default projects;