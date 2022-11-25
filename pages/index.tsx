/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Image from 'next/image';
import Head from 'next/head'
import { styled } from '@stitches/react';
import Form from "../components/Form"
import WelcomeCard from "../components/WelcomeCard"
import { UseStateContext } from '../context/ContextProvider';

const GlobalContainer = styled('div', {
  width: '100vw',
  paddingTop: '5%',
  paddingLeft: '5%',
  paddingBottom: '5%',
  backgroundColor: '#121212',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  '.imageHome':{
    width: '200px% !important',
  },
  '@media screen and (min-width: 768px)':{
    paddingTop: '2%',
    paddingLeft: '2%',
    paddingBottom: '2%',
  }
})

const ImageContainer = styled('div',{
  width: '50%',
})

const Home: NextPage = () => {
  const { homePageValue } = UseStateContext()
  return (
    <div>
      <Head>
        <title>Intrabank</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossorigin' />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />
      </Head>
      <main>
        <GlobalContainer>

          <ImageContainer>
            <Image className="imageHome" alt="img" src = {require(`../data/image1.png`)}/>
          </ImageContainer>
          {homePageValue ?
            <Form />
            :
            <WelcomeCard />
          }
        </GlobalContainer>
      </main>
    </div>
  )
}

export default Home
