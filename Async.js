const firstFun=()=>{
    console.log("First function invoked")
}

const secondFun=()=>{
    setInterval(()=>{
        console.log("Second function invoked")
    },5000)
}

const thirdFunction=()=>{
    console.log("Third function invoked")
}

secondFun()
firstFun()
thirdFunction()