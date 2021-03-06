import React, { useState } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBIcon} from 'mdb-react-ui-kit';
import { Typography, Collapse, Tabs} from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

//Image
import folio1 from '../assets/img/portfolio1.png'
import folio2 from '../assets/img/portfolio2.png'
import folio3 from '../assets/img/portfolio3.png'
import folio4 from '../assets/img/portfolio4.png'
import imgFolio1 from '../assets/img/cuphead_1m.png'
import imgFolio2 from '../assets/img/Easter_Oberon.png';
import folio5 from '../assets/img/my-react.png';

const { Text, Link } = Typography;
const { Panel } = Collapse;


const { TabPane } = Tabs;



export default function Works() {

  return (

    
    
    <div className="Works">
    <h1>Works</h1>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {/* Portfolio4 */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={folio4}
            width="50"
            height="auto"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>
            <Link href="http://laramemo-kana.herokuapp.com/" target="_blank">
                Laravelメモアプリ<MDBIcon size='xs' fas icon='external-link-alt' />
              </Link>
            </MDBCardTitle>
            <MDBCardText>
              {/* Tab start */}
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="使用ツール・環境" key="1">
              <p>開発環境:Docker,Laravel</p>
              </TabPane>
              <TabPane tab="詳細" key="2">
              <p>登録、記事の投稿、編集、削除、ログインが可能です。</p>
              </TabPane>
              <TabPane tab="コメント" key="3">
              <p>ルーターの設定やデータベース、認証、理解を深めるために、ググりながら作成しました。</p>
                <p>セキュリテイ面にまでは届きませんでしたが、いずれは予約サイトやECサイトの構築を目標にしています。</p>
              </TabPane>
            </Tabs>
            {/* Tab end */}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
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
            <MDBCardText>
              {/* Tab start */}
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="使用ツール・環境" key="1">
              <p>使用ソフト:Adobe Illustrator</p>
              </TabPane>
              <TabPane tab="詳細" key="2">
                <p>コンペ応募作品です。外国の方もご利用されること想定して和モダンを意識し、アクセントカラーには小豆色を使用。落ち着いたデザインにしました。</p>
              </TabPane>
              <TabPane tab="コメント" key="3">
              </TabPane>
            </Tabs>
            {/* Tab end */}
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
            <MDBCardTitle>
              <Link href="http://kalinka.whitesnow.jp/" target="_blank">
                架空のカフェ<MDBIcon size='xs' fa icon='external-link-alt' />
              </Link>
            </MDBCardTitle>
            {/* Tab start */}
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="使用ツール・環境" key="1">
              <p>開発環境:HTML,SCSS,Javascript</p>
              </TabPane>
              <TabPane tab="詳細" key="2">
                <p>30~40代の男女をターゲットにした架空サイトです。落ち着いたデザインで、高級店ではないがこだわりの珈琲を提供しているという設定を前提に、デザイン、コーディングをしました。</p>
              </TabPane>
              <TabPane tab="コメント" key="3">
              </TabPane>
            </Tabs>
            {/* Tab end */}
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
            <MDBCardText>
              {/* Tab start */}
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="使用ツール・環境" key="1">
              <p>使用ソフト:Adobe Illustrator</p>
              </TabPane>
              <TabPane tab="詳細" key="2">
              <p>コンペ応募作品です。サイトに馴染み、分かり易いデザインを希望されていたので、</p>
                <p>主張し過ぎず、押したくなるようなフラットデザインにしました。</p>
              </TabPane>
            </Tabs>
            {/* Tab end */}
            </MDBCardText>
            <MDBCardText>
      </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

        {/* Portfolio5 */}
            <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={imgFolio1}
            width="50"
            height="auto"
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle>Cupheadファンアート
            </MDBCardTitle>
            <MDBCardText>
              {/* Tab start */}
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="使用ツール・環境" key="1">
              <p>使用ソフト:Adobe Illustrator</p>
              </TabPane>
              <TabPane tab="詳細" key="2">
                <p>個人的に好きな2Dアクションのゲーム、Cupheadのファンアートです。</p>
                <p>手書きのイラストを取り込んでUnityで動かしているそうです。</p>
                <p>難易度も手応えあり。</p>
              </TabPane>
            </Tabs>
            {/* Tab end */}
              </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

        {/* Portfolio6 */}
                  <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={imgFolio2}
            width="50"
            height="auto"
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle>
            <Link href="https://forums.warframe.com/topic/1255960-tenno-egg-spression-contest-winners-announced/" target="_blank">
                Warframeコンテスト応募作品<MDBIcon size='xs' fas icon='external-link-alt' />
              </Link>
            </MDBCardTitle>
            <MDBCardText>
              {/* Tab start */}
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="使用ツール・環境" key="1">
              <p>使用ソフト:Adobe Illustrator</p>
              </TabPane>
              <TabPane tab="詳細" key="2">
              <p>Warframe公式が主催するEgg-Spression-Contestに応募し、デジタル部門で8位に入賞しました。</p>
                <p>Harrowed groundを背景に敷き詰め、イースターをモチーフにデザインしました。</p>
              </TabPane>
            </Tabs>
            {/* Tab end */}
              </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Portfolio7 */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={folio5}
            width="50"
            height="auto"
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle>Reactポートフォリオ
            </MDBCardTitle>
            <MDBCardText>
              {/* Tab start */}
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="使用ツール・環境" key="1">
              <p>開発環境:React.js,TypeScript</p>
              </TabPane>
              <TabPane tab="詳細" key="2">
              <p>元々はVueで作成していましたが、SPAということ、動作パフォーマンス、トレンドを踏まえて、React.jsを選択しました。わからない部分や、エラーが発生したらひたすら先人の知識を探し、修正していきました。</p>
              </TabPane>
              <TabPane tab="コメント" key="3">
              <p>map配置やHooksを勉強中です。今後の目標はNext.jsでアプリ制作、サイト制作です。</p>
                <p>余談ですが、Nintendo Switchの内部ではReactが動いてるそうです。かっこいい・・・</p>
              </TabPane>
            </Tabs>
            {/* Tab end */}
              </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>
    </div>
  );
}