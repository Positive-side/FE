import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const AddPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [status, setStatus] = useState('');

  const submit = (title, contents, status) => {
    console.log('제목 :', title, '내용 :', contents, '상태 :', status)
    // axios.post(`url`, {
    //   title,
    //   contents,
    //   status,
    // }).then((res) => {
    //   console.log('성공', res)
    // }).catch((err) => {
    //   console.log('실패', err)
    // })
  }

  return (
    <Wrap>
      <ContentsBox>
        <p>제목</p>
        <input type='text' placeholder='제목을 입력해주세요' onChange={(e) => { setTitle(e.target.value) }} />
      </ContentsBox>
      <ContentsBox>
        <p>내용</p>
        <textarea type='text' placeholder='내용을 입력해주세요' onChange={(e) => { setContents(e.target.value) }} />
      </ContentsBox>
      <CheckBox>
        <form>
          <input type='radio' name='status' value='공개' onChange={(e) => { setStatus(e.target.value) }} />공개 &nbsp;&nbsp;&nbsp;
          <input type='radio' name='status' value='비공개' onChange={(e) => { setStatus(e.target.value) }} />비공개
        </form>
      </CheckBox>
      <BtnBox>
        <button
          className='cancel'
          onClick={() => {
            navigate('/')
          }}
        >취소하기</button>
        <button onClick={() => {
          submit(title, contents, status)
        }}>제출하기</button>
      </BtnBox>
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentsBox = styled.div`
  width: 90%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
      width: 100%;
      text-align: left;
      font-family: 'Noto Sans KR';
      font-size: 20px;
      font-weight: 700;
      color: #FEC871;
    }

    input {
      width: 99.3%;
      height: 40px;
      border: none;
      border-radius: 10px;
    }

    textarea {
      width: 95%;
      height: 400px;
      border: none;
      border-radius: 10px;
      padding: 13px 10px;
      resize: none;

      @media screen and (max-width: 500px){
        height: 250px;
      }
    }
`

const CheckBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR';
    font-size: 20px;
    font-weight: 700;
    color: #FEC871;
  }

  input {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`

const BtnBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  button {
    width: 200px;
    height: 60px;
    margin: 10px;
    border: none;
    border-radius: 10px;

    font-family: 'Noto Sans KR';
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    background-color: #FEC871;

    :hover {
      transform: scale(0.98);
      cursor: pointer;
    }
  }

  .cancel {
    background-color: #888888;
  }
`

export default AddPost