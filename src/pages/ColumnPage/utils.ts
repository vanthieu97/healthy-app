export type ColumnType = 'column' | 'diet' | 'beauty' | 'health'

export interface Column {
  title: string
  tags: string[]
  datetime: string
  url: string
  type: ColumnType
  id: string
}

const data = new Array(32).fill(null).map((_, idx) => ({
  id: idx.toString(),
  title:
    '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
  tags: ['#魚料理', '#和食', '#DHA'],
  datetime: '2021.05.17 23:25',
  url: `column-${(idx % 8) + 1}.jpg`,
  type: ['column', 'diet', 'beauty', 'health'][idx % 4] as ColumnType,
}))

export const getColumns = ({
  offset,
  type,
}: {
  offset: number
  type?: ColumnType
}) => {
  const filteredData = type ? data.filter((item) => item.type === type) : data

  const size = offset ? 4 : 8
  return Promise.resolve({
    data: filteredData.slice(offset, offset + size),
    offset,
    ended: offset + size >= filteredData.length,
    size,
  })
}
