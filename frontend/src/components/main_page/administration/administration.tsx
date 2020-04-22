import React from 'react'
import { Layout} from 'antd';
import style from './administration.module.css'
import {Button} from '.components'

const Administration = (props: any) => {
    return (
        <div>
           <Layout className={style.content}>
                <Button type='primary' size='large'>Bla</Button>
           </Layout>
        </div>
    )
}

export default Administration