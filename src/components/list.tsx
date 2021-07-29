import React from 'react';
import { Rate } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

//Image
import Html from '../assets/img/html5-brands.svg';
import Css from '../assets/img/css3-alt-brands.svg';
import Sass from '../assets/img/sass.svg'
import Js from '../assets/img/js-brands.svg'
import Laravel from '../assets/img/laravel-brands.svg'
import Rails from '../assets/img/ruby-on-rails.svg'
import ReactIcon from '../assets/img/react-brands.svg'
import Vue from '../assets/img/vuejs-brands.svg'
import Ai from '../assets/img/adobe-illustrator.svg'
import Ps from '../assets/img/adobe-photoshop.svg'
import Tsx from '../assets/img/typescript.svg'
import Docker from '../assets/img/docker.svg'


export default function List() {
  return (
    
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {/* Html and CSS3 */}
      <QueueAnim>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Html}
            width="70"
            height="70"
            position='top'
          />
          <MDBCardImage
            src={Css}
            width="70"
            height="70"
            position='top'
          />
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
      </QueueAnim>

      {/* Sass */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Sass}
            alt='sass'
            width="70"
            height="70"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Sass</MDBCardTitle>
            <MDBCardText>
            <Rate disabled defaultValue={3} />
            </MDBCardText>
            <MDBCardText><small>CSSだと記述量が多くなってしまったり、保守性に欠けると判断したので、Sass(Scss)を独学</small></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Javascript */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Js}
            alt='Js'
            width="70"
            height="70"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Javascript</MDBCardTitle>
            <Rate disabled defaultValue={2} />
            <MDBCardText><small>サイト制作において必要な部分を勉強中です。</small></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Laravel */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Laravel}
            alt='Laravel'
            width="70"
            height="70"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Laravel</MDBCardTitle>
            <Rate disabled defaultValue={2} />
            <MDBCardText><small>独学で勉強中です。予約システム、ECサイト構築を目標にしています。</small></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Ruby on Rails */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Rails}
            alt='Laravel'
            width="90"
            height="90"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Ruby on rails</MDBCardTitle>
            <MDBCardText><small>Laravelと比較するために勉強する予定です。</small></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* React */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={ReactIcon}
            alt='React'
            width="70"
            height="70"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>React</MDBCardTitle>
            <Rate disabled defaultValue={2} />
            <MDBCardText><small>独学で勉強中です。Gatsbyにも触れました。次の目標はNext.jsです。Nintendo Switchやニコニコ動画がReactで動いていると知り、ずっと憧れていました。</small></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* TypeScript */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Tsx}
            alt='React'
            width="70"
            height="70"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>TypeScript</MDBCardTitle>
            <Rate disabled defaultValue={2} />
            <MDBCardText><small>Reactを動かすために独学で勉強中です</small></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Vue */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Vue}
            alt='Vue'
            width="70"
            height="70"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Vue</MDBCardTitle>
            <Rate disabled defaultValue={2} />
            <MDBCardText><small>独学で勉強中です。Reactと比較すると学習コストが低い上に、スコープでスタイルを一部のみ指定できる部分が気に入っています。Nuxt.jsを目標にしています</small></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Adobe */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Ai}
            alt='Ai'
            width="70"
            height="70"
            position='top'
          />
          <MDBCardImage
            src={Ps}
            alt='Ps'
            width="70"
            height="70"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Ai/Ps</MDBCardTitle>
            <Rate disabled defaultValue={4} />
            <MDBCardText><small>AiでWebサイトデザインを作成、イラストの作成、アイコンの作成経験有リます</small></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      {/* Docker */}
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Docker}
            alt='Docker'
            width="70"
            height="70"
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Docker</MDBCardTitle>
            <MDBCardText><small>Laravelの環境を構築するため、ざっくり独学で学習中です</small></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
  );
}