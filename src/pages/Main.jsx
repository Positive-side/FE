import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => {
        navigate('/addPost')
      }}>게시글 작성하기</button>
    </div>
  )
}

export default Main