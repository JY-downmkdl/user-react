import React, { useEffect } from "react";
function UserList({users, onRemove, onToggle}){
    //const {users,username} = props;
    return(
        <ul>
            {users.map(user =>{
                <User user={user}
                onRemove={onRemove}
                onToggle={onToggle}
                key={user.id}/>
            })}
        </ul>
    )
}

function User({user, onToggle, onRemove}){
    useEffect(()=>{
        console.log("화면에 나타남");
        return()=>{
            console.log("화면에서 사라짐");
        }
    },[]);
    return(
        <li key={user.id}>
            <b onClick={() => onToggle(user.id)} style={{color: user.active?'blue':'black'}}>
                이름: {user.username}
                이메일 : {user.email}
            </b>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </li>

    )
}
export default UserList;