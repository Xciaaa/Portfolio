import digiArt from '../../assets/images/digitalArt.png';
import Photo from '../../assets/images/Picture.png';
import OnlineGames from '../../assets/images/VALORANT.webp';

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
    id: 'us-app',
    title: 'Us-APP',
    category: 'software',
    subtitle: 'Flutter / Application',
    image: OnlineGames,
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
    title: 'Interactive Quiz App',
    category: 'software',
    subtitle: 'JavaScript / React UI',
    image: digiArt,
    description: 'A dynamic, multi-topic quiz platform built with state management and live scoring metrics.',
    highlights: [
      'Dynamic question rendering and timer tracking',
      'Instant result calculation and breakdown',
      'Clean, intuitive component-based UI design',
    ],
    details: 'Created an engaging quiz application focused on smooth interactive flow, state management, and clear UI design. Handles timed modules, user score calculation, and interactive feedback loops.',
  },
];

export default projects;