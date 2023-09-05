import React from "react";

function CreateUser({onChange, username, email, onCreate}){
    return(
        <div>
            <input name="username" placeholder="이름" 
             onChange={onChange} />
            <input name="email" placeholder="이메일"
             onChange={onChange}/>
            <button onClick={onCreate} >등록</button>
        </div>
    )
}
export default CreateUser;