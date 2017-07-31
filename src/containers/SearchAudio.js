import React from "react";
import { connect } from "react-redux";
import reduxApi from "../middleware/api";
import { Navbar, Form, FormGroup, FormControl, Button } from "react-bootstrap";

let SearchAudio = ({ dispatch }) => {
    let input

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="http://developer.yle.fi/index.en.html" target="_blank"  rel="noopener noreferrer">YLE Audio Search</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <Form onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(reduxApi.actions.getItems({ searchText: input.value }))

                    }}>
                        <FormGroup>
                            <FormControl type="text" bsClass="form-control" placeholder="Search" inputRef={node => {
                                input = node
                            }} />

                        </FormGroup>
                        {" "}
                        <Button type="submit">Submit</Button>
                    </Form>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>

    )
}

SearchAudio = connect()(SearchAudio)

export default SearchAudio
