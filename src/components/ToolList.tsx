import React from 'react';
import { Rate } from 'antd';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
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
        <div>
            { Datas.map((Data: Data) => (
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                  <MDBCard className='h-100'>
                    
                    <MDBCardBody>
                      <MDBCardTitle>HTML5/CSS3</MDBCardTitle>
                      <MDBCardText>
                      <Rate disabled defaultValue={4} />
                      </MDBCardText>
                      <MDBCardText>
                        <small>小学6年生の頃にHTML4/CSS/の基本を独学で学び、サイトを運営していました。
                          職業訓練校にて、改めてHTML5/CSS3を学びました。</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                </MDBRow>
            )) }
     </div>
    )
}