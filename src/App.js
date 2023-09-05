import { useEffect, useRef, useState } from 'react';
import './App.css';
import UserList from './Component/UserList';
import CreateUser from './Component/CreateUser';

function App() {
  // 유저 항목을 나타내는 앱
  const [users, setUsers] = useState([
    {
      username: 'green',
      email: 'green@naver.com',
      id: 1,
      active: false
    },
    {
      username: 'blue',
      email: 'blue@naver.com',
      id: 2,
      active: false
    },
    {
      username: 'yellow',
      email: 'yellow@naver.com',
      id: 3,
      active: false
    },
    {
      username: 'grey',
      email: 'grey@naver.com',
      id: 4,
      active: false
    }
  ]);
  // id 넣기
  const nextId = useRef(5);
  // 인풋 입력값 상태 받고 
  // 아이디 이멜 넣기
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const {username, email} = inputs;
  const onChange = e =>{
    // e : 이벤트 객체
    const {name, value} = e.target;
    setInputs({
      // input 상태 업데이트
      ...inputs,
      [name]: value
    });
  };
  const onCreate = () =>{
    setUsers([
      // users 배열에 객체를 추가하기
      ...users,
      {
        username: username,
        email: email,
        id:nextId.current,
        active: false
      }
    ]);
    setInputs({
      username:"",
      email:""
    });
    nextId.current +=1;
  }
  const onToggle = (id) =>{
    setUsers(users.map(user => user.id === id? 
      {...user, active: !user.active} : user ))
  };
  //filter
  const onRemove = (id) =>{
    //삭제하려는 id를 제외한 나머지들로 새 배열 만들기
    setUsers(users.filter(user => user.id !== id))
  };
  useEffect(()=>{
    console.log("렌더링 되었습니다");
  },[users]);
  return (
    <div className="App">
        {/* {users: []} props.users */}
        {/* 함수와 기타 값들 CreateUser에 전달하기 */}
        <CreateUser 
        onChange={onChange} 
        username={users} 
        email={email}
        onCreate = {onCreate}/>
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
