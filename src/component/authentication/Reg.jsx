import { useRef, useState, useEffect } from "react"

const userRegex = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/


const Reg = () => {

    const userRef = useRef();
    const errRef = useRef()

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [MatchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect (()=> {
        userRef.current.focus();
    }, [])

    useEffect (() => {
        const result = userRegex.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);      
    }, [user])

    useEffect(()=>{
        const result = pwdRegex.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])


  return (
    <div>
      
    </div>
  )
}

export default Reg
