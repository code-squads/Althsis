import React from 'react'
import {
    Card,
    Container,
    Flexbox1
} from './DetailedAccount.styled'

const DetailedAccount = (props) => {
    const accountDetails = props.account
    return (
        <Container>
            <Card>
                <Flexbox1>
                    <img
                        style={{ marginRight: "10px" }}
                        src="./chip.svg"
                        alt="chip"
                    ></img>
                    {accountDetails.bankName.toUpperCase()}
                </Flexbox1>
            </Card>
        </Container>
    )
}

export default DetailedAccount