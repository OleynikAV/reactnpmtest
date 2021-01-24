import React from 'react';
import '../../App.css'

const Index = async ()=>  {
    try {
        const  url = await "https://prozorro.mavinx.com/api/test/"

    }catch (e){
        console.log(e.message)
    }
}

export default Index;