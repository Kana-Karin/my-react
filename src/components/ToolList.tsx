import { Tabs } from 'antd';
const { TabPane } = Tabs;

type Data = {
    id: number
    title: string
    dtl: string
}

const Datas: Data[] = [
    {
        id: 1,
        title: '一番高い商品',
        dtl: 'アイウエオ'
    }, {
        id: 2,
        title: '一番ださい商品',
        dtl: 'かきくけこ'
    }
]

const List: React.FC = () => {
    return (
        <div className="Tool">
            <ul>
            { Datas.map((Data: Data) => (
                <li key={Data.id}>{ Data.title }</li>
            )) }
            </ul>
        </div>
    )
}

export default List;