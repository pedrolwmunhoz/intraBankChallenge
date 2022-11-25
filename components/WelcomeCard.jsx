import React from 'react'
import { styled } from '@stitches/react';
import { UseStateContext } from '../context/ContextProvider'


const WelcomeContainer = styled('div', {
  position: 'absolute',
  width: '100vw',
  padding: '5%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

const CardContainer = styled('div',{
  width: '90%',
  backgroundColor: 'rgba(29, 29, 29, 0.301)',
  mixBlendMode: 'normal',
  border: '2px solid #2A2A2A',
  borderRadius: '8px',
  div:{
    padding: '10%',
    opacity: '100% !important',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    gap: '10px',
    textAlign: 'center',
    p:{
      backgroundColor: '#47E0FF',
      borderRadius: '2000px',
      width: 'fit-content',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      padding: '30px',
      color: 'black',
      fontSize: '25px',
      fontWeight: '600',
      fontFamily: "'Roboto', sans-serif",


    },
    h1:{
      fontSize: '25px',
      color: 'white',
      fontFamily: "'Roboto', sans-serif",
    },
    h2:{
      fontSize: '10px',
      color: 'white',
      fontFamily: "'Roboto', sans-serif",
      fontWeight: '300',
    }
  },

  '@media screen and (min-width: 800px)':{
    div:{
      padding: '10%',
      width: '100%',
      gap: '30px',
      p:{
        backgroundColor: '#47E0FF',
        borderRadius: '2000px',
        height: '100px',
        padding: '30px',
        fontSize: '25px',

      },
      div:{
        gap: '5px',
      },
      h1:{
        fontSize: '45px',
        color: 'white',
      },
      h2:{
        fontSize: '18px',
        color: 'white',
      }
    }
  }
})

const WelcomeCard = () => {
  const { cardInfo } = UseStateContext()
  return (
    <WelcomeContainer>
      <CardContainer>
        <div>
          <p>{cardInfo?.firstName[0]} {cardInfo?.lastName[0]}</p>
          <h1>Bem vindo {cardInfo?.firstName}</h1>
          <h2>Você nasceu no dia {cardInfo?.dateOfBirthday}</h2>
        </div>
      </CardContainer>
    </WelcomeContainer>
  )
}

export default WelcomeCard