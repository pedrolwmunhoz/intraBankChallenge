import React, { useState } from 'react'
import { styled } from '@stitches/react';
import { CountryDropdown } from 'react-country-region-selector';
import { IMaskInput } from 'react-imask';
import Axios from 'axios'
import { UseStateContext } from '../context/ContextProvider';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const FormContainer = styled('div',{
    position: 'absolute',
    width: '90%',
    background: 'rgba(29, 29, 29, 0.5)',
    opacity: '0.7',
    border: '2px solid #2A2A2A',
    borderRadius: '8px',
    color:"white",
    opacity: '100%',
    padding: '3%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '5%',
    '@media screen and (min-width: 768px)':{
        width: '60%',
        marginRight: '20%'
    },
    '@media screen and (min-width: 1024px)':{
        width: '40%',
        marginRight: '30%',
        padding:'2%', 

    },

})

const TitleForm = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '10px',

    h1: {
        fontFamily: "'Roboto', sans-serif",
        color: 'white',
        fontWeight: '700',
        fontSize: '20px',
    },
    h2:{
        fontFamily: "'Roboto', sans-serif",
        color: 'white',
        fontWeight: '300',
        fontSize: '9px',
    },
    '@media screen and (min-width: 800px)':{
        h1: {
            fontSize: '25px',
        },
        h2:{
            fontSize: '14px',
        }

    }
})

const InputFormContainer = styled('div',{
    width: '100%',
    height: '100%',
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
    gap: '13px',
    div:{
        backgroundColor: '#202020',
        border: '1px solid #414141',
        borderRadius: '8px',
        padding: '4%',

        div:{
            display: 'flex',
            flexDirection: 'row',
            border: 'none',
            padding: 0,

        },
        p:{
            fontWeight: '500',
            fontSize: '11px',
            color: '#888888;',
            fontFamily: "'Roboto', sans-serif",
            display: 'none',
        }

    },
    '.formInput': {
        width: '100%',
        fontSize: '11px',
        color: '#ffff !important',
        backgroundColor: '#202020 !important',
        padding: '0 !important' ,
        fontFamily: "'Roboto', sans-serif !important",
        option:{
            color: '#B8B8B8',
            backgroundColor: '#202020'
        }

    },

    '.formInput::placeholder':{
        color: '#888888',
        fontSize: '11px',
        fontFamily: "'Roboto', sans-serif",

    },
    '.formInput:focus':{
        outline: 'none',
    },
    textarea:{
        resize: 'none'
    },
    button:{
        backgroundColor: '#2A2A2A',
        borderRadius: '8px',
        border: 'none',
        padding: '12px 20px',
        color: '#888888',
        fontWeight: '500',
        fontSize: '14px',
    },
    '@media screen and (min-width: 800px)':{
        padding: '5%',
        gap: '13px',
        div:{
            padding: '3%',
    
        },

        '.formInput': {
            padding: '3%',
            fontSize: '14px',

        },
        button:{
            padding: '16px 24px',
            fontSize: '14px',
        },

    }
})


const MoreInfoContainer = styled ('div',{
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',

    '.done-checkbox-container': {
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        input: {
            position: 'absolute',
            cursor: 'pointer',
            height: '15px',
            width: '15px',
            opacity: '0',
        },
    },

    '.done-checkmark': {
        position: 'absolute',
        pointerEvents: 'none',
        top: '0',
        left: '0',
        height: '15px',
        width: '15px',
        border: 'none',
        backgroundColor: 'none',
        border: '2px solid #E7E7E7;'
        },
    '.done-checkbox-container:hover input ~ .done-checkmark': {
        backgroundColor: '#414141',
    },
    '.done-checkmark:after': {
        content: "",
        position: 'absolute',
        display: 'none',
    },
    '.done-checkbox-container input:checked ~ .done-checkmark:after' :{
        display: 'block',
    },
    '.done-checkbox-container .done-checkmark:after': {
        left: '8px',
        top: '3px',
        width: '8px',
        height: '15px',
        border: '2px solid #ffffff',
        borderWidth: '0 2px 2px 0',
        '-webkit-transform': 'rotate(45deg)',
        '-ms-transform': 'rotate(45deg)',
        transform: 'rotate(45deg)',
    },
    p:{
        fontWeight: '300',
        fontSize: '10px',
        lineHeight: '130%',
        color: '#E7E7E7',
        marginLeft: '20px',
        marginTop: '2px',
        marginBottom: '10px'
    },
    '@media screen and (min-width: 800px)':{

    '.done-checkbox-container': {
        input: {
            height: '30px',
            width: '30px',
        },
    },
    '.done-checkmark': {
        height: '30px',
        width: '30px',
    },
    p:{
        fontSize: '14px',
        marginLeft: '40px',
        marginTop: '5px',
    },
    }
})

const InvalidText = styled('p',{
    color: 'red',
    fontSize: '11px',
    display: 'none',
})


const Form = () => {
    const [pais, setPais] = useState()
    const { setCardInfo, setHomePageValue } = UseStateContext()
    const [showPass, setShowPass] = useState('password')


    const handleInput = (pId, inputId)=>{
        !document.getElementById(inputId).value  ? document.getElementById(pId).style.display = 'none' : document.getElementById(pId).style.display = 'flex'
    }

    const handleConfimButton = ()=>{
        if(!valideInfos()){
            const post = {
                firstName: document.getElementById('input-nome').value,
                lastName: document.getElementById('input-sobrenome').value,
                email: document.getElementById('input-email').value,
                password: document.getElementById('input-senha').value,
                country: document.getElementById('input-pais').value,
                dateOfBirthday : document.getElementById('input-dataNascimento').value,
                bio: document.getElementById('input-bio').value,
                receiveNotifications: document.getElementById('moreInfo').checked,
            }
            Axios.post("https://637f50932f8f56e28e87af4a.mockapi.io/challenge", post)
                .then((resp)=>{
                    if(resp.status === 201){
                        setCardInfo(post)
                        setHomePageValue(false)
                    }else{
                        alert("Cadastro falhou")
                    }
                })
        }

    }

    const valideInfos= ()=>{
        const aux = false
        if(!document.getElementById('input-nome').value){
            document.getElementById('nome-invalido').style.display ="flex"
            document.getElementById('containerNome').style.border ="1px solid red"
            aux = true
        }else {
            document.getElementById('nome-invalido').style.display ="none"
            document.getElementById('containerNome').style.border ="none"

        }
        if(!document.getElementById('input-sobrenome').value){
            document.getElementById('sobrenome-invalido').style.display ="flex"
            document.getElementById('containerSobrenome').style.border ="1px solid red"
            aux = true

        }else {
            document.getElementById('sobrenome-invalido').style.display ="none"
            document.getElementById('containerSobrenome').style.border ="none"

        }
            let email = document.getElementById('input-email')
            let usuario = email.value.substring(0, email.value.indexOf("@"))
            let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
            if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
                document.getElementById('email-invalido').style.display ="none"
                document.getElementById('containerEmail').style.border ="none"
            }else{
                document.getElementById('email-invalido').style.display ="flex"
                document.getElementById('containerEmail').style.border ="1px solid red"
                aux = true
            }

        if(!document.getElementById('input-senha').value){
            document.getElementById('senha-invalido').style.display ="flex"
            document.getElementById('containerSenha').style.border ="1px solid red"
            aux = true
        }else {
            document.getElementById('senha-invalido').style.display ="none"
            document.getElementById('containerSenha').style.border ="none"
        }
        if(!document.getElementById('input-pais').value){
            document.getElementById('pais-invalido').style.display ="flex"
            document.getElementById('containerPais').style.border ="1px solid red"
            aux = true
        }else {
            document.getElementById('pais-invalido').style.display ="none"
            document.getElementById('containerPais').style.border ="none"
        }
        if(!document.getElementById('input-dataNascimento').value){
            document.getElementById('dataNascimento-invalido').style.display ="flex"
            document.getElementById('containerData').style.border ="1px solid red"
            aux = true
        }else {
            if(document.getElementById('input-dataNascimento').value.length === 10){
                document.getElementById('dataNascimento-invalido').style.display ="none"
                document.getElementById('containerData').style.border ="none"
            }
            else{
                document.getElementById('dataNascimento-invalido').style.display ="flex"
                document.getElementById('containerData').style.border ="1px solid red"
                aux = true
            }
        }
        if(!document.getElementById('input-bio').value){
            document.getElementById('bio-invalido').style.display ="flex"
            document.getElementById('containerBio').style.border ="1px solid red"
            aux = true
        }else {
            document.getElementById('bio-invalido').style.display ="none"
            document.getElementById('containerBio').style.border ="none"

        }

        return aux
    }



  return (
    <FormContainer>
        <TitleForm>
            <h1>Cadastra-se</h1>
            <h2>Para começar, insira os dados abaixo:</h2>
        </TitleForm>
        <InputFormContainer>
            <div id='containerNome'>
                <p id={'nome'}>Nome</p>
                <input id={`input-nome`} className='formInput' placeholder='Nome' onChange={()=>{handleInput('nome', `input-nome`)}}/>
            </div>
            <InvalidText id='nome-invalido'>Nome inválido</InvalidText>
            <div id='containerSobrenome'>
                <p id={'sobrenome'}>Sobrenome</p>
                <input id={`input-sobrenome`} className='formInput' placeholder='Sobrenome' onChange={()=>{handleInput('sobrenome', `input-sobrenome`)}}/>
            </div>
            <InvalidText id='sobrenome-invalido'>Sobrenome inválido</InvalidText>
            <div id='containerEmail'>
                <p id={'email'}>E-mail</p>
                <input id={`input-email`} className='formInput' placeholder='E-mail' onChange={()=>{handleInput('email', `input-email`)}}/>
            </div>
            <InvalidText id='email-invalido'>Email inválido</InvalidText>
            <div id='containerData'>
                <p id={'dataNascimento'}>Data Nascimento</p>
                <IMaskInput mask="00/00/0000" id={`input-dataNascimento`} className='formInput' placeholder='Data de Nascimento' onChange={()=>{handleInput('dataNascimento', `input-dataNascimento`)}}/>
            </div>
            <InvalidText id='dataNascimento-invalido'>Data Nascimento inválida</InvalidText>
            <div id='containerSenha'>
                <p id={'senha'}>Senha</p>
                <div>
                    <input id={`input-senha`} type={showPass} className='formInput' placeholder='Senha' onChange={()=>{handleInput('senha', `input-senha`)}}/>
                    <AiFillEye
                        id='showPass'
                        onClick={()=>{
                            setShowPass('text')
                            document.getElementById('hidePass').style.display = 'flex'
                            document.getElementById('showPass').style.display = 'none'
                        }}
                        style={{color: '#888888'}}
                    />
                    <AiFillEyeInvisible
                        id='hidePass'
                        onClick={()=>{
                            setShowPass('password')
                            document.getElementById('showPass').style.display = 'flex'
                            document.getElementById('hidePass').style.display = 'none'
                        }}
                        style={{color: '#888888', display: 'none'}}
                    />
                </div>
            </div>
            <InvalidText id='senha-invalido'>Senha inválida</InvalidText>
            <div id='containerPais'>
                <p id='pais'>País</p>
                <CountryDropdown
                    id='input-pais'
                    className='formInput'
                    placeholder='Selecione seu país'
                    onChange={(i)=>{
                        handleInput('pais', 'input-pais')
                        setPais(i)
                    }}
                    value={pais}
                />
            </div>
            <InvalidText id='pais-invalido'>País inválido</InvalidText>
            <div id='containerBio'>
                <p id='bio'>Bio</p>
                <textarea id='input-bio' className='formInput' placeholder='Bio' onChange={()=>{handleInput('bio', 'input-bio')}}/>
            </div>
            <InvalidText id='bio-invalido'>Bio inválida</InvalidText>
            <button id='confirmButton' onClick={()=> handleConfimButton()}>Confirmar</button>
        </InputFormContainer>
        <MoreInfoContainer>
            <div className='done-checkbox-container'>
                <div>
                    <input id='moreInfo' readOnly type="checkbox"/>
                    <span className="done-checkmark"></span>
                </div>
            </div>
            <p>Deseja receber mais informações?</p>
        </MoreInfoContainer>
    </FormContainer>
  )
}

export default Form