import React from 'react'
import {
    CardContainer,
    Card,
    CardFlex1,
    CardFlex2,
    CardFlex3,
    CardFlex4,
    Balance,
    AccountHolderName
} from './Cards.styled'
import props from '../BankData.json'

const COLORS = [
    "rgba(66, 133, 244, 0.8)",
    "rgba(253, 162, 51, 0.8)",
    "rgba(240, 142, 168, 0.8)",
    "rgba(135, 93, 245, 0.8)",
    "rgba(105, 218, 86, 0.8)",
    "rgba(193, 80, 16, 0.8)",
    "rgba(51, 168, 253, 0.8)",
    "rgba(45, 87, 235, 0.8)",
]

const Cards = () => {
    let cardCount = -1
    return (
        <CardContainer>
            {props.Payload.map(bank => { 
                return bank.data.map(account => {
                    var accountDetails = {
                        bankName: bank.fipID
                    }
                    accountDetails.accountNumber = account.maskedAccNumber
                    accountDetails.accountHolderName = account.decryptedFI.account?.profile?.holders?.holder[0]?.name
                    accountDetails.accountHolderFirstName = account.decryptedFI.account?.profile?.holders?.holder[0]?.name?.split(" ")[0]
                    accountDetails.accountHolderLastName = account.decryptedFI.account?.profile?.holders?.holder[0]?.name?.split(" ")[2]
                    accountDetails.balance = account.decryptedFI.account?.transactions?.transaction.pop().currentBalance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    cardCount++
                    return (
                        <Card backgroundColor={COLORS[cardCount]}>
                            <CardFlex1>
                                <img 
                                    style={{ marginRight: "10px" }} 
                                    src='./chip.svg'
                                    alt='chip'
                                ></img>
                                {accountDetails.bankName.toUpperCase()}
                            </CardFlex1>
                            <CardFlex2>
                                **** **** **** {accountDetails.accountNumber.slice(8)}
                            </CardFlex2>
                            <CardFlex3>
                                AccountHolder Name
                            </CardFlex3>
                            <CardFlex4>
                                <AccountHolderName>
                                    {accountDetails.accountHolderFirstName? accountDetails.accountHolderFirstName: "RUPESH"} &nbsp;
                                    {accountDetails.accountHolderLastName? accountDetails.accountHolderLastName: "RAUT"}
                                </AccountHolderName>
                                <Balance>₹ {accountDetails.balance}</Balance>
                            </CardFlex4>
                        </Card>
                    )
                })        
            })}
        </CardContainer>
    )
}

export default Cards