import styled from '@emotion/styled'
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from 'chart.js'
import React from 'react'
import {Line} from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title)
const options = {
  layout: {
    padding: {
      top: 54,
      right: 48,
      bottom: 48,
      left: 54,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        padding: 32,
        display: false,
      },
      title: {
        display: false,
      },
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
  width: '100%',
  height: 304,
  position: 'relative',
  '@media (max-width: 576px)': {
    height: 200,
  },
})
const TitleWrap = styled.div({
  position: 'absolute',
  padding: '16px 24px',
  left: 0,
  top: 0,
  display: 'flex',
  columnGap: 24,
  alignItems: 'center',
  color: '#fff',
  textTransform: 'uppercase',
  'span:first-of-type': {
    font: '400 15px/18px "Inter"',
  },
  'span:last-child': {
    font: '400 22px/27px "Inter"',
  },
})
const TypeWrap = styled.div({
  position: 'absolute',
  padding: '16px 24px',
  left: 0,
  bottom: 0,
  display: 'flex',
  columnGap: 16,
})
interface TypeItemProps {
  active?: boolean
}
const TypeItem = styled.div<TypeItemProps>((props) => ({
  padding: '2px 22px',
  borderRadius: 11,
  backgroundColor: props.active ? '#FFCC21' : '#fff',
  color: props.active ? '#fff' : '#FFCC21',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '#FFCC21',
    color: '#fff',
  },
}))

const BodyRecord = () => {
  return (
    <Wrapper id='myRecord'>
      <Line options={options} data={data} />
      <TitleWrap>
        <span>
          body
          <br />
          record
        </span>
        <span>2021.05.21</span>
      </TitleWrap>
      <TypeWrap>
        <TypeItem>日</TypeItem>
        <TypeItem>週</TypeItem>
        <TypeItem>月</TypeItem>
        <TypeItem active>年</TypeItem>
      </TypeWrap>
    </Wrapper>
  )
}

export default React.memo(BodyRecord)
