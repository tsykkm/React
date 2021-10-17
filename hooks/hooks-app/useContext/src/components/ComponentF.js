import React, { useContext } from 'react'
import { UserContext, LanguageContext } from '../App'

function ComponentF() {
    const user = useContext(UserContext);
    const lang = useContext(LanguageContext);
    return (
        <div>
            {/* 1. createContextを使った書き方 */}
            {/* <UserContext.Consumer>
                {
                    user => {
                        return (
                            <LanguageContext.Consumer>
                                {
                                    lang => {
                                        return (<div>{user.name + lang}</div>)
                                    }
                                }
                            </LanguageContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer> */}
            {/* 2.useContextを使った書き方 */}
            <div>{user.name}: {lang}</div>
        </div>
    )
}

export default ComponentF
