import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Steps, Divider, Typography, Space } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import List from '../components/list'
//Import image
import Img from '../assets/img/kalinka-logo-icon.png';

const { Step } = Steps;

const { Text, Link } = Typography;

function About() {
    return (
      <div className="About">
        <div className="section">
        <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-10'>
        <MDBCol md='4'>
          <MDBCardImage src={Img} alt='img' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Proifle</MDBCardTitle>
            <MDBCardText>
              <small className='text-muted'>Kanae Fukushima</small>
            </MDBCardText>
            <MDBCardTitle>福島 佳苗</MDBCardTitle>
            <MDBCardTitle>1995/08/25</MDBCardTitle>
              <Divider />
    <Steps progressDot current={4} direction="vertical">
      <Step title="2013/03" description="北海道芸術高等学校 卒業" />
      <Step title="2013/04" description="ロシア極東連邦総合大学 ロシア語地域学科 入学" />
      <Step title="2018/09" description="療養の為、ロシア極東連邦総合大学 ロシア語地域学科を中退" />
      <Step title="2020/12" description="北海道ガス株式会社でコールセンター事務として入社" />
      <Step title="2021/04" description="WEB/ITの仕事に携わりたく、技術を習得するために職業訓練校WEBデザインクリエーター科 入学。
      職業訓練校でHTML/CSS/Javascriptの勉強をきっかけに、WebGL、ReactやVueでのアプリ制作、Laravelを用いてSNSや予約システム、ECサイト構築に興味を持ち、
      授業中に独学で勉強" />
    </Steps>
    <Divider />
    <MDBCardTitle>趣味</MDBCardTitle>
        <MDBCardText>
              <small>PS5/PS4/Steam/VR、React/Vue/Laravel/Railsの解説やドキュメントの読み漁り、読書、映画鑑賞、ジョジョ、仮面ライダー、ゲーム情報の読み漁り、イラレでイラストを描くなど</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
        </div>
        <Divider>言語/フレームワーク</Divider>
        <List />
      </div>
    );
  }
  
  export default About;
  