// /home/deepak/Desktop/RealTime-Portfolio/realtime/src/Hooks/GenerateRandomNames.js

// String containing lowercase, uppercase, digits 0-9 and common special characters

// declaring empty stirng 


function UseGenerateRandomNames()
{
    const MIXED_CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomName=""
    // runnign loop on it
    for(let i=0;i<9;i++)
    {   
        let randomIndex=Math.round(Math.random()*MIXED_CHARACTERS.length-0)
        randomName+=MIXED_CHARACTERS[randomIndex]
    }
  return randomName
}

export default UseGenerateRandomNames