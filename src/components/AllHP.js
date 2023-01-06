import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function AllHP() {
  const [errors, setErrors] = useState(false)
  const [chars, setChars] = useState([])
  const [filteredChars, setFilteredChars] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getCharData = async () => {
      try {
        const { data } = await axios.get('https://hp-api.onrender.com/api/characters/students')
        setChars(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getCharData()
  }, [])

  useEffect(() => {
    setFilteredChars(
      chars.filter(char => char.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    )
  }, [searchTerm, chars])

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <Container as="main" className='char-index text-center'>
      <h1 className='text-center mb-4'> Harry Potter </h1>
      <div className='search'><input type="text" value={searchTerm} placeholder="Search for a Character" onChange={handleSearch} /></div>
      <Row>
        {filteredChars.length > 0
          ?
          filteredChars.map(char => {
            const { name, image } = char
            console.log(char)
            return (
              <Col key={name} md="6" lg="4" className='mb-4'>
                <Card>
                  <Card.Img variant='top' src={image}></Card.Img>
                  <Card.Body className='bg-light'>
                    <Card.Title className='text-center mb-0'> {name} </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
          :
          <>
            {errors ? <h2> Error </h2> : <h2> Loading </h2>}
          </>}
      </Row>
    </Container>
  )
}

export default AllHP
