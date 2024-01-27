
import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useLogin=()=>{

    const [hata,setHata]=useState(null)

    const [yukleniyor,setYukleniyor]=useState(null)

    const {dispatch} = useAuthContext() 

    const login=async (email,parola)=>{

        setYukleniyor(true)
        setHata(null)

        const response = await fetch('/api/admin/1YV1YV741ZWTifckheeb=gdarolrolgda', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, parola })
          })

        
        const json=await response.json()
        
        if(!response.ok){
            setYukleniyor(false)
            setHata(json.hata)
        }

        if(response.ok){
            localStorage.setItem('admin',JSON.stringify(json))

            dispatch({type:'LOGIN',payload:json})

            setYukleniyor(false)
        }

    }


    return {login,yukleniyor,hata}

}