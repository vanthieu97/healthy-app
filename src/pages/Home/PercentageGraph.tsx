import styled from '@emotion/styled'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import React from 'react'
import {Line} from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)
const options = {
  responsive: true,
  layout: {
    padding: {
      bottom: 12,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      ticks: {color: '#fff'},
      grid: {
        color: '#777777',
      },
    },
  },
}

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
]

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
  ],
}

const Wrapper = styled.div({
  backgroundColor: '#2E2E2E',
  flex: 1,
  canvas: {
    marginLeft: 60,
  },
  '@media (max-width: 768px)': {
    height: 312,
    canvas: {
      marginLeft: 20,
    },
  },
})
const PercentageGraph = () => {
  return (
    <Wrapper>
      <Line options={options} data={data} />
    </Wrapper>
  )
}

export default React.memo(PercentageGraph)
