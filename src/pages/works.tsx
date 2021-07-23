import React, { useState } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import { Typography } from 'antd';

//Image
import folio1 from '../assets/img/portfolio1.png'
import folio2 from '../assets/img/portfolio2.png'
import folio3 from '../assets/img/portfolio3.png'

const { Text } = Typography;

export default function Works() {

  return (
    
    <div className="Works">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {/* Portfolio1 */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={folio1}
            width="50"
            height="auto"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>骨董品のサイトデザイン</MDBCardTitle>
              <small><Text type="success">コンペ応募作品</Text></small>
            <MDBCardText>
              <small><Text disabled>作業日数:3日</Text></small>
            </MDBCardText>
            <MDBCardText>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Portfolio2 */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={folio2}
            width="50"
            height="auto"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>ボタンデザイン</MDBCardTitle>
              <small><Text type="success">コンペ応募作品</Text></small>
            <MDBCardText>
              <small><Text disabled>作業日数:1日</Text></small>
            </MDBCardText>
            <MDBCardText>
      </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Portfolio3 */}
      <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage 
            src={folio3}
            width="50"
            height="auto"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>架空のカフェサイト制作</MDBCardTitle>
            <MDBCardText>
              <small><Text disabled>作業日数:5日</Text></small>
            </MDBCardText>
            <MDBCardText>
      </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Portfolio4 */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={folio1}
            width="50"
            height="auto"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>SNS風Laravelアプリ</MDBCardTitle>
            <MDBCardText>
              <small><Text disabled>作業日数:7日</Text></small>
            </MDBCardText>
            <MDBCardText>
      </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}