import { useState, useEffect, useQuery } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Loading from '../components/loading';

import logo from '../images/logo.png'


export default function SignUp () {
    

    // const { data, loading, error } = useQuery(() => {
    //     try {
    //       const response = await fetch('http://myapi.com/data');
    //       const json = await response.json();
    //       return json;
    //     } catch (err) {
    //       throw err;
    //     }
    //   });
    
    //   if (loading) {
    //     return <Loading />;
    //   }
    
    //   if (error) {
    //     return error
    //   }
    
    //   return data
    

    return (
     
        <Loading />
       
    )
}