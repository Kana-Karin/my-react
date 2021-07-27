import React, { useState } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBIcon} from 'mdb-react-ui-kit';
import { Typography, Collapse} from 'antd';

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


export default function Works() {

  return (

    
    
    <div className="Works">
    <h1>Works</h1>
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
            <MDBCardText>
            <Collapse ghost>
              <Panel header="詳細" key="1">
                <p>使用ソフト:Adobe Illustrator</p>
                <p>コンペ応募作品です。外国の方もご利用されること想定して和モダンを意識し、アクセントカラーには小豆色を使用。落ち着いたデザインにしました。</p>
              </Panel>
            </Collapse>
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
            <Collapse ghost>
              <Panel header="詳細" key="1">
                <p>使用ソフト:Adobe Illustrator</p>
                <p>コンペ応募作品です。サイトに馴染み、分かり易いデザインを希望されていたので、</p>
                <p>主張し過ぎず、押したくなるようなフラットデザインにしました。</p>
                <p></p>
              </Panel>
            </Collapse>
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
            <MDBCardTitle>
              <Link href="http://kalinka.whitesnow.jp/" target="_blank">
                架空のカフェ<MDBIcon size='xs' fa icon='external-link-alt' />
              </Link>
            </MDBCardTitle>
            <Collapse ghost>
              <Panel header="詳細" key="1">
                <p>開発環境:HTML,SCSS,Javascript</p>
                <p>設定を前提に、デザイン、コーディングをしました。30~40代の男女をターゲットにした架空サイトです。落ち着いたデザインで、高級店ではないがこだわりの珈琲を提供しているという設定を前提に、デザイン、コーディングをしました。</p>
              </Panel>
            </Collapse>
            <MDBCardText>
          </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

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
            <Collapse ghost>
              <Panel header="詳細" key="1">
                <p>開発環境:Docker,Laravel</p>
                <p>登録、記事の投稿、編集、削除、ログインが可能です。</p>
                <p>ルーターの設定やデータベース、認証、理解を深めるために、ググりながら作成しました。</p>
                <p>セキュリテイ面にまでは届きませんでしたが、いずれは予約サイトやECサイトの構築を目標にしています。</p>
              </Panel>
            </Collapse>
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
            <Collapse ghost>
              <Panel header="詳細" key="1">
                <p>使用ソフト:Adobe Illustrator</p>
                <p>個人的に好きな2Dアクションのゲーム、Cupheadのファンアートです。</p>
                <p>手書きのイラストを取り込んでUnityで動かしているそうです。</p>
                <p>難易度も手応えあり。</p>
              </Panel>
            </Collapse>
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
            <Collapse ghost>
              <Panel header="詳細" key="1">
              <p>使用ソフト:Adobe Illustrator</p>
                <p>Warframe公式が主催するEgg-Spression-Contestに応募し、デジタル部門で8位に入賞しました。</p>
                <p>Harrowed groundを背景に敷き詰め、イースターをモチーフにデザインしました。</p>
              </Panel>
            </Collapse>
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
            <Collapse ghost>
              <Panel header="詳細" key="1">
              <p>開発環境:React.js,TypeScript</p>
                <p>元々はVueで作成していましたが、TypeScriptとの相性、パフォーマンス、トレンドを踏まえて、React.jsを選択しました。</p>
                <p>PropsやHooksを勉強中です。今後の目標はNext.jsでアプリ制作、サイト制作です。</p>
                <p>余談ですが、Nintendo Switchの内部ではReactが動いてるそうです。かっこいい・・・</p>
              </Panel>
            </Collapse>
              </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>
    </div>
  );
}