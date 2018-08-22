import React, { Component } from "react";
import { Media, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom"
import "./threads.css"

const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }



const Threads = (props) => {
        const regex = new RegExp(escapeRegex(props.inputValue), "gi");
        const threadsList = props.threads.map((thread, id) => {
            if (thread.thread_title.match(regex)) {
                return (
                    <Container>
                        <Row id="threadsRow" >
                            <Col>
                            <ListGroup>
                                <ListGroupItem>
                                        <div key = {thread.id}>
                                            <Media>
                                                <Media body>
                                                <Media heading>
                                                <Link class="Link" to={{
                                                pathname: "/show/" + thread.id,
                                                state: {threadPotato: thread}
                                            }}><span>{thread.thread_title}</span></Link><br/>
                                                </Media>
                                                </Media>
                                            </Media>
                                        </div>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                        )
            }

        })
        return (
            <div id="searchBar" >
            <h1 id="welcomeTag" >Welcome, SRVVRS!</h1>
            <label>
                Search Threads:
            </label>
                <input type="text" value={props.inputValue} onChange={props.updateInputValue}/>
                <h3 id="threadsTag" >Threads</h3>
                <ul>
                    {threadsList}
                </ul>
            </div>
        )
    
}


export default Threads