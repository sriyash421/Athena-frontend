import React from 'react';
import Course from '../course/Course'
import {Container} from 'material-ui-core'

const Result = ({results}) => {
    const resultList = results.length ? (
        results.map(result => {
            return (
                <div key={result.id} className="result_box">
                    <Course course={result}/>
                </div>
            )
        })
    ) : (
        <div className="result_box text-center">
            <Course course={{name:"No Results"}}/>
        </div>
    )
    return (
        <Container fixed>
            {resultList}
        </Container>
    )
}

export default Result;