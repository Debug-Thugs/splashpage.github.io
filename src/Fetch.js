import React, {useState, useEffect} from 'react';
import './App.css';
import {fire,db} from './fire';

const Fetch=(props)=>{
    const [page1, setPage]= useState([]);

    useEffect(()=>{
        db.collection('page1').onSnapshot(snapshot => {
          setPage(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data()
          })));
        })
      },[]);

      if(props.isAdmin){
        return(
            page1.map(({post, id}) => {
<div>
                <h1>Details of the Users</h1>
                <h3>Email: {post.email}</h3>
        
            </div>
            }
              )
        
            )
      }else{
        return(
            <div>
                <h1>You're not authorized</h1>
            </div>
        )
      }
}

export default Fetch;