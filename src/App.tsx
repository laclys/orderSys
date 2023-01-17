import { FC, useEffect } from 'react'
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

  console.log('data', data)

  return (
    <div className={styles.wrapper}>
      <Container data={data?.dishes || []} />
    </div>
  )
}

export default App
