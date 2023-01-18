import { FC, useEffect } from 'react'
import { Spin } from 'antd'
import { useFetchOrderData } from '@/models/useFetchOrderData'
import Container from '@/components/Container'

import styles from './app.module.css'

const App: FC = () => {
  const {
    state: { data, loading },
    fetch,
  } = useFetchOrderData()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Spin spinning={loading}>
      <div className={styles.wrapper}>
        <Container data={data?.dishes || []} />
      </div>
    </Spin>
  )
}

export default App
