import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation delay for chart appearance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Define the learning technologies and their time ranges
  const learningData = [
    {
      id: 'sklearn',
      label: 'Scikit-learn',
      start: new Date('2026-02-30'),
      end: new Date('2026-05-30'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'matplotlib',
      label: 'Matplotlib',
      start: new Date('2026-03-10'),
      end: new Date('2026-03-20'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'pandas',
      label: 'Pandas',
      start: new Date('2026-01-30'),
      end: new Date('2026-02-30'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'numpy',
      label: 'Numpy',
      start: new Date('2026-01-01'),
      end: new Date('2026-01-25'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'python',
      label: 'Python',
      start: new Date('2025-12-01'),
      end: new Date('2025-12-27'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'nextjs',
      label: 'Next JS',
      start: new Date('2025-09-01'),
      end: new Date('2025-10-17'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'tableau',
      label: 'Tableau',
      start: new Date('2025-09-01'),
      end: new Date('2025-12-20'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'mongodb',
      label: 'MongoDB',
      start: new Date('2025-08-15'),
      end: new Date('2025-09-25'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'expressjs',
      label: 'Express JS',
      start: new Date('2025-06-01'),
      end: new Date('2025-07-10'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'nodejs',
      label: 'Node JS',
      start: new Date('2025-05-01'),
      end: new Date('2025-05-20'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'mysql',
      label: 'MySQL',
      start: new Date('2025-02-01'),
      end: new Date('2025-06-01'),
      backgroundColor: 'rgba(14, 145, 213, 0.7)', // 
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'react',
      label: 'React JS',
      start: new Date('2025-02-01'),
      end: new Date('2025-03-31'),
      backgroundColor: 'rgba(14, 165, 233, 0.7)', // sky-500
      borderColor: 'rgb(14, 165, 233)',
    },
    {
      id: 'vite',
      label: 'Vite',
      start: new Date('2025-01-01'),
      end: new Date('2025-01-31'),
      backgroundColor: 'rgba(168, 85, 247, 0.7)', // purple-500
      borderColor: 'rgb(168, 85, 247)',
    },
    {
      id: 'tailwind',
      label: 'Tailwind',
      start: new Date('2024-12-01'),
      end: new Date('2024-12-31'),
      backgroundColor: 'rgba(6, 182, 212, 0.7)', // cyan-500
      borderColor: 'rgb(6, 182, 212)',
    },
    {
      id: 'javascript',
      label: 'JavaScript',
      start: new Date('2024-11-01'),
      end: new Date('2025-01-31'),
      backgroundColor: 'rgba(234, 179, 8, 0.7)', // yellow-500
      borderColor: 'rgb(234, 179, 8)',
    },
    {
      id: 'css',
      label: 'CSS',
      start: new Date('2024-08-01'),
      end: new Date('2024-10-31'),
      backgroundColor: 'rgba(59, 130, 246, 0.7)', // blue-500
      borderColor: 'rgb(59, 130, 246)',
    },
    {
      id: 'html',
      label: 'HTML',
      start: new Date('2024-08-01'),
      end: new Date('2024-09-30'),
      backgroundColor: 'rgba(239, 68, 68, 0.7)', // red-500
      borderColor: 'rgb(239, 68, 68)',
    },
  ];

  // Prepare data for the chart
  const data = {
    datasets: learningData.map((tech) => ({
      label: tech.label,
      data: [
        {
          x: [tech.start, tech.end],
          y: tech.label,
        },
      ],
      backgroundColor: tech.backgroundColor,
      borderColor: tech.borderColor,
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
    })),
  };

  // Chart configuration
  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMM yy',
          },
        },
        min: new Date('2024-08-01'),
        max: new Date('2026-04-30'),
        adapters: {
          date: {
            locale: enUS,
          },
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            family: '"Inter", "Helvetica", "Arial", sans-serif',
            size: 12,
          },
        },
        title: {
          display: true,
          text: 'Timeline',
          font: {
            family: '"Inter", "Helvetica", "Arial", sans-serif',
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: '"Inter", "Helvetica", "Arial", sans-serif',
            size: 12,
          },
        },
        title: {
          display: true,
          text: 'Technology',
          font: {
            family: '"Inter", "Helvetica", "Arial", sans-serif',
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            family: '"Inter", "Helvetica", "Arial", sans-serif',
            size: 12,
          },
          usePointStyle: true,
          boxWidth: 10,
          padding: 16,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          title: (context) => context[0].dataset.label,
          label: (context) => {
            const startDate = new Date(context.raw.x[0]);
            const endDate = new Date(context.raw.x[1]);
            const startMonth = startDate.toLocaleString('default', { month: 'long' });
            const endMonth = endDate.toLocaleString('default', { month: 'long' });
            const startYear = startDate.getFullYear();
            const endYear = endDate.getFullYear();
            
            if (startYear === endYear && startMonth === endMonth) {
              return `${startMonth} ${startYear}`;
            } else if (startYear === endYear) {
              return `${startMonth} - ${endMonth} ${startYear}`;
            } else {
              return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
            }
          },
        },
      },
    },
  };

  return (
    <div className={`h-full transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;