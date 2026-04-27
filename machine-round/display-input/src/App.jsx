import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [error,setError] = useState(false)

  // const handlerUser = (e)=>{
  //   console.log("sdas",user.length >5)
  //   if(user.length > 5 ){
  //     setError(true)
  //   }
  //   let userValue = e.target.value
  //   setUser(userValue)
  //   setCharCount(userValue.length)

  // }

  
  const handlerUser = (e)=>{
    if(user.length > 5 ){
      setError(true)
    }
    let userValue = e.target.value
    const timeoutId = setTimeout(()=>{
      setError(false)
      setUser(userValue)
    },500)
    return ()=>{      
      clearTimeout(timeoutId)
    }
  }


  // reset 
  const handlerReset = ()=>{
    setUser("")
    setCharCount(0)
    setError(false)
  }


  if(error){
    return(
      <div>
        <h1>Limit exceeded</h1>
      </div>
    )
  }
  return (
    <div>
      <h2>Hello Brother</h2>
      <input
        name="user"
        value={user}
        onChange={(e)=>handlerUser(e)}
      />
      <p>Enter : {user}</p>
      <p>Count : {charCount}</p>

      <button onClick={handlerReset}>Reset</button>
    </div>
  );
}

export default App;


// Task 1:
//   Add a character count
//   Example:Characters: 5  == done 

// Task 2:
//   Add max 20 characters limit
//   If user types more:
//   Either stop input
//   OR show error: "Limit exceeded"


// Task 3:
  // Add a debounce of 500ms
  // Meaning:
  // setText should NOT update immediately
  // Only update after user stops typing for 500ms
  // 💡 Interview hint: setTimeout + clearTimeout





// ISSUE 
  //1 . Debounce is wrong

  //const timeoutId = setTimeout(()=>{ ... },500)
  //return ()=>{ clearTimeout(timeoutId) }

  //Problem:
      //This cleanup function never runs
      //Because you're returning it from handlerUser, not from useEffect

  //2. Character count is not updating correctly
      //const [charCount, setCharCount] = useState(0);
      //You are not updating it anymore after removing old logic.
  //3. ❌ Limit logic is incorrect
      //if(user.length > 5 )
      // 👉 Problem:
      //     You are checking old state (user), not current input
      //     Also requirement was 20 characters, not 5
  //4. ❌ UI breaks completely on error
      //if(error){
      //   return <h1>Limit exceeded</h1>
      // }
      // Interview red flag:
      //     You should not destroy UI
      //     Instead show error message below input


  import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [debouncedUser, setDebouncedUser] = useState("");
  const [error, setError] = useState(false);

  // Debounce logic
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedUser(user);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [user]);

  const handlerUser = (e) => {
    const value = e.target.value;

    if (value.length > 20) {
      setError(true);
      return;
    }

    setError(false);
    setUser(value);
  };

  const handlerReset = () => {
    setUser("");
    setDebouncedUser("");
    setError(false);
  };

  return (
    <div>
      <h2>Hello Brother</h2>

      <input value={user} onChange={handlerUser} />

      {error && <p style={{ color: "red" }}>Limit exceeded</p>}

      <p>Debounced Value: {debouncedUser}</p>
      <p>Characters: {user.length}</p>

      <button onClick={handlerReset}>Reset</button>
    </div>
  );
}

export default App;



// 1. Why debounce should be in useEffect (not inside onChange)
          // const handlerUser = (e) => {
          //   const timeoutId = setTimeout(() => {
          //     setUser(value);
          //   }, 500);

          //   return () => clearTimeout(timeoutId);
          // };
      // Problem:
      //     React ignores the return function from event handlers
      //     So clearTimeout is never called
      //     Result → multiple timeouts keep running ❌
      //✅ Correct version:
          //  useEffect(() => {
          //   const timeoutId = setTimeout(() => {
          //     setDebouncedUser(user);
          //   }, 500);

          //   return () => clearTimeout(timeoutId);
          // }, [user]);