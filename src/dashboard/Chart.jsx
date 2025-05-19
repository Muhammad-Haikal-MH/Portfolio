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
      id: 'redux',
      label: 'Redux',
      start: new Date('2025-04-01'),
      end: new Date('2025-04-30'),
      backgroundColor: 'rgba(236, 72, 153, 0.7)', // pink-500
      borderColor: 'rgb(236, 72, 153)',
    },
    {
      id: 'router',
      label: 'React Router',
      start: new Date('2025-04-01'),
      end: new Date('2025-04-30'),
      backgroundColor: 'rgba(16, 185, 129, 0.7)', // emerald-500
      borderColor: 'rgb(16, 185, 129)',
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
        max: new Date('2025-04-30'),
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