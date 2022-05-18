import React from 'react'
import {Row, Card,Col} from "react-bootstrap"
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' //useSelector a redux predefined function
import { sendData, sendOneMovie } from '../redux/action'

function Movie() {
const dispatch = useDispatch () 
const mouhib = useSelector (state=>state.movies)
const getMovie = async () => {
        try { 
            const {data} = await axios.get("https://movie-app-gmc.herokuapp.com/api/movies")
            console.log(data)
            dispatch (sendData(data))//result in the action.js
        } catch (error) {
            console.log(error)
        }

}
const getOneMovie = async (id) => {
    try { 
        const {data} = await axios.get("https://movie-app-gmc.herokuapp.com/api/movies/"+id)
        console.log(data)
        dispatch (sendOneMovie(data))//result in the action.js
    } catch (error) {
        console.log(error)
    }

}
useEffect(()=>{

    getMovie()
},[])


    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {mouhib?.map((el, idx) => (
                    <Col>
                        <Card onClick={() => getOneMovie(el._id)}>
                            <Card.Img variant="top" src={el.imgUrl} />
                            <Card.Body>
                                <Card.Title>{el.title}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Movie