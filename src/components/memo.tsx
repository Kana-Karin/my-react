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
        title: 'HTML/CSS',
        dtl: '勉強'
    }, {
        id: 2,
        title: 'SCSS',
        dtl: '勉強'
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
                      <MDBCardTitle key={Data.title}>{ Data.title }</MDBCardTitle>
                      <MDBCardText>
                      <Rate disabled defaultValue={4} />
                      </MDBCardText>
                      <MDBCardText>
                        <small key={Data.id}>{ Data.dtl }</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                </MDBRow>
            )) }
            </div>
    )
}

export default List;